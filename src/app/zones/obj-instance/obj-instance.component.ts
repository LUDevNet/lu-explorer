import { Component, Input } from '@angular/core';
import { Observable, ReplaySubject, combineLatest } from 'rxjs';
import { DB_ComponentsRegistry, DB_Objects } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../services';
import { map, switchMap } from 'rxjs/operators';

const GENERAL_KEYS = [
  'loadOnClientOnly',
  'loadSrvrOnly',
  'sceneIDOverride',
  'sceneIDOverrideEnabled',
  'sceneLayerIDOverride',
  'template',
];
interface GeneralSettings {
  loadOnClientOnly: boolean,
  loadSrvrOnly: boolean,
  sceneIDOverride: number,
  sceneIDOverrideEnabled: boolean,
  sceneLayerIDOverride: number,
  template: number,
  custom_config_names: string[],
}

const RENDER_KEYS = [
  'fxpriority',
  'renderDisabled',
  'renderCullingGroup',
  'ignoreCameraCollision',
  'camPrefersToFadeObject',
  'setsRailCam',
  'camGradSnap',
  'CamRlBiasAmt',
  'CamRlBiasBi',
  'CamRlBiasFwd',
  'CamRlBiasRet',
  'CamRlCamPath',
  'CamRlCamRetPath',
  'CamRlFaceTgt',
  'CamRlPosPath',
  'camBehaviorDirectional',
  'camBehaviorPitch',
  'camBehaviorYaw',
  'camDir',
  'camLkDir',
  'camPitchAngleDown',
  'camPitchAngleUp',
];
interface RenderSettings {
  renderDisabled?: boolean,
  fxpriority?: number,
  renderCullingGroup?: any,
  ignoreCameraCollision?: any,
  camPrefersToFadeObject?: any,
  camGradSnap?: any,
  setsRailCam?: boolean,
  CamRlBiasAmt?: any,
  CamRlBiasBi?: any,
  CamRlBiasFwd?: any,
  CamRlBiasRet?: any,
  CamRlCamPath?: any,
  CamRlCamRetPath?: any,
  CamRlFaceTgt?: any,
  CamRlPosPath?: any,
  camBehaviorDirectional?: any,
  camBehaviorPitch?: any,
  camBehaviorYaw?: any,
  camDir?: any,
  camLkDir?: any,
  camPitchAngleDown?: any,
  camPitchAngleUp?: any,
}
const SIMPLE_PHYSICS_KEYS = [
  'create_physics',
  'friction',
  'navmesh_carver',
  'carver_only',
  'add_to_navmesh',
  'is_smashable',
  'respawn',
  'respawnVol',
  'respawnVolName',
];
interface SimplePhysicsSettings {
  create_physics?: any,
  friction?: any,
  navmesh_carver?: any,
  carver_only?: any,
  add_to_navmesh?: any,
  is_smashable?: any,
  respawn?: any,
  respawnVol?: any,
  respawnVolName?: any,
}
const SCRIPT_KEYS = [ // 5
  'custom_script_client',
  'custom_script_server',
];
const DESTRUCTIBLE_KEYS = [ // 7

];
interface DestructibleSettings {

}

