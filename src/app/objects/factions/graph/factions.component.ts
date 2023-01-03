import { Component, OnInit } from '@angular/core';
import { LuCoreDataService, LuJsonService } from '../../../services';

declare var vis: any;

@Component({
  selector: 'app-factions-graph',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsGraphComponent implements OnInit {

  table: any[];
  network: any;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable()
  }

  getTable(): void {
    this.coreData.getFullTable("Factions").subscribe(table => this.loadTable(table));
  }

  loadTable(table: any[]): void {
    this.table = table;

    var container = document.getElementById('mynetwork');

    var nodes = [];

    for (let node of this.table) {
      nodes.push({ id: node.faction, label: `${node.faction}` });
    }

    var edges = [];

    for (let node of this.table) {
      /*for (let part of node.factionList.split(','))
      {
        edges.push({from: node.faction, to: +part});
      }*/

      if (node.friendList) {
        for (let part of node.friendList.split(',')) {
          edges.push({ from: node.faction, to: +part, color: { color: '#00ff00', inherit: false } });
        }
      }

      if (node.enemyList) {
        for (let part of node.enemyList.split(',')) {
          edges.push({ from: node.faction, to: +part, color: { color: '#ff0000', inherit: false } });
        }
      }
    }

    var data = {
      nodes: nodes,
      edges: edges
    };

    var options = {
      width: '100%',
      height: '1000px',
      physics: {
        barnesHut: {
          gravitationalConstant: -2000
        }
      },
      edges: {
        width: 5
      }
    }

    this.network = new vis.Network(container, data, options);
    this.network.on('select', params => this.select(params));
  }

  select(params: any): void {
    console.log(params);
  }

}
