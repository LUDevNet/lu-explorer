// Reference Classes
export class DB_ObjectRef_ByType {
  id: number;
  name: string;
}

export class FactionsPod {
  factions: DB_Factions[];
}

// LU database definitions

export interface IGateable {
  gate_version?: string; // TEXT
}

export interface ILocalizable {
  localize: boolean; // BOOLEAN
  locStatus: number; // INTEGER
}

export interface DB_Objects extends IGateable, ILocalizable {
  id: number; // INTEGER
  name: string; // TEXT
  placeable: boolean; // BOOLEAN
  type: string; // TEXT
  description: string; // TEXT
  npcTemplateID: number; // INTEGER
  displayName: string; // TEXT
  interactionDistance: number; // FLOAT
  nametag: boolean; // BOOLEAN
  _internalNotes: string; // TEXT
  HQ_valid: boolean; // BOOLEAN
}

export interface DB_ObjectSkills {
  objectTemplate: number;
  skillID: number;
  AICombatWeight: number;
  castOnType: number;
}

export interface DB_ComponentsRegistry {
  id: number;
  component_type: number;
  component_id: number;
}

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

export class DB_BrickIDTable {
  NDObjectID: number;
  LEGOBrickID: number;
}

export class DB_CurrencyTable {
  currencyIndex: number; // INTEGER
  npcminlevel: number; // INTEGER
  minvalue: number; // INTEGER
  maxvalue: number; // INTEGER
  id: number; // INTEGER
}

export class DB_Factions {
  faction: number; // INTEGER
  factionList: string; // TEXT
  factionListFriendly: boolean;
  friendList: string; // TEXT
  enemyList: string; // TEXT
}

export class DB_LootMatrix {
  LootMatrixIndex: number;
  percent: number;
  minToDrop: number;
  maxToDrop: number;
  LootTableIndex: number;
  RarityTableIndex: number;
  id: number;
  flagID: number;
  gate_version: string;
}

export interface DB_MinifigComponent {
  id: number; // INTEGER
  head: number; // INTEGER
  chest: number; // INTEGER
  legs: number; // INTEGER
  hairstyle: number; // INTEGER
  haircolor: number; // INTEGER
  chestdecal: number; // INTEGER
  headcolor: number; // INTEGER
  lefthand: number; // INTEGER
  righthand: number; // INTEGER
  eyebrowstyle: number; // INTEGER
  eyesstyle: number; // INTEGER
  mouthstyle: number; // INTEGER
}

export interface DB_MinifigDecals_Torsos {
  ID: number; // INTEGER
  High_path: string; // TEXT
  CharacterCreateValid: boolean;
  male: boolean;
  female: boolean;
}

export class DB_LootTable {
  itemid: number; // INTEGER
  LootTableIndex: number; // INTEGER
  id: number; // INTEGER
  MissionDrop: boolean; // BOOLEAN
  sortPriority: number; // INTEGER
}

export class DB_LevelProgressionLookup {
  id: number; // INT
  requiredUScore: number; // INT
  BehaviorEffect: string;
}

export class DB_mapIcon {
  LOT: number;
  iconID: number;
  iconState: number;
}

export class DB_mapItemTypes {
  id: number;
  description: string;
  equipLocation: string;
}

export class DB_mapShaders {
  id: number;
  label: string;
  gameValue: number;
  priority?: number;
}

