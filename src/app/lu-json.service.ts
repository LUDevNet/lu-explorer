import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
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
  private zonesBaseUrl;
  private zonesIndexUrl;
  private accIndexUrl;

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

    this.apiUrl = this.baseUrl + "lu-json/";
    this.tablesUrl = this.apiUrl + "tables/";
    this.behaviorBaseUrl = this.apiUrl + "behaviors/";
    this.skillBaseUrl = this.tablesUrl + "SkillBehavior/";
    this.renderBaseUrl = this.tablesUrl + "RenderComponent/";
    this.scriptBaseUrl = this.tablesUrl + "ScriptComponent/";
    this.physicsBaseUrl = this.tablesUrl + "PhysicsComponent/";
    this.itemBaseUrl = this.tablesUrl + "ItemComponent/";
    this.lootMatrixBaseUrl = this.tablesUrl + "LootMatrix/";
    this.lootTableBaseUrl = this.tablesUrl + "LootTable/";
    this.packBaseUrl = this.tablesUrl + "PackageComponent/";
    this.zonesBaseUrl = this.apiUrl + "tables/ZoneTable/";
    this.iconsBaseUrl = this.apiUrl + "tables/Icons/";
    this.objectsBaseUrl = this.apiUrl + "objects/";
    this.zonesIndexUrl = this.zonesBaseUrl + "index.json";
    this.accIndexUrl = this.apiUrl + "tables/AccessoryDefaultLoc/index.json";
  }

  private log(message: string) {
    this.messageService.add('LuJsonService: ' + message);
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
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAccessoryDefaultLoc(): Observable<AccessoryDefaultLoc[]> {
    return this.http.get<AccessoryDefaultLoc[]>(this.accIndexUrl).pipe(
      map(acc => acc['_embedded']['AccessoryDefaultLoc']),
      tap(acc => this.log(`fetched AccessoryDefaultLoc`)),
      catchError(this.handleError('getAccessoryDefaultLoc', []))
    )
  }

  getZones(): Observable<ZoneDetail[]> {
    return this.http.get<ZoneDetail[]>(this.zonesIndexUrl).pipe(
      map(zones => zones['_embedded']['ZoneTable']),
      tap(zones => this.log(`fetched zones`)),
      catchError(this.handleError('getZones', []))
    )
  }

  getZone(id: number): Observable<ZoneDetail> {
    return this.http.get<ZoneDetail>(this.zonesBaseUrl + id + ".json").pipe(
      tap(zone => this.log(`fetched zone id=${id}`)),
      catchError(this.handleError('getZone', undefined))
    )
  }

  getRenderComponent(id: number): Observable<any> {
    let page = Math.floor(id / 256);
    return this.http.get<any>(this.renderBaseUrl + page + "/" + id + ".json").pipe(
      tap(component => this.log(`fetched render component id=${id}`)),
      catchError(this.handleError('getRenderComponent', undefined))
    )
  }

  getBehavior(id: number): Observable<Behavior> {
    let page = Math.floor(id / 1024);
    return this.http.get<Behavior>(this.behaviorBaseUrl + page + "/" + id + ".json").pipe(
      tap(behavior => this.log(`fetched behavior id=${id}`)),
      catchError(this.handleError('getBehavior', undefined))
    )
  }

  getSkill(id: number): Observable<SkillBehavior> {
    return this.http.get<SkillBehavior>(this.skillBaseUrl + id + ".json").pipe(
      tap(skill => this.log(`fetched skill id=${id}`)),
      catchError(this.handleError('getSkill', undefined))
    )
  }

  getIcon(id: number): Observable<Icons> {
    return this.http.get<Icons>(this.iconsBaseUrl + id + ".json").pipe(
      tap(icon => this.log(`fetched icon id=${id}`)),
      catchError(this.handleError('getIcon', undefined))
    )
  }

  getObject(id: number): Observable<any> {
    let fold_a = Math.floor(id / 256);
    let fold_b = Math.floor(fold_a / 256);
    let url = this.objectsBaseUrl + fold_b + "/" + fold_a + "/" + id + ".json";

    return this.http.get(url).pipe(
      tap(object => this.log(`fetched object id=${id}`)),
      catchError(this.handleError('getObject', undefined))
    )
  }

  getPackageComponent(id: number): Observable<any> {
    return this.getJsonData(this.packBaseUrl, id, 'PackageComponent');
  }

  getItemComponent(id: number): Observable<any> {
    return this.getPagedJsonData(this.itemBaseUrl, id, 'ItemComponent');
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

  getLootTableGroupByIndex(id: number): Observable<any> {
    return this.getPagedJsonData(this.lootTableBaseUrl + "groupBy/LootTableIndex/", id, 'LootTableGroupByIndex');
  }

  getLootMatrix(id: number): Observable<any> {
    return this.getPagedJsonData(this.lootMatrixBaseUrl, id, 'LootMatrix');
  }

  getBrickColors(): Observable<any[]> {
    return this.http.get<any[]>(this.tablesUrl + "BrickColors/index.json").pipe(
      map(bc => bc['_embedded']['BrickColors'].sort((a,b) => a.id - b.id )),
      tap(bc => this.log(`fetched Brick Colors`)),
      catchError(this.handleError('getBrickColors', []))
    )
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

  getJsonData(url: string, id: number, type: string): Observable<any> {
    return this.http.get<Icons>(url + id + ".json").pipe(
      tap(icon => this.log(`fetched ${type} id=${id}`)),
      catchError(this.handleError(`get ${type}`, undefined))
    ) 
  }

  getPagedJsonData(url: string, id: number, type: string): Observable<any> {
    let page = Math.floor(id / 256);
    return this.http.get<Icons>(url + page + "/" + id + ".json").pipe(
      tap(icon => this.log(`fetched ${type} id=${id}`)),
      catchError(this.handleError(`get ${type}`, undefined))
    ) 
  }

}