const SPAWNER_KEYS = [ // 10
  'spawntemplate',
  'spawner_active_on_load',
  'active_on_load',
  'max_to_spawn',
  'no_auto_spawn',
  'no_timed_spawn',
  'spawner_node_id',
  'spawner_name',
  'spawnsGroupOnSmash',
  'spawnNetNameForSpawnGroupOnSmash',
  'groupID',
];
interface SpawnerSettings {
  spawntemplate: number,
  spawner_active_on_load?: boolean,
  active_on_load?: boolean,
  max_to_spawn?: number,
  no_auto_spawn?: boolean,
  no_timed_spawn?: boolean,
  spawner_node_id?: number,
  spawner_name?: string,
  spawnsGroupOnSmash?: boolean,
  spawnNetNameForSpawnGroupOnSmash?: string,
  groupID?: any,
}
const ITEM_KEYS = [ // 11
];
const COLLECTIBLE_KEYS = [ // 23

];
interface CollectibleSettings {

}
const SCRIPTED_ACTIVITY_KEYS = [ // 39
  'actIDovrd',
  'activityID',
];
const PROPERTY_KEYS = [ // 36
  "propertyBordersLOT",
  "propertyName",
  "propertyVendorLOT",
];
interface PropertySettings {
  propertyBordersLOT?: number,
  propertyName?: string,
  propertyVendorLOT?: number,
}
const PHANTOM_PHYSICS_KEYS = [ // 40
  'create_physics',
  'add_to_navmesh',
  'carver_only',
  'navmesh_carver',
  'is_smashable',
  'cancelBehaviorMovement',
  'respawn',
  'respawnVol',
  'respawnVolName',
  'rlLeadIn',
  'rlLeadOut',
  'rspPos',
  'rspRot',
];
interface PhantomPhysicsSettings {
  create_physics: boolean,
  add_to_navmesh: boolean,
  carver_only: boolean,
  navmesh_carver: boolean,
  is_smashable: boolean,
  cancelBehaviorMovement: boolean,
  respawn: number,
  respawnVol: boolean,
  respawnVolName: any,
  rlLeadIn: any,
  rlLeadOut: any,
  rspPos: any,
  rspRot: any,
}
const PROPERTY_ENTRANCE_KEYS = [ // 43
  "propertyLaunchNavGroupID",
  "propertyLaunchPadOnPropertyMap",
  "propertyName",
  "mapID",
];
interface PropertyEntranceSettings {
  propertyLaunchNavGroupID: string,
  propertyLaunchPadOnPropertyMap: boolean,
  propertyName: string,
  mapID: number,
}
const PROPERTY_MANAGEMENT_KEYS = [ // 45

];
interface PropertyManagementSettings {

}
const SOUND_AMBIENT_3D_KEYS = [ // 56
  'NDAEG',
  'NDAudioEventGUID',
];
interface SoundAmbient3DSettings {
  NDAEG: string,
  NDAudioEventGUID: string,
}
const PROPERTY_VENDOR_KEYS = [ // 65
  "property_required_mission"
]
interface PropertyVendorSettings {
  property_required_mission?: number,
}
const HF_LIGHT_DIRECTION_GADGET_KEYS = [ // 66

];
const ROCKET_LAUNCH_KEYS = [
  'rocketLaunchMusic',
  'rocketLaunchPreCondition',
  'rocketLaunchUseDBDefaults',
  'summaryCamera',
  'playSummary',
  'launchCamera',
  'targetScene',
  'targetZone',
  'playerAnim',
  'rocketAltLandingPrecondition',
  'rocketAltLandingSpawnName',
  'rocketAnim',
  'rocketUseAltLandingPrecondition',
  'rocketUseLaunchPrecondition',
  "propertyDefaultTargetZone",
];
interface RocketLaunchSettings {
  rocketLaunchMusic?: string,
  rocketLaunchPreCondition?: string,
  rocketLaunchUseDBDefaults?: boolean,
  summaryCamera?: string,
  playSummary?: boolean,
  launchCamera?: string,
  targetScene?: string,
  targetZone?: number,
  playerAnim?: string,
  rocketAltLandingPrecondition?: string,
  rocketAltLandingSpawnName?: string,
  rocketAnim?: string,
  rocketUseAltLandingPrecondition?: boolean,
  rocketUseLaunchPrecondition?: boolean,
  propertyDefaultTargetZone?: number,
}
const PROXMIMITY_MONITOR_KEYS = [];

const PROPERTY_PLAQUE_KEYS = [ // 113

];
interface PropertyPlaqueSettings {

}

const KEYS = {
  "-1": GENERAL_KEYS,
  "2": RENDER_KEYS,
  "3": SIMPLE_PHYSICS_KEYS,
  "5": SCRIPT_KEYS,
  "7": DESTRUCTIBLE_KEYS,
  "10": SPAWNER_KEYS,
  "11": ITEM_KEYS,
  "23": COLLECTIBLE_KEYS,
  "36": PROPERTY_KEYS,
  "39": SCRIPTED_ACTIVITY_KEYS,
  "40": PHANTOM_PHYSICS_KEYS,
  "43": PROPERTY_ENTRANCE_KEYS,
  "45": PROPERTY_MANAGEMENT_KEYS,
  "56": SOUND_AMBIENT_3D_KEYS,
  "65": PROPERTY_VENDOR_KEYS,
  "66": HF_LIGHT_DIRECTION_GADGET_KEYS,
  "67": ROCKET_LAUNCH_KEYS,
  "78": PROXMIMITY_MONITOR_KEYS,
  "113": PROPERTY_PLAQUE_KEYS,
};

class ObjData {
  settings: Object;
  usedSettings: Set<string>;

  generalSettings: GeneralSettings;
  hasCustomScript: boolean;
  remainingSettings: object;

  renderSettings?: RenderSettings;
  simplePhysicsSettings?: SimplePhysicsSettings;
  scriptSettings?: object; // 5
  destructibleSettings?: DestructibleSettings; // 7
  spawnerSettings?: SpawnerSettings; // 10
  itemSettings?: object; // 11
  collectibleSettings?: CollectibleSettings; // 23
  propertySettings?: PropertySettings; // 36
  scriptedActivitySettings?: object; // 39
  phantomPhysicsSettings?: PhantomPhysicsSettings; // 40
  propertyEntranceSettings?: PropertyEntranceSettings; // 43
  propertyManagementSettings?: PropertyManagementSettings; // 45
  soundAmbient3DSettings?: SoundAmbient3DSettings; // 56
  propertyVendorSettings?: PropertyVendorSettings; // 65
  hfLightDirectionGadgetSettings?: object; // 66
  rocketLaunchSettings?: RocketLaunchSettings; // 67
  proximityMonitorSettings?: object;
  propertyPlaqueSettings?: PropertyPlaqueSettings; // 113

