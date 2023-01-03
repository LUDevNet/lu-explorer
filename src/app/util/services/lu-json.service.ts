import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DB_Icons,
  DB_AccessoryDefaultLoc,
  DB_SkillBehavior,
  DB_mapItemTypes,
  DB_BrickColors,
  DB_RenderComponent,
  DB_Factions,
  DB_Preconditions,
  DB_mapShaders,
  DB_Objects,
  DB_ZoneTable,
  DB_MissionTasks,
  DB_LootTable,
  TableName,
  DB_PackageComponent,
  DB_ItemComponent,
  DB_ModuleComponent,
  DB_CollectibleComponent,
  DB_PhysicsComponent,
  DB_ScriptComponent,
  DB_NpcIcons,
  DB_Missions,
  DB_MissionText,
  Table,
  DB_CurrencyTable,
} from '../../../defs/cdclient';

import { LuCoreDataService } from './lu-core-data.service';

export class Optional<T> {
  data: T;
  $error: string;
}

export interface APIObject extends DB_Objects {
  skills: any[],
  components: any[],
  icons: any[],
}


export interface DB_MissionsBySubtype {
  [defined_subtype: string]: number[];
}
export interface DB_MissionsByType {
  [defined_type: string]: DB_MissionsBySubtype;
}

@Injectable()
export class LuJsonService {

  constructor(private coreData: LuCoreDataService) { }

  getAccessoryDefaultLoc(): Observable<DB_AccessoryDefaultLoc[]> {
    return this.getSingleTable("AccessoryDefaultLoc");
  }

  getZones(): Observable<DB_ZoneTable[]> {
    return this.getSingleTable("ZoneTable");
  }

  getZone(id: number): Observable<DB_ZoneTable> {
    return this.coreData.getSingleTableEntry('ZoneTable', id);
  }

  getRenderComponent(id: number): Observable<DB_RenderComponent> {
    return this.coreData.getSingleTableEntry('RenderComponent', id);
  }

  getSkill(id: number): Observable<DB_SkillBehavior> {
    return this.coreData.getSingleTableEntry("SkillBehavior", id);
  }

  getIcon(id: number): Observable<DB_Icons> {
    return this.coreData.getSingleTableEntry("Icons", id);
  }

  getObject(id: number): Observable<any> {
    const obj = this.coreData.getTableEntry('Objects', id);
    const cr = this.coreData.getTableEntry('ComponentsRegistry', id);
    const skills = this.coreData.getTableEntry('ObjectSkills', id);
    return zip(obj, cr, skills).pipe(map(([obj, comp, skills]) => {
      let components = {};
      comp.forEach(x => { components[x.component_type] = x.component_id; });
      return Object.assign(obj[0], {
        components,
        skills
      })
    }));
  }

  getPackageComponent(id: number): Observable<DB_PackageComponent> {
    return this.coreData.getSingleTableEntry('PackageComponent', id);
  }

  getPrecondition(id: number): Observable<DB_Preconditions> {
    return this.coreData.getSingleTableEntry('Preconditions', id);
  }

  getItemComponent(id: number): Observable<DB_ItemComponent> {
    return this.coreData.getSingleTableEntry('ItemComponent', id);
  }

  getModuleComponent(id: number): Observable<DB_ModuleComponent> {
    return this.coreData.getSingleTableEntry('ModuleComponent', id);
  }

  getCollectibleComponent(id: number): Observable<DB_CollectibleComponent> {
    return this.coreData.getSingleTableEntry('CollectibleComponent', id);
  }

  getPhysicsComponent(id: number): Observable<DB_PhysicsComponent> {
    return this.coreData.getSingleTableEntry('PhysicsComponent', id);
  }

  getScriptComponent(id: number): Observable<DB_ScriptComponent> {
    return this.coreData.getSingleTableEntry('ScriptComponent', id);
  }

  getDestructibleComponent(id: number): Observable<any> {
    return this.coreData.getSingleTableEntry('DestructibleComponent', id);
  }

  getRebuildComponent(id: number): Observable<any> {
    return this.coreData.getSingleTableEntry('RebuildComponent', id);
  }

  getLootTableGroupByIndex(id: number): Observable<{ loot_table: DB_LootTable[] }> {
    return this.coreData.getRevEntry('loot_table_index', id)
  }

  getNpcIcon(id: number): Observable<DB_NpcIcons> {
    return this.coreData.getSingleTableEntry('NpcIcons', id);
  }

  getMission(id: number): Observable<DB_Missions> {
    return this.coreData.getSingleTableEntry('Missions', id);
  }

  getMissionTasks(id: number): Observable<DB_MissionTasks[]> {
    return this.coreData.getTableEntry('MissionTasks', id);
  }

  getMissionText(id: number): Observable<DB_MissionText> {
    return this.coreData.getSingleTableEntry('MissionText', id);
  }

  getObjectTypes(): Observable<string[]> {
    return this.coreData.getRev('object_types');
  }

  getObjectType(type: string): Observable<number[]> {
    return this.coreData.getRevEntry('object_types', type);
  }

  getBrickColors(): Observable<DB_BrickColors[]> {
    return this.getSingleTable('BrickColors');
  }

  getShadersMap(): Observable<DB_mapShaders[]> {
    return this.getSingleTable('mapShaders');
  }

  getItemTypes(): Observable<DB_mapItemTypes[]> {
    return this.getSingleTable('mapItemTypes');
  }

  getSingleTable<K>(table: K & TableName): Observable<Table<K>> {
    return this.coreData.getTableEntry(table, "all")
  }

  getGeneric<T>(id: number, table: TableName, paged: boolean): Observable<T> {
    if (paged) {
      return this.getPagedJsonData(id, table);
    }
    else {
      return this.getJsonData(id, table);
    }
  }

  getCurrencyIndex(id: number): Observable<DB_CurrencyTable[]> {
    return this.coreData.getTableEntry("CurrencyTable", id);
  }

  getFactions(): Observable<DB_Factions[]> {
    return this.getSingleTable("Factions");
  }

  getFaction(index: number): Observable<DB_Factions> {
    return this.getFactions().pipe(map(factions => factions.find(v => v.faction == index)));
  }

  getJsonData(id: number, type: TableName): Observable<any> {
    return this.coreData.getSingleTableEntry(type, id);
  }

  getPagedJsonData(id: number, type: TableName): Observable<any> {
    return this.coreData.getSingleTableEntry(type, id);
  }

}
