// Reference Classes
export class DB_ObjectRef_ByComponent {
  comp_val: number;
  id: number;
  name: string;
}

export class DB_ObjectRef_ByType {
  id: number;
  name: string;
}

// LU database definitions

export class DB_mapItemTypes {
  id: number;
  description: string;
  equipLocation: string;
}

export class DB_brickAttributes {
  ID: number;
  icon_asset: string;
  display_order: number;
  loc_status: number;
}

export class DB_BrickColors {
  id: number; // INT
  red: number; // FLOAT
  green: number; // FLOAT
  blue: number; // FLOAT
  alpha: number; // FLOAT
  legopaletteid: number; // INT
  description: string;
  validTypes: number; // INT
  validCharacters: number; // INT
  factoryValid: boolean;
}

export class DB_ItemComponent {

}

export class DB_VendorComponent {
  id: number; // INT
  buyScalar: number; // FLOAT
  sellScalar: number; // FLOAT
  refreshTimeSeconds: number; // FLOAT
  LootMatrixIndex: number; // INTEGER
}

export class DB_AccessoryDefaultLoc
{
  Description: string;
  GroupID: number;
  Pos_X: number;
  Pos_Y: number;
  Pos_Z: number;
  Rot_X: number;
  Rot_Y: number;
  Rot_Z: number;
}

export class DB_Behavior
{
  behaviorID: number;
  effectHandle: string;
  effectID: number;
  templateID: number;
  parameters: any;
}

export class DB_SkillBehavior
{
  skillID: number;
  locStatus: number;
  behaviorID: number;
  imaginationcost: number;
  cooldowngroup: number;
  cooldown: number;
  inNpcEditor: boolean;
  skillIcon: number;
  oomSkillID: string;
  oomBehaviorEffectID: number;
  castTypeDesc: number;
  imBonusUI: number;
  lifeBonusUI: number;
  armorBonusUI: number;
  damageUI: number;
  hideIcon: boolean;
  localize: boolean;
  gate_version: string;
  cancelType: number;
}

export class DB_Icons
{
  IconID: number;
  IconPath: string;
  IconName: string;
}

export class DB_PhysicsComponent {
  // TODO
}

export class DB_MissionNPCComponent {
  // TODO
}

export class DB_InventoryComponent {
  // TODO
}

export class DB_DestructibleComponent {
  // TODO
}

export class DB_CollectibleComponent {
  // TODO
}

export class DB_MissionTasks {
  id: number; // INTEGER
  locStatus: number; // INTEGER
  target: number; // INTEGER
  taskType: number; // INTEGER
  targetGroup: string;
  targetValue: number; // INTEGER
  taskParam1: string;
  largeTaskIcon: string;
  IconID: number; // INTEGER
  uid: number; // INTEGER
  largeTaskIconID: number; // INTEGER
  localize: boolean;
  gate_version: string;
  localizations ?: any;
}
