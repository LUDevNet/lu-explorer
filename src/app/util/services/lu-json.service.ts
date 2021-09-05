import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

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
} from '../../cdclient';

import { ZoneDetail } from '../../zone';
import { environment } from '../../../environments/environment';

export class Optional<T> {
  data: T;
  $error: string;
}

export interface APIObject extends DB_Objects {
  skills: any[],
  components: any[],
  icons: any[],
}

class SingleTableError extends TypeError {
  data?: any;
  table: string;

  constructor(message: string, table: string, data?: any) {
    super(`In table '${table}': ${message}`)
    this.table = table;
    this.data = data;
  }
};


@Injectable()
export class LuJsonService {

  private apiUrl: string;
  private tablesUrl: string;
  private localeUrl: string;
  private scriptsUrl: string;
  private behaviorBaseUrl: string;
  private skillBaseUrl: string;
  private renderBaseUrl: string;
  private scriptBaseUrl: string;
  private physicsBaseUrl: string;
  private itemBaseUrl: string;
  private lootMatrixBaseUrl: string;
  private lootTableBaseUrl: string;
  private iconsBaseUrl: string;
  private packBaseUrl: string;
  private precondBaseUrl: string;
  private objectsBaseUrl: string;
  private objectsByTypeUrl: string;
  private objectsByComponentUrl: string;
  private zonesBaseUrl: string;
  private zonesIndexUrl: string;
  private accIndexUrl: string;

  private jsonStore;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

    this.jsonStore = {};

    this.apiUrl = "/lu-json/";
    if (environment.data.jsonUrl) {
      this.apiUrl = environment.data.jsonUrl;
    }

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

  getZones(): Observable<ZoneDetail[]> {
    return this.getSingleTable("ZoneTable");
  }

  getZone(id: number): Observable<ZoneDetail> {
    return this.makeRequest(this.zonesBaseUrl + id, 'getZone');
  }

  getRenderComponent(id: number): Observable<DB_RenderComponent> {
    // TODO: paged
    let page = Math.floor(id / 256);
    return this.makeRequest(this.renderBaseUrl + page + "/" + id, 'getRenderComponent');
  }

  getBehavior(id: number): Observable<DB_Behavior> {
    // TODO: paged
    let page = Math.floor(id / 1024);
    return this.makeRequest(this.behaviorBaseUrl + page + "/" + id, `getBehavior(${id})`);
  }

  getSkill(id: number): Observable<DB_SkillBehavior> {
    return this.makeRequest(this.skillBaseUrl + id, `getSkill(${id})`);
  }

  getIcon(id: number): Observable<DB_Icons> {
    return this.makeRequest(this.iconsBaseUrl + id, `getIcon(${id})`);
  }

  getObject(id: number): Observable<any> {
    // TODO: double paged
    let fold_a = Math.floor(id / 256);
    let fold_b = Math.floor(fold_a / 256);
    let url = this.objectsBaseUrl + fold_b + "/" + fold_a + "/" + id;
    return this.makeRequest(url, `getObject(${id})`);
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
    return this.getPagedJsonData(this.tablesUrl + "Missions/", id, 'Mission');
  }

  getMissionTasks(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "MissionTasks/", id, 'MissionTasks');
  }

  getMissionText(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "MissionText/", id, 'MissionText');
  }

  getObjectTypes(): Observable<any> {
    return this.makeRequest(this.objectsByTypeUrl + "index", `getObjectTypes()`);
  }

  getObjectType(type: string): Observable<any> {
    return this.makeRequest(this.objectsByTypeUrl + type, `getObjectType(${type})`);
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
    return this
      .makeRequest(this.tablesUrl + table + "/index", `getSingleTable(${table})`)
      .pipe(switchMap(tbl => {
        if (!tbl) {
          return throwError(new SingleTableError("Missing object", table, tbl));
        }
        if (!tbl.hasOwnProperty('_embedded')) {
          return throwError(new SingleTableError("Missing key '_embedded'", table, tbl));
        }
        return of(tbl['_embedded'][table]);
      }));
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

  getMissionsByType() {
    return this.getJsonResource("tables/Missions/groupBy/", "type", "missions");
  }

  getActivityRewards(id: number): Observable<ActivityRewardsPod> {
    return this.getGeneric(id, "ActivityRewards", true);
  }

  getCurrencyIndex(id: number): Observable<CurrencyTablePod> {
    return this.getGeneric(id, "CurrencyTable", true);
  }

  getScript(path: string): Observable<any> {
    return this.getJsonResource(this.scriptsUrl, path, "Script");
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
    return this.makeRequest(url + id, `get${type}(${id})`);
  }

  getPagedJsonData(url: string, id: number, type: string, rethrowError: boolean = false): Observable<any> {
    let page = Math.floor(id / 256);
    return this.makeRequest(url + page + "/" + id, `getPaged${type}(${id})`, rethrowError);
  }

}
