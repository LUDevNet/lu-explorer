import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Icons, AccessoryDefaultLoc, Behavior, SkillBehavior } from './cdclient';
import { ZoneDetail } from './zone';


@Injectable()
export class LuJsonService {

  private baseUrl;
  private apiUrl;
  private tablesUrl;
  private localeUrl;
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
  private objectsBaseUrl;
  private objectsByTypeUrl;
  private zonesBaseUrl;
  private zonesIndexUrl;
  private accIndexUrl;

  private jsonStore;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

    if (environment.production) {
      // using public API
      this.baseUrl = 'https://xiphoseer.github.io/';
    } else {
      // serving API locally
      this.baseUrl = 'http://localhost:8000/';
    }
    this.jsonStore = {};

    this.apiUrl = this.baseUrl + "lu-json/";

    this.tablesUrl = "tables/";
    this.localeUrl = "locale/";
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
    this.zonesBaseUrl = this.tablesUrl + "ZoneTable/";
    this.iconsBaseUrl = this.tablesUrl + "Icons/";
    this.objectsByTypeUrl = this.objectsBaseUrl + "groupBy/type/";
    this.zonesIndexUrl = this.zonesBaseUrl + "index";
    this.accIndexUrl = this.tablesUrl + "AccessoryDefaultLoc/index";
  }

  private log(message: string) {
    this.messageService.add('LuJsonService: ' + message);
  }

  private makeRequest(url: string, method: string): Observable<any> {
    if (!this.jsonStore.hasOwnProperty(url)) {
      let httpRequest = this.http.get(this.apiUrl + url + '.json')
        .pipe(
          tap(data => console.log(`Completed ${method}`)),
          catchError(this.handleError(method, undefined))
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
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error.message); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  clearJsonStore() {
    this.jsonStore = {};
  }

  getAccessoryDefaultLoc(): Observable<AccessoryDefaultLoc[]> {
    return this.getSingleTable("AccessoryDefaultLoc");
  }

  getZones(): Observable<ZoneDetail[]> {
    return this.getSingleTable("ZoneTable");
  }

  getZone(id: number): Observable<ZoneDetail> {
    return this.makeRequest(this.zonesBaseUrl + id, 'getZone');
  }

  getRenderComponent(id: number): Observable<any> {
    // TODO: paged
    let page = Math.floor(id / 256);
    return this.makeRequest(this.renderBaseUrl + page + "/" + id, 'getRenderComponent');
  }

  getBehavior(id: number): Observable<Behavior> {
    // TODO: paged
    let page = Math.floor(id / 1024);
    return this.makeRequest(this.behaviorBaseUrl + page + "/" + id, `getBehavior(${id})`);
  }

  getSkill(id: number): Observable<SkillBehavior> {
    return this.makeRequest(this.skillBaseUrl + id, `getSkill(${id})`);
  }

  getIcon(id: number): Observable<Icons> {
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

  getInventoryComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.tablesUrl + "InventoryComponent/", id, 'InventoryComponent');
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

  getBrickColors(): Observable<any[]> {
    return this.getSingleTable('BrickColors');
  }

  getSingleTable(table: string): Observable<any[]> {
    return this
      .makeRequest(this.tablesUrl + table + "/index", `getSingleTable(${table})`)
      .pipe(map(tbl => tbl['_embedded'][table]));
  }

  getGeneric(id: number, table:string, paged:boolean): Observable<any>
  {
    if (paged)
    {
      return this.getPagedJsonData(this.tablesUrl + table + "/", id, table);
    }
    else
    {
      return this.getJsonData(this.tablesUrl + table + "/", id, table);
    }
  }

  getLocale(table: string): Observable<any>
  {
    return this.getJsonResource("locale/" + table + "/", "index", "locale");
  }

  getLocalePage(table: string, page: number)
  {
    return this.getJsonResource("locale/" + table + "/", String(page), "locale page");
  }

  getMissionsByType()
  {
    return this.getJsonResource("tables/Missions/groupBy/", "type", "missions");
  }

  getActivityRewards(id: number)
  {
    return this.getGeneric(id, "ActivityRewards", true);
  }

  getCurrencyIndex(id: number)
  {
    return this.getGeneric(id, "CurrencyTable", true);
  }

  getJsonResource(prefix: string, url: string, type: string): Observable<any> {
    return this.makeRequest(prefix + url.toLowerCase(), `get${type}(${url})`);
  }

  getJsonData(url: string, id: number, type: string): Observable<any> {
    return this.makeRequest(url + id, `get${type}(${id})`);
  }

  getPagedJsonData(url: string, id: number, type: string): Observable<any> {
    let page = Math.floor(id / 256);
    return this.makeRequest(url + page + "/" + id, `getPaged${type}(${id})`);
  }

}
