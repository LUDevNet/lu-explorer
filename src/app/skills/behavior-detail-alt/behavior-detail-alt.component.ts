import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DB_Behavior } from '../../../defs/cdclient';
import { Rev_Behavior } from '../../../defs/api';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

declare var vis: any;


@Component({
  selector: 'app-behavior-detail-alt',
  templateUrl: './behavior-detail-alt.component.html',
  styleUrls: ['./behavior-detail-alt.component.css', "../../../../node_modules/vis/dist/vis-network.min.css"]
})
export class BehaviorDetailAltComponent implements OnInit {
  id: number;

  nodes: any[] = [];
  edges: any[] = [];
  behaviors: any = {};
  network: any;
  container: any;
  max_level: number = 1;
  pending: number = 0;

  processed: Set<number>;
  skill: number[];

  selectedBehavior: DB_Behavior;
  errors: number[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private luCoreData: LuCoreDataService) {
  }

  process(id: number, level: number): void {
    this.pending += 1;

    level = this.nodes.find(node => node.id === id).level;
    if (!this.processed.has(id)) {
      this.processed.add(id);
      let behavior = this.behaviors[id];
      this.children(id, behavior, level + 1);
    }

    this.pending -= 1;
    if (this.pending == 0) {
      this.redraw();
    }
  }

  fix_level(id: number, node: any, level: number): void {
    if (node.level < level) {
      node.level = level;
      this.edges.filter(edge => edge.from === node.id)
        .forEach(e2 => this.fix_level(e2.to, this.nodes.find(node => node.id === e2.to), level + 1));
    }
  }

  add_edge(id: number, child_id: number, level: number, label: string) {
    this.max_level = Math.max(this.max_level, level);
    let edge = this.edges.find(edge => edge.from === id && edge.to === child_id);
    if (edge) {
      edge.label += "\n" + label;
    } else {
      this.edges.push({ from: id, to: child_id, label: label });
    }

    let result = this.nodes.find(node => node.id === child_id);
    let parent = this.nodes.find(node => node.id === id);
    if (result) {
      this.fix_level(child_id, result, parent.level + 1)
    } else {
      this.nodes.push({ id: child_id, label: String(child_id), level: parent.level + 1 });
      this.process(child_id, parent.level + 1);
    }
  }

  add_child(id: number, behavior: DB_Behavior, level: number, key: string, name: string = key) {
    if (key && behavior.parameters[key]) this.add_edge(id, behavior.parameters[key], level, name);
  }

  children(id: number, behavior: DB_Behavior, level: number): void {
    let node = this.nodes.find(node => node.id === id);
    if (!behavior) {
      node.label = "NULL";
      this.errors.push(id);
      return;
    }
    let ty = behaviorTypes[behavior.templateID];
    if (ty) {
      // Set the label
      node.label = ty.name;
      // Set the visuals
      if (ty.image) {
        node.shape = 'image';
        node.image = `/lu-res/${ty.image}`;
      } else if (ty.shape) {
        node.shape = ty.shape;
      }
      // Set the connections
      if (ty.children) {
        if (ty.children === true) {
          // Use all keys
          for (let key in behavior.parameters) {
            this.add_child(id, behavior, level, key, '');
          }
        } else if (ty.children === "seq") {
          // Use 1..N
          let i = 1;
          while (`behavior ${i}` in behavior.parameters) {
            this.add_child(id, behavior, level, `behavior ${i}`, `${i}`);
            i++;
          }
        } else {
          for (let key in ty.children) {
            this.add_child(id, behavior, level, key, ty.children[key]);
          }
        }
      }
    }
  }

  ngOnInit() {
    this.behaviors = {};
    this.processed = new Set();

    this.id = +this.route.snapshot.paramMap.get('id');
    this.container = document.getElementById('mynetwork');

    this.luCoreData.getRevEntry<Rev_Behavior>('behaviors', this.id).subscribe(x => {
      this.behaviors = x._embedded;
      this.skill = x.skill;
      this.nodes.push({ id: this.id, label: String(this.id), level: 0 });
      this.process(this.id, 0);
      this.redraw();
      this.selectedBehavior = this.behaviors[this.route.snapshot.paramMap.get('selected')];
      this.network.selectNodes([this.selectedBehavior.behaviorID]);
    });
  }

  redraw(): void {
    if (this.network !== undefined) {
      this.network.destroy();
      this.network = undefined;
    }

    var data = {
      nodes: this.nodes,
      edges: this.edges
    };

    var options = {
      width: '100%',
      height: '100%',
      nodes: {
        font: {
          size: 30,
          face: 'nunito',
          color: '#fff',
        },
        shape: 'box',
        shapeProperties: {
          borderRadius: 10
        },
        color: {
          background: '#6161FF',
          border: '#6161FF',
          highlight: {
            background: '#D14600',
            border: '#D14600',
          },
        },
      },
      edges: {
        smooth: {
          type: 'discrete',
          forceDirection: 'vertical',
          roundness: 0.4
        },
        font: {
          size: 30,
          strokeWidth: 0,
          color: '#ddd',
          face: 'nunito',
          background: '#111'
        },
        arrows: {
          to: true
        },
        color: {
          color: '#6161FF',
          highlight: '#D14600',
        },
        selectionWidth: 10,
        arrowStrikethrough: false
      },
      layout: {
        hierarchical: {
          direction: 'LR',
          nodeSpacing: 100,
          levelSeparation: 320
        },
      },
      physics: {
        hierarchicalRepulsion: {
          nodeDistance: 150
        },
        barnesHut: {
          springLength: 200,
          centralGravity: 0.1
        }
      }
    };
    this.network = new vis.Network(this.container, data, options);
    this.network.on('click', params => {
      this.select(params.nodes[0], "to");
    });
    this.network.on('oncontext', params => {
      params.event.preventDefault();
      const nodeId = this.network.getNodeAt(params.pointer.DOM);
      this.select(nodeId, "from");
    });
  }

  select(nodeId, dir): void {
    if (!nodeId) {
      this.selectedBehavior = undefined;
      return;
    }
    this.router.navigate(['..', nodeId], { relativeTo: this.route });
    this.selectedBehavior = this.behaviors[nodeId];
    let nodes = [];
    let edges = [];
    this.getConnected(this.selectedBehavior.behaviorID, nodes, edges, dir);
    this.network.setSelection({ nodes: nodes, edges: edges }, { highlightEdges: false });
  }

  getConnected(nodeId, nodes, edges, dir) {
    nodes.push(nodeId);
    const node = this.network.body.nodes[nodeId];
    for (const edge of node.edges) {
      if (dir === "from" && edge.toId == node.id) {
        edges.push(edge.id);
        this.getConnected(edge.fromId, nodes, edges, dir);
      } else if (dir === "to" && edge.fromId == node.id) {
        edges.push(edge.id);
        this.getConnected(edge.toId, nodes, edges, dir);
      }
    }
  }
}
