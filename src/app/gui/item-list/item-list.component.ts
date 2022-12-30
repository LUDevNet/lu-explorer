import { Component, ComponentRef, createComponent, EnvironmentInjector, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { first, map, shareReplay, switchMap } from 'rxjs/operators';
import { DB_ComponentsRegistry, DB_RenderComponent } from '../../../defs/cdclient';
import { RENDER_COMPONENT_ID } from '../../../defs/components';
import { mapRec, mapToDict, mapToMultiDict, pick, values } from '../../../defs/rx';
import { LuCoreDataService } from '../../services';
import { ItemTooltipComponent } from '../item-tooltip/item-tooltip.component';

interface DB_Objects_Ref {
  id: number;
  name?: string;
  displayName?: string;
}

const OBJECT_KEYS: Array<keyof DB_Objects_Ref> = [
  "id",
  "name",
  "displayName",
];

class GameObject {
  tooltipComponentRef: ComponentRef<ItemTooltipComponent>;

  constructor(
    public id: number,
    public $table: Observable<DB_Objects_Ref>,
    public $renderComponent: Observable<DB_RenderComponent_Ref>,
    environmentInjector: EnvironmentInjector,
  ) {
    this.tooltipComponentRef = createComponent(ItemTooltipComponent, { environmentInjector })
    this.tooltipComponentRef.instance.id = id;
    this.$table.pipe(first()).subscribe(o => {
      let title = o?.displayName || o?.name || "Object #" + this.id;
      this.tooltipComponentRef.instance.title = title;
      this.tooltipComponentRef.changeDetectorRef.detectChanges();
    })
  }
}

const COMPONENTS_REGISTRY_KEYS: Array<keyof DB_ComponentsRegistry> = [
  "id",
  "component_type",
  "component_id",
];

interface DB_RenderComponent_Ref {
  id: number;
  icon_asset: string,
  IconID: string,
}

const RENDER_COMPONENT_KEYS: Array<keyof DB_RenderComponent & keyof DB_RenderComponent_Ref> = [
  "id",
  "icon_asset",
  "IconID",
];

@Component({
  selector: 'lux-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input()
  ids: number[];

  $ids: ReplaySubject<number[]>;
  objects: GameObject[];

  constructor(
    private luCoreData: LuCoreDataService,
    private environmentInjector: EnvironmentInjector,
  ) {
    this.$ids = new ReplaySubject(1);
  }

  ngOnInit(): void {
    const cd = this.luCoreData;
    let $table = cd.queryTableEntries("Objects", this.ids, OBJECT_KEYS).pipe(
      mapToDict("id"),
      shareReplay(1)
    );
    let $renderComponentIds = cd.queryTableEntries<DB_ComponentsRegistry>("ComponentsRegistry", this.ids, COMPONENTS_REGISTRY_KEYS).pipe(
      mapToMultiDict("id"),
      mapRec(v => v.find(x => x.component_type == RENDER_COMPONENT_ID)?.component_id),
      shareReplay(1),
    );
    let $renderComponents = $renderComponentIds.pipe(
      values(),
      cd.queryTableEntries$<number[], DB_RenderComponent_Ref>("RenderComponent", RENDER_COMPONENT_KEYS),
      mapToDict("id"),
      shareReplay(1),
    );
    this.objects = Array.from(this.ids, id => {
      let $rcId = $renderComponentIds.pipe(pick(id));
      let $rc = $rcId.pipe(switchMap(rcId => $renderComponents.pipe(pick(rcId))));
      return new GameObject(
        id,
        $table.pipe(pick(id)),
        $rc,
        this.environmentInjector,
      )
    })
  }
}
