import { Component, Input, OnInit } from '@angular/core';

const GENERAL_KEYS = [
  'loadOnClientOnly',
  'loadSrvrOnly',
  'sceneIDOverride',
  'sceneIDOverrideEnabled',
  'sceneLayerIDOverride',
  'template',
  'custom_config_names',
];

const RENDER_KEYS = [
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
  settings: Object;
  custom_config_names: string[];

  constructor() { }

  @Input() set objData(value: any) {
    this.data = value;
  }

  @Input() set objSettings(value: any) {
    this.settings = value;
    if (this.settings['custom_config_names']) {
      this.custom_config_names = this.settings['custom_config_names'].split('\x1D');
    } else {
      this.custom_config_names = [];
    }
  }

  hasCustomScript(): boolean {
    return this.custom_config_names.includes("custom_script_client")
      || this.custom_config_names.includes("custom_script_server");
  }

  hasComponent(id: number): boolean {
    return this.data.components.hasOwnProperty(id + "")
      || (id === 5 && this.hasCustomScript());
  }

  remainingSettings(): any {
    let keys = new Set();
    Object.keys(this.data.components).forEach(key => {
      const k = KEYS[key];
      if (k) k.forEach(e => keys.add(e));
    })
    if (this.hasCustomScript()) {
      SCRIPT_KEYS.forEach(e => keys.add(e));
    }
    GENERAL_KEYS.forEach(e => keys.add(e));
    let settings = {};
    Object.entries(this.settings).forEach(arr => {
      if (!keys.has(arr[0])) settings[arr[0]] = arr[1];
    })
    return settings;
  }

  componentSettings(id: number, keys: string[]): any {
    if (!this.hasComponent(id)) return;
    let data = {};
    keys.forEach(key => {
      if (this.settings.hasOwnProperty(key)) {
        data[key] = this.settings[key];
      }
    });
    return data;
  }

  generalSettings(): any {
    let data = {};
    GENERAL_KEYS.forEach(key => {
      if (this.settings.hasOwnProperty(key)) {
        data[key] = this.settings[key];
      }
    });
    return data;
  }

  renderSettings(): any {
    return this.componentSettings(2, RENDER_KEYS);
  }

  simplePhysicsSettings(): any {
    return this.componentSettings(3, SIMPLE_PHYSICS_KEYS);
  }

  scriptSettings(): any {
    return this.componentSettings(5, SCRIPT_KEYS);
  }

  spawnerSettings(): any {
    return this.componentSettings(10, SPAWNER_KEYS);
  }

  itemSettings(): any {
    return this.componentSettings(11, ITEM_KEYS);
  }

  scriptedActivitySettings(): any {
    return this.componentSettings(39, SCRIPTED_ACTIVITY_KEYS);
  }

  phantomPhysicsSettings(): any {
    return this.componentSettings(40, PHANTOM_PHYSICS_KEYS);
  }

  hfLightDirectionGadgetSettings(): any {
    return this.componentSettings(66, HF_LIGHT_DIRECTION_GADGET_KEYS);
  }

  rocketLaunchSettings(): any {
    return this.componentSettings(67, ROCKET_LAUNCH_KEYS);
  }

  proximityMonitorSettings(): any {
    return this.componentSettings(78, PROXMIMITY_MONITOR_KEYS);
  }

  ngOnInit(): void {
  }

}
