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

export class ActivityRewardsPod {
  activity_rewards: DB_ActivityRewards[];
}

export class FactionsPod {
  factions: DB_Factions[];
}

// LU database definitions

export class DB_Activities {
  ActivityID: number; // INTEGER
  locStatus: number; // INTEGER
  instanceMapID: number; // INTEGER
  minTeams: number; // INTEGER
  maxTeams: number; // INTEGER
  minTeamSize: number; // INTEGER
  maxTeamSize: number; // INTEGER
  waitTime: number; // INTEGER
  startDelay: number; // INTEGER
  requiresUniqueData: boolean;
  leaderboardType: number; // INTEGER
  localize: boolean;
  optionalCostLOT: number; // INTEGER
  optionalCostCount: number; // INTEGER
  showUIRewards: boolean;
  CommunityActivityFlagID: number; // INTEGER
  gate_version: string; // TEXT
  noTeamLootOnDeath: boolean;
  optionalPercentage: number; // FLOAT
}

export class DB_ActivityRewards {
  objectTemplate: number; // INTEGER
  ActivityRewardIndex: number; // INTEGER
  activityRating: number; // INTEGER
  LootMatrixIndex: number; // INTEGER
  CurrencyIndex: number; // INTEGER
  ChallengeRating: number; // INTEGER
  description: string; // TEXT
}

export class DB_Factions {
  faction: number; // INTEGER
  factionList: string; // TEXT
  factionListFriendly: boolean;
  friendList: string; // TEXT
  enemyList: string; // TEXT
}

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
  id: number; // INTEGER
  equipLocation: string; // TEXT
  baseValue: number; // INTEGER
  isKitPiece: boolean;
  rarity: number; // INTEGER
  itemType: number; // INTEGER
  itemInfo: number; // BIGINT
  inLootTable: boolean;
  inVendor: boolean;
  isUnique: boolean;
  isBOP: boolean;
  isBOE: boolean;
  reqFlagID: number; // INTEGER
  reqSpecialtyID: number; // INTEGER
  reqSpecRank: number; // INTEGER
  reqAchievementID: number; // INTEGER
  stackSize: number; // INTEGER
  color1: number; // INTEGER
  decal: number; // INTEGER
  offsetGroupID: number; // INTEGER
  buildTypes: number; // INTEGER
  reqPrecondition: string; // TEXT
  animationFlag: number; // INTEGER
  equipEffects: number; // INTEGER
  readyForQA: boolean;
  itemRating: number; // INTEGER
  isTwoHanded: boolean;
  minNumRequired: number; // INTEGER
  delResIndex: number; // INTEGER
  currencyLOT: number; // INTEGER
  altCurrencyCost: number; // INTEGER
  subItems: string; // TEXT
  audioEventUse: string; // TEXT
  noEquipAnimation: boolean;
  commendationLOT: number; // INTEGER
  commendationCost: number; // INTEGER
  audioEquipMetaEventSet: string; // TEXT
  currencyCosts: string; // TEXT
  ingredientInfo: string; // TEXT
  locStatus: number; // INTEGER
  forgeType: number; // INTEGER
  SellMultiplier: number; // FLOAT
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

export class DB_RenderComponent {
  id: number;
  render_asset: string; // TEXT
  icon_asset: string; // TEXT
  IconID: number;
  shader_id: number;
  effect1: number;
  effect2: number;
  effect3: number;
  effect4: number;
  effect5: number;
  effect6: number;
  animationGroupIDs: string; // TEXT
  fade: boolean; // BOOLEAN
  usedropshadow: boolean; // BOOLEAN
  preloadAnimations: boolean; // BOOLEAN
  fadeInTime: number; // FLOAT
  maxShadowDistance: number; // FLOAT
  ignoreCameraCollision: boolean; // BOOLEAN
  renderComponentLOD1: number;
  renderComponentLOD2: number;
  gradualSnap: boolean; // BOOLEAN
  animationFlag: number;
  AudioMetaEventSet: string; // TEXT
  billboardHeight: number; // FLOAT
  chatBubbleOffset: number; // FLOAT
  staticBillboard: boolean; // BOOLEAN
  LXFMLFolder: string; // TEXT
  attachIndicatorsToNode: boolean; // BOOLEAN
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

export class DB_Preconditions {
  id: number; // INTEGER
  type: number; // INTEGER
  targetLOT: string; // TEXT
  targetGroup: string; // TEXT
  targetCount: number; // INTEGER
  iconID: number; // INTEGER
  localize: boolean;
  validContexts: number; // BIGINT
  locStatus: number; // INTEGER
  gate_version: string; // TEXT
}

export class DB_NPCMission {
  id: number; // INTEGER
  missionID: number; // INTEGER
  offersMission: boolean;
  acceptsMission: boolean;
  gate_version: string; // TEXT
}

export class DB_MissionNPCComponent {
  missions: DB_NPCMission[];
}

export class DB_Missions {
  id: number;
  defined_type: string;
  defined_subtype: string;
  UISortOrder: number;
  offer_objectID: number;
  target_objectID: number;
  reward_currency: number; // bigint
  LegoScore: number;
  reward_reputation: number; // bigint
  isChoiceReward: boolean;
  reward_item1: number;
  reward_item1_count: number;
  reward_item2: number;
  reward_item2_count: number;
  reward_item3: number;
  reward_item3_count: number;
  reward_item4: number;
  reward_item4_count: number;
  reward_emote: number;
  reward_emote2: number;
  reward_emote3: number;
  reward_emote4: number;
  reward_maximagination: number;
  reward_maxhealth: number;
  reward_maxinventory: number;
  reward_maxmodel: number;
  reward_maxwidget: number;
  reward_maxwallet: number; // bigint
  repeatable: boolean;
  reward_currency_repeatable: number; // bigint
  reward_item1_repeatable: number;
  reward_item1_repeat_count: number;
  reward_item2_repeatable: number;
  reward_item2_repeat_count: number;
  reward_item3_repeatable: number;
  reward_item3_repeat_count: number;
  reward_item4_repeatable: number;
  reward_item4_repeat_count: number;
  time_limit: number;
  isMission: boolean;
  missionIconID: number;
  prereqMissionID: string;
  localize: boolean;
  inMOTD: boolean;
  cooldownTime: number; // bigint
  isRandom: boolean;
  randomPool: string;
  UIPrereqID: number;
  gate_version: string;
  HUDStates: string;
  locStatus: number;
  reward_bankinventory: number;
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
  id: number; // INTEGER
  faction: number; // INTEGER
  factionList: string; // TEXT
  life: number; // INTEGER
  imagination: number; // INTEGER
  LootMatrixIndex: number; // INTEGER
  CurrencyIndex: number; // INTEGER
  level: number; // INTEGER
  armor: number; // FLOAT
  death_behavior: number; // INTEGER
  isnpc: boolean;
  attack_priority: number; // INTEGER
  isSmashable: boolean;
  difficultyLevel: number; // INTEGER
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
