import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuJsonService } from '../../services';

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
}
const SIMPLE_PHYSICS_KEYS = [
  'create_physics',
  'friction',
  'navmesh_carver',
  'carver_only',
  'add_to_navmesh',
  'is_smashable',
];
const SCRIPT_KEYS = [
  'custom_script_client',
  'custom_script_server',
];

const SPAWNER_KEYS = [
  'spawntemplate',
  'spawner_active_on_load',
  'active_on_load',
  'max_to_spawn',
  'no_auto_spawn',
  'no_timed_spawn',
  'respawn',
  'respawnVol',
  'respawnVolName',
  'spawner_node_id',
  'spawner_name',
  'spawnsGroupOnSmash',
  'spawnNetNameForSpawnGroupOnSmash',
  'groupID',
];
interface SpawnerSettings {
  spawntemplate: number,
}
const ITEM_KEYS = [];
const SCRIPTED_ACTIVITY_KEYS = [
  'actIDovrd',
  'activityID',
];
const PHANTOM_PHYSICS_KEYS = [
  'create_physics',
  'add_to_navmesh',
  'carver_only',
  'navmesh_carver',
  'is_smashable',
];
const PROPERTY_ENTRANCE_KEYS = [
  "propertyDefaultTargetZone",
  "propertyLaunchNavGroupID",
  "propertyLaunchPadOnPropertyMap",
  "propertyName",
  "mapID",
];
interface PropertyEntranceSettings {
  propertyDefaultTargetZone: number,
  propertyLaunchNavGroupID: string,
  propertyLaunchPadOnPropertyMap: boolean,
  propertyName: string,
}
const HF_LIGHT_DIRECTION_GADGET_KEYS = [

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
];
const PROXMIMITY_MONITOR_KEYS = [];

const KEYS = {
  "-1": GENERAL_KEYS,
  "2": RENDER_KEYS,
  "3": SIMPLE_PHYSICS_KEYS,
  "5": SCRIPT_KEYS,
  "10": SPAWNER_KEYS,
  "11": ITEM_KEYS,
  "39": SCRIPTED_ACTIVITY_KEYS,
  "40": PHANTOM_PHYSICS_KEYS,
  "43": PROPERTY_ENTRANCE_KEYS,
  "66": HF_LIGHT_DIRECTION_GADGET_KEYS,
  "67": ROCKET_LAUNCH_KEYS,
  "78": PROXMIMITY_MONITOR_KEYS,
};

@Component({
  selector: 'app-obj-instance',
  templateUrl: './obj-instance.component.html',
  styleUrls: ['./obj-instance.component.css']
})
export class ObjInstanceComponent implements OnInit {
  data: any;
  dataAsync: Observable<any>;
  settings: Object;
  usedSettings: Set<string>;

  generalSettings: GeneralSettings;
  hasCustomScript: boolean;
  remainingSettings: object;

  renderSettings: RenderSettings | undefined;
  simplePhysicsSettings: object | undefined;
  spawnerSettings?: SpawnerSettings;
  scriptSettings: object | undefined;
  componentSettings: object | undefined;
  itemSettings: object | undefined;
  scriptedActivitySettings: object | undefined;
  phantomPhysicsSettings: object | undefined;
  propertyEntranceSettings: object | undefined;
  hfLightDirectionGadgetSettings: object | undefined;
  rocketLaunchSettings: object | undefined;
  proximityMonitorSettings: object | undefined;

  constructor(private luJsonService: LuJsonService) { }

  @Input() set obj(value: any) {
    this.settings = value.settings;
    this.dataAsync = this.luJsonService.getObject(value.lot);
    this.dataAsync.subscribe(this.objData.bind(this));
  }

  objData(value: any) {
    this.data = value;
    this.usedSettings = new Set();

    let setters = {
      "2": x => this.renderSettings = x,
      "3": x => this.simplePhysicsSettings = x, // TODO: phantomOnly, markedAsPhantom
      "5": x => this.scriptSettings = x,
      "10": x => this.spawnerSettings = x,
      "11": x => this.itemSettings = x,
      "39": x => this.scriptedActivitySettings = x,
      "40": x => this.phantomPhysicsSettings = x,
      "43": x => this.propertyEntranceSettings = x,
      "66": x => this.hfLightDirectionGadgetSettings = x,
      "67": x => this.rocketLaunchSettings = x,
      "78": x => this.proximityMonitorSettings = x,
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
    Object.keys(this.data.components).forEach(key => {
      const k = KEYS[key];
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
    })

    this.remainingSettings = {};
    Object.entries(this.settings).forEach(arr => {
      if (!this.usedSettings.has(arr[0])) this.remainingSettings[arr[0]] = arr[1];
    })
  }

  getSetting<T>(key: string, fallback: T): T {
    this.usedSettings.add(key);
    return this.settings.hasOwnProperty(key) ? this.settings[key] : fallback;
  }

  ngOnInit(): void {
  }

}