export class DB_brickAttributes {
  ID: number;
  icon_asset: string;
  display_order: number;
  locStatus: number;
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
  baseValue?: number; // INTEGER
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

export class DB_Rewards {
  id: number; //INTEGER
  LevelID: number; //INTEGER
  MissionID: number; //INTEGER
  RewardType: number; //INTEGER
  value: number; //INTEGER
  count: number; //INTEGER
}

export class DB_RewardCodes {
  id: number; // INTEGER
  code: string; // TEXT
  attachmentLOT: number; // INTEGER
  locStatus: number; // INTEGER
  gate_version: string; // TEXT
}

export interface DB_RocketLaunchpadControlComponent {
  id: number; // INTEGER
  targetZone: number; // INTEGER
  defaultZoneID: number; // INTEGER
  targetScene?: string; // TEXT
  gmLevel: number; // INTEGER
  playerAnimation: string; // TEXT
  rocketAnimation: string; // TEXT
  launchMusic?: string; // TEXT
  useLaunchPrecondition: boolean
  useAltLandingPrecondition: boolean
  launchPrecondition?: string; // TEXT
  altLandingPrecondition?: string; // TEXT
  altLandingSpawnPointName?: string; // TEXT
}

export class DB_AccessoryDefaultLoc {
  Description: string;
  GroupID: number;
  Pos_X: number;
  Pos_Y: number;
  Pos_Z: number;
  Rot_X: number;
  Rot_Y: number;
  Rot_Z: number;
}

export class DB_BaseCombatAIComponent {
  id: number; // INTEGER
  behaviorType: number; // INTEGER
  combatRoundLength: number; // FLOAT
  combatRole: number; // INTEGER
  minRoundLength: number; // FLOAT
  maxRoundLength: number; // FLOAT
  tetherSpeed: number; // FLOAT
  pursuitSpeed: number; // FLOAT
  combatStartDelay: number; // FLOAT
  softTetherRadius: number; // FLOAT
  hardTetherRadius: number; // FLOAT
  spawnTimer: number; // FLOAT
  tetherEffectID: number; // INTEGER
  ignoreMediator: boolean; // BOOLEAN
  aggroRadius: number; // FLOAT
  ignoreStatReset: boolean; // BOOLEAN
  ignoreParent: boolean; // BOOLEAN
}

export class DB_Behavior {
  behaviorID: number;
  effectHandle: string;
  effectID: number;
  templateID: number;
  parameters: { [key: string]: number };
}

export class DB_BehaviorTemplate {
  behaviorID: number;
  effectHandle: string;
  effectID: number;
  templateID: number;
}

export class DB_BehaviorParameter {
  behaviorID: number;
  parameterID: string;
  value: number;
}

export class DB_EventGating {
  eventName: string;
  date_start: number;
  date_end: number;
}

export class DB_FeatureGating {
  featureName: string;
  major: number;
  current: number;
  minor: number;
  description?: string;
}

export interface DB_Release_Version {
  ReleaseVersion: string; // TEXT
  ReleaseDate: number; // BIGINT
}

export interface DB_ScriptComponent {
  id: number; // INTEGER
  script_name?: string; // TEXT
  client_script_name?: string; // TEXT
}

export class DB_SkillBehavior {
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

export interface DB_SubscriptionPricing {
  id: number; // INTEGER
  countryCode: string; // TEXT
  monthlyFeeGold: string; // TEXT
  monthlyFeeSilver: string; // TEXT
  monthlyFeeBronze: string; // TEXT
  monetarySymbol: number; // INTEGER
  symbolIsAppended: boolean,
}

export class DB_Icons {
  IconID: number;
  IconPath: string;
  IconName: string;
}

export class DB_PhysicsComponent {
  id: number; // INTEGER
  static: number; // FLOAT
  physics_asset: string; // TEXT
  jump: number; // FLOAT
  doublejump: number; // FLOAT
  speed: number; // FLOAT
  rotSpeed: number; // FLOAT
  playerHeight: number; // FLOAT
  playerRadius: number; // FLOAT
  pcShapeType: number; // INTEGER
  collisionGroup: number; // INTEGER
  airSpeed: number; // FLOAT
  boundaryAsset: string; // TEXT
  jumpAirSpeed: number; // FLOAT
  friction: number; // FLOAT
  gravityVolumeAsset: string; // TEXT
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

export interface DB_ProximityMonitorComponent {
  id: number; // INTEGER
  Proximities: string; // TEXT
  LoadOnClient: boolean;
  LoadOnServer: boolean;
}

export interface DB_RebuildComponent {
  id: number; // INTEGER
  reset_time: number; // FLOAT
  complete_time?: number; // FLOAT
  take_imagination: number; // INTEGER
  interruptible: boolean;
  self_activator: boolean;
  custom_modules?: string; // TEXT
  activityID?: number; // INTEGER
  post_imagination_cost?: number; // INTEGER
  time_before_smash: number; // FLOAT
}

export class DB_MissionNPCComponent {
  id: number; // INTEGER
  missionID: number; // INTEGER
  offersMission: boolean;
  acceptsMission: boolean;
  gate_version: string; // TEXT
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

export interface DB_ModuleComponent {
  id: number; // INTEGER
  partCode: number; // INTEGER
  buildType: number; // INTEGER
  xml: string; // VARCHAR
  primarySoundGUID?: string; // TEXT
  assembledEffectID?: number; // INTEGER
}

export interface DB_MovementAIComponent {
  id: number; // INTEGER,
  MovementType: string; // TEXT
  WanderChance: number; // FLOAT
  WanderDelayMin: number; // FLOAT
  WanderDelayMax: number; // FLOAT
  WanderSpeed: number; // FLOAT
  WanderRadius: number; // FLOAT
  attachedPath?: string; // TEXT
}

export interface DB_NpcIcons {
  id: number; // INTEGER
  color: number; // INTEGER
  offset: number; // FLOAT
  LOT: number; // INTEGER
  Texture?: string; // TEXT
  isClickable: boolean;
  scale: number; // FLOAT
  rotateToFace: boolean;
  compositeHorizOffset?: number; // FLOAT
  compositeVertOffset?: number; // FLOAT
  compositeScale?: number; // FLOAT
  compositeConnectionNode?: string; // TEXT
  compositeLOTMultiMission?: number; // INTEGER
  compositeLOTMultiMissionVentor?: number; // INTEGER
  compositeIconTexture?: string; // TEXT
}

export class DB_InventoryComponent {
  id: number;
  count: number;
  equip: any;
  itemid: number;
}

export class DB_DeletionRestrictions {
  id: number; // INTEGER
  restricted: boolean; // BOOLEAN
  ids: string; // TEXT
  checkType: number; // INTEGER
  localize: boolean; // BOOLEAN
  locStatus: number; // INTEGER
  gate_version?: string; // TEXT
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
  id: number; // INTEGER
  requirement_mission: number; // INTEGER
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
}

export interface DB_MissionText extends ILocalizable, IGateable {
  id: number;
  story_icon?: string;
  missionIcon?: string;
  offerNPCIcon?: string;
  IconID?: number;
  state_1_anim?: string;
  state_2_anim?: string;
  state_3_anim?: string;
  state_4_anim?: string;
  state_3_turnin_anim?: string;
  state_4_turnin_anim?: string;
  onclick_anim?: string;
  CinematicAccepted?: string;
  CinematicAcceptedLeadin?: number; // FLOAT
  CinematicCompleted?: string;
  CinematicCompletedLeadin?: number; // FLOAT
  CinematicRepeatable?: string;
  CinematicRepeatableLeadin?: number; // FLOAT
  CinematicRepeatableCompleted?: string;
  CinematicRepeatableCompletedLeadin?: number; // FLOAT
  AudioEventGUID_Interact?: string;
  AudioEventGUID_OfferAccept?: string;
  AudioEventGUID_OfferDeny?: string;
  AudioEventGUID_Completed?: string;
  AudioEventGUID_TurnIn?: string;
  AudioEventGUID_Failed?: string;
  AudioEventGUID_Progress?: string;
  AudioMusicCue_OfferAccept?: string;
  AudioMusicCue_TurnIn?: string;
  turnInIconID?: number; // INTEGER
}

export class DB_WhatsCoolItemSpotlight {
  id: number; // INTEGER
  itemID: number; // INTEGER
  localize: boolean; // BOOLEAN
  gate_version: string; // TEXT
  locStatus: number; // INTEGER
}

export interface DB_PropertyTemplate extends IGateable, ILocalizable {
  id: number; // INTEGER
  mapID: number; // INTEGER
  vendorMapID: number; // INTEGER
  spawnName: string; // TEXT
  type: number; // INTEGER
  sizecode: number; // INTEGER
  minimumPrice: number; // INTEGER
  rentDuration: number; // INTEGER
  path: string; // TEXT
  cloneLimit: number; // INTEGER
  durationType: number; // INTEGER
  achievementRequired: number; // INTEGER
  zoneX: number; // FLOAT
  zoneY: number; // FLOAT
  zoneZ: number; // FLOAT
  maxBuildHeight: number; // FLOAT
  reputationPerMinute: number; // INTEGER
}

export class DB_WhatsCoolNewsAndTips {
  id: number; // INTEGER
  iconID: number; // INTEGER
  type: number; // INTEGER
  localize: boolean; // BOOLEAN
  gate_version: string; // TEXT
  locStatus: number; // INTEGER
}

export interface DB_ZoneTable {
  zoneID: number;
  locStatus: number;
  zoneName: string;
  scriptID: number;
  ghostdistance_min: number;
  ghostdistance: number;
  population_soft_cap: number;
  population_hard_cap: number;
  DisplayDescription: string;
  mapFolder: string;
  smashableMinDistance: number;
  smashableMaxDistance: number;
  mixerProgram: string;
  clientPhysicsFramerate: string;
  serverPhysicsFramerate: string;
  zoneControlTemplate: number;
  widthInChunks: number;
  heightInChunks: number;
  petsAllowed: boolean;
  localize: boolean;
  fZoneWeight: number;
  thumbnail: string;
  PlayerLoseCoinsOnDeath: boolean;
  disableSaveLoc: boolean;
  teamRadius: number;
  gate_version: string;
  mountsAllowed: boolean;
}

export interface DB_PackageComponent {
  id: number,
  LootMatrixIndex: number,
  packageType: number,
}

export interface DB_PetComponent {
  id: number; // Integer
  minTameUpdateTime: number; // Float
  maxTameUpdateTime: number; // Float
  percentTameChance: number; // Float
  tamability: number; // Float
  elementType: number; // Integer
  walkSpeed: number; // Float
  runSpeed: number; // Float
  sprintSpeed: number; // Float
  idleTimeMin: number; // Float
  idleTimeMax: number; // Float
  petForm: number; // Integer
  imaginationDrainRate: number; // Float
  AudioMetaEventSet?: string; // Text
  buffIDs?: string; // Text
}

export interface DB {
  AccessoryDefaultLoc: DB_AccessoryDefaultLoc[],
  Activities: DB_Activities[],
  ActivityRewards: DB_ActivityRewards[],
  BaseCombatAIComponent: DB_BaseCombatAIComponent[],
  BrickColors: DB_BrickColors[],
  BrickIDTable: DB_BrickIDTable[],
  CollectibleComponent: DB_CollectibleComponent[],
  ComponentsRegistry: DB_ComponentsRegistry[],
  CurrencyTable: DB_CurrencyTable[],
  DeletionRestrictions: DB_DeletionRestrictions[],
  DestructibleComponent: DB_DestructibleComponent[],
  EventGating: DB_EventGating[],
  Factions: DB_Factions[],
  FeatureGating: DB_FeatureGating[],
  Icons: DB_Icons[],
  InventoryComponent: DB_InventoryComponent[],
  ItemComponent: DB_ItemComponent[],
  ItemSets: DB_ItemSets[],
  ItemSetSkills: DB_ItemSetSkills[],
  LevelProgressionLookup: DB_LevelProgressionLookup[],
  LootMatrix: DB_LootMatrix[],
  MinifigComponent: DB_MinifigComponent[],
  MinifigDecals_Torsos: DB_MinifigDecals_Torsos[];
  Missions: DB_Missions[],
  MissionTasks: DB_MissionTasks[],
  MissionText: DB_MissionText[],
  MissionNPCComponent: DB_MissionNPCComponent[],
  ModuleComponent: DB_ModuleComponent[],
  MovementAIComponent: DB_MovementAIComponent[],
  NpcIcons: DB_NpcIcons[],
  Objects: DB_Objects[],
  ObjectSkills: DB_ObjectSkills[],
  PackageComponent: DB_PackageComponent[],
  PetComponent: DB_PetComponent[],
  PhysicsComponent: DB_PhysicsComponent[],
  Preconditions: DB_Preconditions[],
  ProximityMonitorComponent: DB_ProximityMonitorComponent[],
  RebuildComponent: DB_RebuildComponent[],
  Release_Version: DB_Release_Version[],
  RenderComponent: DB_RenderComponent[],
  Rewards: DB_Rewards[],
  RewardCodes: DB_RewardCodes[],
  RocketLaunchpadControlComponent: DB_RocketLaunchpadControlComponent[],
  ScriptComponent: DB_ScriptComponent[],
  SkillBehavior: DB_SkillBehavior[],
  SubscriptionPricing: DB_SubscriptionPricing[],
  VendorComponent: DB_VendorComponent[],
  WhatsCoolItemSpotlight: DB_WhatsCoolItemSpotlight[],
  WhatsCoolNewsAndTips: DB_WhatsCoolNewsAndTips[],
  ZoneTable: DB_ZoneTable[],
  brickAttributes: DB_brickAttributes[],
  mapShaders: DB_mapShaders[],
  mapIcon: DB_mapIcon[],
  mapItemTypes: DB_mapItemTypes[]
}

export type TableName = keyof DB;
export type Table<K> = K extends keyof DB ? DB[K] extends DB[K & keyof DB] ? DB[K & TableName] : never : never;
export type Row<K> = Table<K> extends Array<infer R> ? R : never;