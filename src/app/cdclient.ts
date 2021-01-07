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

export class DB_ItemSets_Ref {
  id: number;
}

export class SkillRef {
  skillID: number;
  AICombatWeight: number;
  castOnType: number;
}

export class ObjectPod {
  skills?: SkillRef[];
}

// LU database definitions

export class DB_LootMatrixElement {
  id: number;
  percent: number;
  minToDrop: number;
  maxToDrop: number;
  LootTableIndex: number;
  RarityTableIndex: number;
  flagID: number;
  gate_version: string;
}

export class DB_LootMatrix {
  elements: DB_LootMatrixElement[];
}

export class DB_LevelProgressionLookup {
  id: number; // INT
  requiredUScore: number; // INT
  BehaviorEffect: string;
}

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

export class DB_ItemSets {
  setID: number; //	INTEGER
  locStatus: number; //	INTEGER
  itemIDs: string;
  kitType: number; //	INTEGER
  kitRank: number; //	INTEGER
  kitImage: number; //	INTEGER
  skillSetWith2: number; //	INTEGER
  skillSetWith3: number; //	INTEGER
  skillSetWith4: number; //	INTEGER
  skillSetWith5: number; //	INTEGER
  skillSetWith6: number; //	INTEGER
  localize: boolean;
  gate_version: string;
  kitID: number; // INTEGER
  priority: number; // FLOAT

  kitFaction(): string {
    return [undefined, "Sentinel", "Assembly", "Paradox", "Venture"][this.kitType];
  }
  kitFactionColor(): string {
    return [undefined, "#0061f8", "#f07200", "#800000", "#b4d600"][this.kitType];
  }
  kitFactionImageUrl(): string {
    let faction = [undefined, "sentinel", "assembly", "paradox", "venture"][this.kitType];
    if (faction) return `textures/ui/inventory/kits/kit_${faction}.png`;
  }
  isForKitFaction(): boolean {
    return this.kitType > 0 && this.kitType < 5;
  }
}

export class DB_ItemSetSkills {
  SkillSetID: number; // INTEGER
  SkillID: number; // INTEGER
  SkillCastType: number; // INTEGER
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

export class DB_InventoryItem {
  count: number;
  equip: any;
  itemid: number;
}

export class DB_InventoryComponent {
  items: DB_InventoryItem[];
}

export class DB_DestructibleComponent {
  LootMatrixIndex: number;
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
