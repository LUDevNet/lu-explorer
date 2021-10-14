import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of, zip } from 'rxjs';
import { catchError, find, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import {
  DB_Icons,
  DB_AccessoryDefaultLoc,
  DB_Behavior,
  DB_SkillBehavior,
  DB_mapItemTypes,
  DB_BrickColors,
  DB_RenderComponent,
  ActivityRewardsPod,
  DB_ObjectRef_ByComponent,
  DB_Factions,
  DB_Preconditions,
  CurrencyTablePod,
  DB_mapShaders,
  DB_Objects,
  DB_ObjectSkills,
  DB_ComponentsRegistry,
  DB_ZoneTable,
  DB_ActivityRewards,
  DB_MissionTasks,
} from '../../cdclient';

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

  private apiUrl;
  private tablesUrl;
  private localeUrl;
  private scriptsUrl;
  private behaviorBaseUrl;
  private skillBaseUrl;
  private renderBaseUrl;
  private scriptBaseUrl;
  private physicsBaseUrl;
  private itemBaseUrl;
  private lootMatrixBaseUrl;
  private lootTableBaseUrl;
  private iconsBaseUrl;
  private packBaseUrl;
  private precondBaseUrl;
  private objectsBaseUrl;
  private objectsByTypeUrl;
  private objectsByComponentUrl;
  private zonesBaseUrl;
  private zonesIndexUrl;
  private accIndexUrl;

  private jsonStore;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private luCoreDataService: LuCoreDataService) {

    this.jsonStore = {};

    this.apiUrl = "/lu-json/";

    this.tablesUrl = "tables/";
    this.localeUrl = "locale/";
    this.scriptsUrl = "scripts/";
    this.behaviorBaseUrl = "behaviors/";
    this.objectsBaseUrl = "objects/";

    this.skillBaseUrl = this.tablesUrl + "SkillBehavior/";
    this.renderBaseUrl = this.tablesUrl + "RenderComponent/";
    this.scriptBaseUrl = this.tablesUrl + "ScriptComponent/";
    this.physicsBaseUrl = this.tablesUrl + "PhysicsComponent/";
    this.itemBaseUrl = this.tablesUrl + "ItemComponent/";
    this.lootMatrixBaseUrl = this.tablesUrl + "LootMatrix/";
    this.lootTableBaseUrl = this.tablesUrl + "LootTable/";
    this.packBaseUrl = this.tablesUrl + "PackageComponent/";
    this.precondBaseUrl = this.tablesUrl + "Preconditions/";
    this.zonesBaseUrl = this.tablesUrl + "ZoneTable/";
    this.iconsBaseUrl = this.tablesUrl + "Icons/";
    this.objectsByTypeUrl = this.objectsBaseUrl + "groupBy/type/";
    this.objectsByComponentUrl = this.objectsBaseUrl + "groupBy/component/";
    this.zonesIndexUrl = this.zonesBaseUrl + "index";
    this.accIndexUrl = this.tablesUrl + "AccessoryDefaultLoc/index";
  }

  private log(message: string) {
    this.messageService.add('LuJsonService: ' + message);
  }

  makeRequest(url: string, method: string, wrapResult: boolean = false): Observable<any> {
    if (!this.jsonStore.hasOwnProperty(url)) {
      let httpRequest = this.http.get(this.apiUrl + url + '.json')
        .pipe(
          tap(data => console.log(`Completed ${method}`)),
          map(x => wrapResult ? { data: x } : x),
          catchError(this.handleError(method, undefined, wrapResult)),
        )
      let responseSubject = new ReplaySubject(1);
      httpRequest.subscribe(responseSubject);
      this.jsonStore[url] = responseSubject;
    }
    return this.jsonStore[url];
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T, wrapError: boolean = false) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error.message); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      if (wrapError) {
        return of({ $error: `${operation} failed: ${error.message}` } as unknown as T);
      }
      return of(result as T);
    };
  }

  clearJsonStore() {
    this.jsonStore = {};
  }

  getAccessoryDefaultLoc(): Observable<DB_AccessoryDefaultLoc[]> {
    return this.getSingleTable("AccessoryDefaultLoc");
  }

  getZones(): Observable<DB_ZoneTable[]> {
    return this.getSingleTable<DB_ZoneTable>("ZoneTable");
  }

  getZone(id: number): Observable<DB_ZoneTable> {
    return this.luCoreDataService.getSingleTableEntry('ZoneTable', id);
  }

  getRenderComponent(id: number): Observable<DB_RenderComponent> {
    return this.luCoreDataService.getSingleTableEntry<DB_RenderComponent>('RenderComponent', id);
  }

  getBehavior(id: number): Observable<DB_Behavior> {
    // TODO: paged
    let page = Math.floor(id / 1024);
    return this.makeRequest(this.behaviorBaseUrl + page + "/" + id, `getBehavior(${id})`);
  }

  getSkill(id: number): Observable<DB_SkillBehavior> {
    return this.luCoreDataService.getSingleTableEntry<DB_SkillBehavior>("SkillBehavior", id);
  }

  getIcon(id: number): Observable<DB_Icons> {
    return this.luCoreDataService.getSingleTableEntry<DB_Icons>("Icons", id);
  }

  getObject(id: number): Observable<any> {
    const obj = this.luCoreDataService.getTableEntry<DB_Objects>('Objects', id);
    const cr = this.luCoreDataService.getTableEntry<DB_ComponentsRegistry>('ComponentsRegistry', id);
    const skills = this.luCoreDataService.getTableEntry<DB_ObjectSkills>('ObjectSkills', id);
    return zip(obj, cr, skills).pipe(map(([obj, comp, skills]) => {
      let components = {};
      comp.forEach(x => { components[x.component_type] = x.component_id; });
      return Object.assign(obj[0], {
        components,
        skills
      })
    }));
  }

  getPackageComponent(id: number): Observable<any> {
    return this.getJsonData(this.packBaseUrl, id, 'PackageComponent');
  }

  getPrecondition(id: number): Observable<DB_Preconditions> {
    return this.getJsonData(this.precondBaseUrl, id, 'Preconditions');
  }

  getItemComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.itemBaseUrl, id, 'ItemComponent');
  }

  getModuleComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "ModuleComponent/", id, 'ModuleComponent');
  }

  getMissionNPCComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "MissionNPCComponent/", id, 'MissionNPCComponent');
  }

  getCollectibleComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "CollectibleComponent/", id, 'CollectibleComponent');
  }

  getInventoryComponent(id: number): Observable<Optional<any>> {
    return this.getPagedJsonData(this.tablesUrl + "InventoryComponent/", id, 'InventoryComponent', true);
  }

  getPhysicsComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.physicsBaseUrl, id, 'PhysicsComponent');
  }

  getScriptComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.scriptBaseUrl, id, 'ScriptComponent');
  }

  getDestructibleComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "DestructibleComponent/", id, 'DestructibleComponent');
  }

  getRebuildComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "RebuildComponent/", id, 'RebuildComponent');
  }

  getLootTableGroupByIndex(id: number): Observable<any> {
    return this.getPagedJsonData(this.lootTableBaseUrl + "groupBy/LootTableIndex/", id, 'LootTableGroupByIndex');
  }

  getLootMatrix(id: number): Observable<any> {
    return this.getPagedJsonData(this.lootMatrixBaseUrl, id, 'LootMatrix');
  }

  getNpcIcon(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "NpcIcons/", id, 'NpcIcons');
  }

  getMission(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "Missions/", id, 'Missions');
  }

  getMissionTasks(id: number): Observable<DB_MissionTasks[]> {
    return this.luCoreDataService.getTableEntry<DB_MissionTasks>('MissionTasks', id);
  }

  getMissionText(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "MissionText/", id, 'MissionText');
  }

  getObjectTypes(): Observable<string[]> {
    return this.luCoreDataService.getRev('object_types');
  }

  getObjectType(type: string): Observable<number[]> {
    return this.luCoreDataService.getRevEntry('object_types', type);
  }

  getObjectComponents(): Observable<any> {
    return this.makeRequest(this.objectsByComponentUrl + "index", `getObjectComponents()`);
  }

  getObjectComponent(component: number): Observable<DB_ObjectRef_ByComponent[]> {
    return this.makeRequest(this.objectsByComponentUrl + component, `getObjectComponent(${component})`);
  }

  getDestructibleComponentsByFaction(): Observable<Record<string, number[]>> {
    return this.makeRequest(this.tablesUrl + "DestructibleComponent/byFaction", `getDestructibleComponentsByFaction`);
  }

  getRebuildComponentsByActivityID(): Observable<Record<string, number[]>> {
    return this.makeRequest(this.tablesUrl + "RebuildComponent/byActivityID", `getRebuildComponentsByActivityID`);
  }

  getBrickColors(): Observable<DB_BrickColors[]> {
    return this.getSingleTable<DB_BrickColors>('BrickColors');
  }

  getShadersMap(): Observable<DB_mapShaders[]> {
    return this.getSingleTable<DB_mapShaders>('mapShaders');
  }

  getItemTypes(): Observable<DB_mapItemTypes[]> {
    return this.getSingleTable<DB_mapItemTypes>('mapItemTypes');
  }

  getSingleTable<T>(table: string): Observable<T[]> {
    return this.luCoreDataService.getTableEntry(table, "all")
  }

  getGeneric<T>(id: number, table: string, paged: boolean): Observable<T> {
    if (paged) {
      return this.getPagedJsonData(this.tablesUrl + table + "/", id, table);
    }
    else {
      return this.getJsonData(this.tablesUrl + table + "/", id, table);
    }
  }

  getLocale(table: string): Observable<any> {
    return this.getJsonResource("locale/" + table + "/", "index", "locale");
  }

  getLocalePage(table: string, page: number) {
    return this.getJsonResource("locale/" + table + "/", String(page), "locale page");
  }

  getMissionsByType(): Observable<DB_MissionsByType> {
    return this.getJsonResource("tables/Missions/groupBy/", "type", "missions");
  }

  getActivityRewards(id: number): Observable<ActivityRewardsPod> {
    return this.luCoreDataService.getTableEntry<DB_ActivityRewards>("ActivityRewards", id)
      .pipe(map(x => Object.assign({ activity_rewards: x })));
  }

  getCurrencyIndex(id: number): Observable<CurrencyTablePod> {
    return this.getGeneric(id, "CurrencyTable", true);
  }

  getFactions(): Observable<DB_Factions[]> {
    return this.getSingleTable("Factions");
  }

  getFaction(index: number): Observable<DB_Factions> {
    return this.getFactions().pipe(map(factions => factions.find(v => v.faction == index)));
  }

  getJsonResource(prefix: string, url: string, type: string): Observable<any> {
    return this.makeRequest(prefix + url.toLowerCase(), `get${type}(${url})`);
  }

  getJsonData(url: string, id: number, type: string): Observable<any> {
    return this.luCoreDataService.getSingleTableEntry(type, id);
  }

  getPagedJsonData(url: string, id: number, type: string, rethrowError: boolean = false): Observable<any> {
    return this.luCoreDataService.getSingleTableEntry(type, id);
    //let page = Math.floor(id / 256);
    //return this.makeRequest(url + page + "/" + id, `getPaged${type}(${id})`, rethrowError);
  }

}