  getSetting<T>(key: string, fallback: T): T {
    this.usedSettings.add(key);
    return this.settings.hasOwnProperty(key) ? this.settings[key] : fallback;
  }

  constructor(components: DB_ComponentsRegistry[], settings: Object) {
    //this.data = value;
    this.settings = settings;
    this.usedSettings = new Set();

    let setters = {
      "2": x => this.renderSettings = x,
      "3": x => this.simplePhysicsSettings = x, // TODO: phantomOnly, markedAsPhantom
      "5": x => this.scriptSettings = x,
      "7": x => this.destructibleSettings = x,
      "10": x => this.spawnerSettings = x,
      "11": x => this.itemSettings = x,
      "23": x => this.collectibleSettings = x,
      "36": x => this.propertySettings = x,
      "39": x => this.scriptedActivitySettings = x,
      "40": x => this.phantomPhysicsSettings = x,
      "43": x => this.propertyEntranceSettings = x,
      "45": x => this.propertyManagementSettings = x,
      "56": x => this.soundAmbient3DSettings = x,
      "65": x => this.propertyVendorSettings = x,
      "66": x => this.hfLightDirectionGadgetSettings = x,
      "67": x => this.rocketLaunchSettings = x,
      "78": x => this.proximityMonitorSettings = x,
      "113": x => this.propertyPlaqueSettings = x,
    };
    Object.values(setters).forEach(x => x(undefined));

    // General settings
    let customConfigNames = (this.settings['custom_config_names']) ? this.settings['custom_config_names'].split('\x1D') : [];
    this.generalSettings = {
      loadOnClientOnly: this.getSetting('loadOnClientOnly', false),
      loadSrvrOnly: this.getSetting('loadSrvrOnly', false),
      sceneIDOverride: this.getSetting('sceneIDOverride', 255),
      sceneIDOverrideEnabled: this.getSetting('sceneIDOverrideEnabled', false),
      sceneLayerIDOverride: this.getSetting('sceneLayerIDOverride', 0),
      template: this.getSetting('template', -1),
      custom_config_names: customConfigNames,
    };
    GENERAL_KEYS.forEach(e => this.usedSettings.add(e));

    // Script
    this.hasCustomScript = customConfigNames.includes("custom_script_client")
      || customConfigNames.includes("custom_script_server");

    if (this.hasCustomScript) {
      SCRIPT_KEYS.forEach(e => this.usedSettings.add(e));
    }

    // Remaining settings
    for (const component of components) {
      console.log(component);
      const k = KEYS[component.component_type];
      const key = component.component_type;
      if (k) {
        k.forEach(e => this.usedSettings.add(e));
        let data = {};
        k.forEach(key => {
          if (this.settings.hasOwnProperty(key)) {
            data[key] = this.settings[key];
          }
        })
        let sett = setters[key];
        console.log(key, sett);
        if (sett) sett(data);
      }
    }

    this.remainingSettings = {};
    Object.entries(this.settings).forEach(arr => {
      if (!this.usedSettings.has(arr[0])) this.remainingSettings[arr[0]] = arr[1];
    })
  }
}

interface ObjInstance {
  lot: number,
  settings: Object,
};

@Component({
  selector: 'app-obj-instance',
  templateUrl: './obj-instance.component.html',
  styleUrls: ['./obj-instance.component.css']
})
export class ObjInstanceComponent {
  @Input() showGeneralSettings: boolean = true;

  private obj$ = new ReplaySubject<ObjInstance>(1);
  componentRegistry$: Observable<DB_ComponentsRegistry[]> = this.obj$.pipe(
    switchMap(obj => this.coreData.getTableEntry("ComponentsRegistry", obj.lot)),
  );
  $components: Observable<Record<number, number>> = this.componentRegistry$.pipe(
    map(components => components.reduce((acc, c) => {
      acc[c.component_type] = c.component_id;
      return acc;
    }, <{ [key: number]: number }>{}))
  );
  $data: Observable<DB_Objects> = this.obj$.pipe(
    switchMap(obj => this.coreData.getSingleTableEntry("Objects", obj.lot))
  );
  $objData = combineLatest([this.componentRegistry$, this.obj$]).pipe(
    map(([components, obj]) => new ObjData(components, obj.settings))
  )

  constructor(private coreData: LuCoreDataService) { }

  @Input() set obj(value: ObjInstance) {
    this.obj$.next(value);
  }

}
