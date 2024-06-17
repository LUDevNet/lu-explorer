import { gql } from 'app/util/services/graphql';
import { Injectable } from '@angular/core';
import * as Apollo from 'app/util/services/graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AiCombatRoles = {
  __typename?: 'AICombatRoles';
  id?: Maybe<Scalars['Int']['output']>;
  preferredRole?: Maybe<Scalars['Int']['output']>;
  specificMaxRange?: Maybe<Scalars['Float']['output']>;
  specificMinRange?: Maybe<Scalars['Float']['output']>;
  specifiedMaxRangeNOUSE?: Maybe<Scalars['Float']['output']>;
  specifiedMinRangeNOUSE?: Maybe<Scalars['Float']['output']>;
};

export type AccessoryDefaultLoc = {
  __typename?: 'AccessoryDefaultLoc';
  Description?: Maybe<Scalars['String']['output']>;
  GroupID?: Maybe<Scalars['Int']['output']>;
  Pos_X?: Maybe<Scalars['Float']['output']>;
  Pos_Y?: Maybe<Scalars['Float']['output']>;
  Pos_Z?: Maybe<Scalars['Float']['output']>;
  Rot_X?: Maybe<Scalars['Float']['output']>;
  Rot_Y?: Maybe<Scalars['Float']['output']>;
  Rot_Z?: Maybe<Scalars['Float']['output']>;
};

export type Activities = {
  __typename?: 'Activities';
  ActivityID?: Maybe<Scalars['Int']['output']>;
  ActivityName_de_DE?: Maybe<Scalars['String']['output']>;
  ActivityName_en_GB?: Maybe<Scalars['String']['output']>;
  ActivityName_en_US?: Maybe<Scalars['String']['output']>;
  ActivityName_loc?: Maybe<Scalars['String']['output']>;
  ActivityText: Array<ActivityText>;
  ActivityText_activityID: Array<ActivityText>;
  CommunityActivityFlagID?: Maybe<Scalars['Int']['output']>;
  RebuildComponent: Array<RebuildComponent>;
  RebuildComponent_activityID: Array<RebuildComponent>;
  gate_version?: Maybe<FeatureGating>;
  instanceMapID?: Maybe<ZoneTable>;
  leaderboardType?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  maxTeamSize?: Maybe<Scalars['Int']['output']>;
  maxTeams?: Maybe<Scalars['Int']['output']>;
  minTeamSize?: Maybe<Scalars['Int']['output']>;
  minTeams?: Maybe<Scalars['Int']['output']>;
  noTeamLootOnDeath?: Maybe<Scalars['Int']['output']>;
  optionalCostCount?: Maybe<Scalars['Int']['output']>;
  optionalCostLOT?: Maybe<Scalars['Int']['output']>;
  optionalPercentage?: Maybe<Scalars['Float']['output']>;
  requiresUniqueData?: Maybe<Scalars['Int']['output']>;
  showUIRewards?: Maybe<Scalars['Int']['output']>;
  startDelay?: Maybe<Scalars['Int']['output']>;
  waitTime?: Maybe<Scalars['Int']['output']>;
};

export type ActivityRewards = {
  __typename?: 'ActivityRewards';
  ActivityRewardIndex?: Maybe<Scalars['Int']['output']>;
  ChallengeRating?: Maybe<Scalars['Int']['output']>;
  CurrencyIndex?: Maybe<Scalars['Int']['output']>;
  LootMatrixIndex?: Maybe<LootMatrix>;
  activityRating?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  objectTemplate?: Maybe<Objects>;
};

export type ActivityText = {
  __typename?: 'ActivityText';
  activityID?: Maybe<Activities>;
  broadcast_subjectText_de_DE?: Maybe<Scalars['String']['output']>;
  broadcast_subjectText_en_GB?: Maybe<Scalars['String']['output']>;
  broadcast_subjectText_en_US?: Maybe<Scalars['String']['output']>;
  broadcast_subjectText_loc?: Maybe<Scalars['String']['output']>;
  broadcast_text_de_DE?: Maybe<Scalars['String']['output']>;
  broadcast_text_en_GB?: Maybe<Scalars['String']['output']>;
  broadcast_text_en_US?: Maybe<Scalars['String']['output']>;
  broadcast_text_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  hint1_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint1_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint1_text_en_US?: Maybe<Scalars['String']['output']>;
  hint1_text_loc?: Maybe<Scalars['String']['output']>;
  hint2_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint2_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint2_text_en_US?: Maybe<Scalars['String']['output']>;
  hint2_text_loc?: Maybe<Scalars['String']['output']>;
  hint3_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint3_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint3_text_en_US?: Maybe<Scalars['String']['output']>;
  hint3_text_loc?: Maybe<Scalars['String']['output']>;
  hint4_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint4_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint4_text_en_US?: Maybe<Scalars['String']['output']>;
  hint4_text_loc?: Maybe<Scalars['String']['output']>;
  hint5_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint5_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint5_text_en_US?: Maybe<Scalars['String']['output']>;
  hint5_text_loc?: Maybe<Scalars['String']['output']>;
  hint6_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint6_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint6_text_en_US?: Maybe<Scalars['String']['output']>;
  hint6_text_loc?: Maybe<Scalars['String']['output']>;
  hint7_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint7_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint7_text_en_US?: Maybe<Scalars['String']['output']>;
  hint7_text_loc?: Maybe<Scalars['String']['output']>;
  hint8_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint8_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint8_text_en_US?: Maybe<Scalars['String']['output']>;
  hint8_text_loc?: Maybe<Scalars['String']['output']>;
  hint9_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint9_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint9_text_en_US?: Maybe<Scalars['String']['output']>;
  hint9_text_loc?: Maybe<Scalars['String']['output']>;
  hint10_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint10_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint10_text_en_US?: Maybe<Scalars['String']['output']>;
  hint10_text_loc?: Maybe<Scalars['String']['output']>;
  hint11_text_de_DE?: Maybe<Scalars['String']['output']>;
  hint11_text_en_GB?: Maybe<Scalars['String']['output']>;
  hint11_text_en_US?: Maybe<Scalars['String']['output']>;
  hint11_text_loc?: Maybe<Scalars['String']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  mail_subjectText_de_DE?: Maybe<Scalars['String']['output']>;
  mail_subjectText_en_GB?: Maybe<Scalars['String']['output']>;
  mail_subjectText_en_US?: Maybe<Scalars['String']['output']>;
  mail_subjectText_loc?: Maybe<Scalars['String']['output']>;
  mail_text_de_DE?: Maybe<Scalars['String']['output']>;
  mail_text_en_GB?: Maybe<Scalars['String']['output']>;
  mail_text_en_US?: Maybe<Scalars['String']['output']>;
  mail_text_loc?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AnimationIndex = {
  __typename?: 'AnimationIndex';
  animationGroupID?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groupType?: Maybe<Scalars['String']['output']>;
};

export type Animations = {
  __typename?: 'Animations';
  animationGroupID?: Maybe<Scalars['Int']['output']>;
  animation_length?: Maybe<Scalars['Float']['output']>;
  animation_name?: Maybe<Scalars['String']['output']>;
  animation_type?: Maybe<Scalars['String']['output']>;
  blendTime?: Maybe<Scalars['Float']['output']>;
  chance_to_play?: Maybe<Scalars['Float']['output']>;
  face_animation_name?: Maybe<Scalars['String']['output']>;
  hideEquip?: Maybe<Scalars['Int']['output']>;
  ignoreUpperBody?: Maybe<Scalars['Int']['output']>;
  max_loops?: Maybe<Scalars['Int']['output']>;
  min_loops?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  restartable?: Maybe<Scalars['Int']['output']>;
};

export type BaseCombatAiComponent = {
  __typename?: 'BaseCombatAIComponent';
  aggroRadius?: Maybe<Scalars['Float']['output']>;
  behaviorType?: Maybe<Scalars['Int']['output']>;
  combatRole?: Maybe<Scalars['Int']['output']>;
  combatRoundLength?: Maybe<Scalars['Float']['output']>;
  combatStartDelay?: Maybe<Scalars['Float']['output']>;
  hardTetherRadius?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ignoreMediator?: Maybe<Scalars['Int']['output']>;
  ignoreParent?: Maybe<Scalars['Int']['output']>;
  ignoreStatReset?: Maybe<Scalars['Int']['output']>;
  maxRoundLength?: Maybe<Scalars['Float']['output']>;
  minRoundLength?: Maybe<Scalars['Float']['output']>;
  pursuitSpeed?: Maybe<Scalars['Float']['output']>;
  softTetherRadius?: Maybe<Scalars['Float']['output']>;
  spawnTimer?: Maybe<Scalars['Float']['output']>;
  tetherEffectID?: Maybe<Scalars['Int']['output']>;
  tetherSpeed?: Maybe<Scalars['Float']['output']>;
};

export type BehaviorEffect = {
  __typename?: 'BehaviorEffect';
  AudioEventGUID?: Maybe<Scalars['String']['output']>;
  animationName?: Maybe<Scalars['String']['output']>;
  attachToObject?: Maybe<Scalars['Int']['output']>;
  boneName?: Maybe<Scalars['String']['output']>;
  cameraDuration?: Maybe<Scalars['Float']['output']>;
  cameraEffectType?: Maybe<Scalars['Int']['output']>;
  cameraFrequency?: Maybe<Scalars['Float']['output']>;
  cameraPitch?: Maybe<Scalars['Float']['output']>;
  cameraRoll?: Maybe<Scalars['Float']['output']>;
  cameraRotFrequency?: Maybe<Scalars['Float']['output']>;
  cameraXAmp?: Maybe<Scalars['Float']['output']>;
  cameraYAmp?: Maybe<Scalars['Float']['output']>;
  cameraYaw?: Maybe<Scalars['Float']['output']>;
  cameraZAmp?: Maybe<Scalars['Float']['output']>;
  effectID?: Maybe<Scalars['Int']['output']>;
  effectName?: Maybe<Scalars['String']['output']>;
  effectType?: Maybe<Scalars['String']['output']>;
  meshDuration?: Maybe<Scalars['Float']['output']>;
  meshID?: Maybe<Scalars['Int']['output']>;
  meshLockedNode?: Maybe<Scalars['String']['output']>;
  motionID?: Maybe<Scalars['Int']['output']>;
  pcreateDuration?: Maybe<Scalars['Float']['output']>;
  renderDelayVal?: Maybe<Scalars['Float']['output']>;
  renderEffectTime?: Maybe<Scalars['Float']['output']>;
  renderEffectType?: Maybe<Scalars['Int']['output']>;
  renderEndVal?: Maybe<Scalars['Float']['output']>;
  renderRGBA?: Maybe<Scalars['String']['output']>;
  renderShaderVal?: Maybe<Scalars['Int']['output']>;
  renderStartVal?: Maybe<Scalars['Float']['output']>;
  renderValue1?: Maybe<Scalars['Float']['output']>;
  renderValue2?: Maybe<Scalars['Float']['output']>;
  renderValue3?: Maybe<Scalars['Float']['output']>;
  trailID?: Maybe<Scalars['Int']['output']>;
  useSecondary?: Maybe<Scalars['Int']['output']>;
};

export type BehaviorParameter = {
  __typename?: 'BehaviorParameter';
  behaviorID?: Maybe<Scalars['Int']['output']>;
  parameterID?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type BehaviorTemplate = {
  __typename?: 'BehaviorTemplate';
  behaviorID?: Maybe<Scalars['Int']['output']>;
  effectHandle?: Maybe<Scalars['String']['output']>;
  effectID?: Maybe<Scalars['Int']['output']>;
  templateID?: Maybe<BehaviorTemplateName>;
};

export type BehaviorTemplateName = {
  __typename?: 'BehaviorTemplateName';
  BehaviorTemplate: Array<BehaviorTemplate>;
  BehaviorTemplate_templateID: Array<BehaviorTemplate>;
  name?: Maybe<Scalars['String']['output']>;
  templateID?: Maybe<Scalars['Int']['output']>;
};

export type Blueprints = {
  __typename?: 'Blueprints';
  accountid?: Maybe<Scalars['Int']['output']>;
  categoryid?: Maybe<Scalars['Int']['output']>;
  characterid?: Maybe<Scalars['Int']['output']>;
  created?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lxfpath?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
};

export type BrickColors = {
  __typename?: 'BrickColors';
  alpha?: Maybe<Scalars['Float']['output']>;
  blue?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  factoryValid?: Maybe<Scalars['Int']['output']>;
  green?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  legopaletteid?: Maybe<Scalars['Int']['output']>;
  red?: Maybe<Scalars['Float']['output']>;
  validCharacters?: Maybe<Scalars['Int']['output']>;
  validTypes?: Maybe<Scalars['Int']['output']>;
};

export type BrickIdTable = {
  __typename?: 'BrickIDTable';
  LEGOBrickID?: Maybe<Scalars['Int']['output']>;
  NDObjectID?: Maybe<Objects>;
};

export type BuffDefinitions = {
  __typename?: 'BuffDefinitions';
  BuffParameters: Array<BuffParameters>;
  BuffParameters_BuffID: Array<BuffParameters>;
  ID?: Maybe<Scalars['Int']['output']>;
  Priority?: Maybe<Scalars['Float']['output']>;
  UIIcon?: Maybe<Scalars['String']['output']>;
};

export type BuffParameters = {
  __typename?: 'BuffParameters';
  BuffID?: Maybe<BuffDefinitions>;
  EffectID?: Maybe<Scalars['Int']['output']>;
  NumberValue?: Maybe<Scalars['Float']['output']>;
  ParameterName?: Maybe<Scalars['String']['output']>;
  StringValue?: Maybe<Scalars['String']['output']>;
};

export type Camera = {
  __typename?: 'Camera';
  camera_collision_padding?: Maybe<Scalars['Float']['output']>;
  camera_name?: Maybe<Scalars['String']['output']>;
  fade_player_min_range?: Maybe<Scalars['Float']['output']>;
  glide_speed?: Maybe<Scalars['Float']['output']>;
  horizontal_return_modifier?: Maybe<Scalars['Float']['output']>;
  horizontal_rotate_modifier?: Maybe<Scalars['Float']['output']>;
  horizontal_rotate_tolerance?: Maybe<Scalars['Float']['output']>;
  input_movement_scalar?: Maybe<Scalars['Float']['output']>;
  input_rotation_scalar?: Maybe<Scalars['Float']['output']>;
  input_zoom_scalar?: Maybe<Scalars['Float']['output']>;
  look_forward_offset?: Maybe<Scalars['Float']['output']>;
  look_up_offset?: Maybe<Scalars['Float']['output']>;
  maximum_auto_glide_angle?: Maybe<Scalars['Float']['output']>;
  maximum_ignore_jump_distance?: Maybe<Scalars['Float']['output']>;
  maximum_pitch_desired?: Maybe<Scalars['Float']['output']>;
  maximum_vertical_dampening_distance?: Maybe<Scalars['Float']['output']>;
  maximum_zoom?: Maybe<Scalars['Float']['output']>;
  min_glide_distance_tolerance?: Maybe<Scalars['Float']['output']>;
  min_movement_delta_tolerance?: Maybe<Scalars['Float']['output']>;
  minimum_ignore_jump_distance?: Maybe<Scalars['Float']['output']>;
  minimum_pitch_desired?: Maybe<Scalars['Float']['output']>;
  minimum_tether_glide_distance?: Maybe<Scalars['Float']['output']>;
  minimum_vertical_dampening_distance?: Maybe<Scalars['Float']['output']>;
  minimum_zoom?: Maybe<Scalars['Float']['output']>;
  pitch_angle_tolerance?: Maybe<Scalars['Float']['output']>;
  pitch_return_modifier?: Maybe<Scalars['Float']['output']>;
  return_from_incline_modifier?: Maybe<Scalars['Float']['output']>;
  set_0_FOV?: Maybe<Scalars['Float']['output']>;
  set_0_angular_relaxation?: Maybe<Scalars['Float']['output']>;
  set_0_max_yaw_angle?: Maybe<Scalars['Float']['output']>;
  set_0_position_forward_offset?: Maybe<Scalars['Float']['output']>;
  set_0_position_up_offset?: Maybe<Scalars['Float']['output']>;
  set_0_speed_influence_on_dir?: Maybe<Scalars['Float']['output']>;
  set_1_FOV?: Maybe<Scalars['Float']['output']>;
  set_1_angular_relaxation?: Maybe<Scalars['Float']['output']>;
  set_1_fade_in_camera_set_change?: Maybe<Scalars['Int']['output']>;
  set_1_fade_out_camera_set_change?: Maybe<Scalars['Int']['output']>;
  set_1_look_forward_offset?: Maybe<Scalars['Float']['output']>;
  set_1_look_up_offset?: Maybe<Scalars['Float']['output']>;
  set_1_max_yaw_angle?: Maybe<Scalars['Float']['output']>;
  set_1_position_forward_offset?: Maybe<Scalars['Float']['output']>;
  set_1_position_up_offset?: Maybe<Scalars['Float']['output']>;
  set_1_speed_influence_on_dir?: Maybe<Scalars['Float']['output']>;
  set_2_FOV?: Maybe<Scalars['Float']['output']>;
  set_2_angular_relaxation?: Maybe<Scalars['Float']['output']>;
  set_2_fade_in_camera_set_change?: Maybe<Scalars['Int']['output']>;
  set_2_fade_out_camera_set_change?: Maybe<Scalars['Int']['output']>;
  set_2_look_forward_offset?: Maybe<Scalars['Float']['output']>;
  set_2_look_up_offset?: Maybe<Scalars['Float']['output']>;
  set_2_max_yaw_angle?: Maybe<Scalars['Float']['output']>;
  set_2_position_forward_offset?: Maybe<Scalars['Float']['output']>;
  set_2_position_up_offset?: Maybe<Scalars['Float']['output']>;
  set_2_speed_influence_on_dir?: Maybe<Scalars['Float']['output']>;
  starting_zoom?: Maybe<Scalars['Float']['output']>;
  tether_in_return_multiplier?: Maybe<Scalars['Float']['output']>;
  tether_out_return_modifier?: Maybe<Scalars['Float']['output']>;
  verticle_movement_dampening_modifier?: Maybe<Scalars['Float']['output']>;
  yaw_behavior_speed_multiplier?: Maybe<Scalars['Float']['output']>;
  yaw_sign_correction?: Maybe<Scalars['Float']['output']>;
  zoom_return_modifier?: Maybe<Scalars['Float']['output']>;
};

export type CelebrationParameters = {
  __typename?: 'CelebrationParameters';
  ambientB?: Maybe<Scalars['Float']['output']>;
  ambientG?: Maybe<Scalars['Float']['output']>;
  ambientR?: Maybe<Scalars['Float']['output']>;
  animation?: Maybe<Scalars['String']['output']>;
  backgroundObject?: Maybe<Objects>;
  blendTime?: Maybe<Scalars['Float']['output']>;
  cameraPathLOT?: Maybe<Objects>;
  celeLeadIn?: Maybe<Scalars['Float']['output']>;
  celeLeadOut?: Maybe<Scalars['Float']['output']>;
  directionalB?: Maybe<Scalars['Float']['output']>;
  directionalG?: Maybe<Scalars['Float']['output']>;
  directionalR?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  fogColorB?: Maybe<Scalars['Float']['output']>;
  fogColorG?: Maybe<Scalars['Float']['output']>;
  fogColorR?: Maybe<Scalars['Float']['output']>;
  iconID?: Maybe<Icons>;
  id?: Maybe<Scalars['Int']['output']>;
  lightPositionX?: Maybe<Scalars['Float']['output']>;
  lightPositionY?: Maybe<Scalars['Float']['output']>;
  lightPositionZ?: Maybe<Scalars['Float']['output']>;
  mainText?: Maybe<Scalars['String']['output']>;
  mixerProgram?: Maybe<Scalars['String']['output']>;
  musicCue?: Maybe<Scalars['String']['output']>;
  pathNodeName?: Maybe<Scalars['String']['output']>;
  soundGUID?: Maybe<Scalars['String']['output']>;
  specularB?: Maybe<Scalars['Float']['output']>;
  specularG?: Maybe<Scalars['Float']['output']>;
  specularR?: Maybe<Scalars['Float']['output']>;
  subText?: Maybe<Scalars['String']['output']>;
};

export type ChoiceBuildComponent = {
  __typename?: 'ChoiceBuildComponent';
  id?: Maybe<Scalars['Int']['output']>;
  imaginationOverride?: Maybe<Scalars['Int']['output']>;
  selections?: Maybe<Scalars['String']['output']>;
};

export type CollectibleComponent = {
  __typename?: 'CollectibleComponent';
  id?: Maybe<Scalars['Int']['output']>;
  requirement_mission?: Maybe<Missions>;
};

export type ComponentsRegistry = {
  __typename?: 'ComponentsRegistry';
  component_id?: Maybe<Scalars['Int']['output']>;
  component_type?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ControlSchemes = {
  __typename?: 'ControlSchemes';
  PossessableComponent: Array<PossessableComponent>;
  PossessableComponent_controlSchemeID: Array<PossessableComponent>;
  control_scheme?: Maybe<Scalars['Int']['output']>;
  freecam_fast_speed_multiplier?: Maybe<Scalars['Float']['output']>;
  freecam_mouse_modifier?: Maybe<Scalars['Float']['output']>;
  freecam_slow_speed_multiplier?: Maybe<Scalars['Float']['output']>;
  freecam_speed_modifier?: Maybe<Scalars['Float']['output']>;
  gamepad_pitch_rot_sensitivity?: Maybe<Scalars['Float']['output']>;
  gamepad_trigger_sensitivity?: Maybe<Scalars['Float']['output']>;
  gamepad_yaw_rot_sensitivity?: Maybe<Scalars['Float']['output']>;
  keyboard_pitch_sensitivity?: Maybe<Scalars['Float']['output']>;
  keyboard_yaw_sensitivity?: Maybe<Scalars['Float']['output']>;
  keyboard_zoom_sensitivity?: Maybe<Scalars['Float']['output']>;
  mouse_zoom_wheel_sensitivity?: Maybe<Scalars['Float']['output']>;
  rotation_speed?: Maybe<Scalars['Float']['output']>;
  run_backward_speed?: Maybe<Scalars['Float']['output']>;
  run_strafe_backward_speed?: Maybe<Scalars['Float']['output']>;
  run_strafe_forward_speed?: Maybe<Scalars['Float']['output']>;
  run_strafe_speed?: Maybe<Scalars['Float']['output']>;
  scheme_name?: Maybe<Scalars['String']['output']>;
  walk_backward_speed?: Maybe<Scalars['Float']['output']>;
  walk_forward_speed?: Maybe<Scalars['Float']['output']>;
  walk_strafe_backward_speed?: Maybe<Scalars['Float']['output']>;
  walk_strafe_forward_speed?: Maybe<Scalars['Float']['output']>;
  walk_strafe_speed?: Maybe<Scalars['Float']['output']>;
  x_mouse_move_sensitivity_modifier?: Maybe<Scalars['Float']['output']>;
  y_mouse_move_sensitivity_modifier?: Maybe<Scalars['Float']['output']>;
};

export type CurrencyDenominations = {
  __typename?: 'CurrencyDenominations';
  objectid?: Maybe<Objects>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type CurrencyTable = {
  __typename?: 'CurrencyTable';
  currencyIndex?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  maxvalue?: Maybe<Scalars['Int']['output']>;
  minvalue?: Maybe<Scalars['Int']['output']>;
  npcminlevel?: Maybe<Scalars['Int']['output']>;
};

export type DbExclude = {
  __typename?: 'DBExclude';
  column?: Maybe<Scalars['String']['output']>;
  table?: Maybe<Scalars['String']['output']>;
};

export type DeletionRestrictions = {
  __typename?: 'DeletionRestrictions';
  checkType?: Maybe<Scalars['Int']['output']>;
  failureReason_de_DE?: Maybe<Scalars['String']['output']>;
  failureReason_en_GB?: Maybe<Scalars['String']['output']>;
  failureReason_en_US?: Maybe<Scalars['String']['output']>;
  failureReason_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  ids?: Maybe<Scalars['String']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  restricted?: Maybe<Scalars['Int']['output']>;
};

export type DestructibleComponent = {
  __typename?: 'DestructibleComponent';
  CurrencyIndex?: Maybe<Scalars['Int']['output']>;
  LootMatrixIndex?: Maybe<LootMatrix>;
  armor?: Maybe<Scalars['Float']['output']>;
  attack_priority?: Maybe<Scalars['Int']['output']>;
  death_behavior?: Maybe<Scalars['Int']['output']>;
  difficultyLevel?: Maybe<Scalars['Int']['output']>;
  faction?: Maybe<Factions>;
  factionList?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imagination?: Maybe<Scalars['Int']['output']>;
  isSmashable?: Maybe<Scalars['Int']['output']>;
  isnpc?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  life?: Maybe<Scalars['Int']['output']>;
};

export type DevModelBehaviors = {
  __typename?: 'DevModelBehaviors';
  BehaviorID?: Maybe<Scalars['Int']['output']>;
  ModelID?: Maybe<Scalars['Int']['output']>;
};

export type Emotes = {
  __typename?: 'Emotes';
  Missions_reward_emote: Array<Missions>;
  Missions_reward_emote2: Array<Missions>;
  Missions_reward_emote3: Array<Missions>;
  Missions_reward_emote4: Array<Missions>;
  SpeedchatMenu: Array<SpeedchatMenu>;
  SpeedchatMenu_emoteId: Array<SpeedchatMenu>;
  animationName?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  command?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  iconFilename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  locked?: Maybe<Scalars['Int']['output']>;
  outputText_de_DE?: Maybe<Scalars['String']['output']>;
  outputText_en_GB?: Maybe<Scalars['String']['output']>;
  outputText_en_US?: Maybe<Scalars['String']['output']>;
  outputText_loc?: Maybe<Scalars['String']['output']>;
};

export type EventGating = {
  __typename?: 'EventGating';
  date_end?: Maybe<Scalars['Int']['output']>;
  date_start?: Maybe<Scalars['Int']['output']>;
  eventName?: Maybe<Scalars['String']['output']>;
};

export type ExhibitComponent = {
  __typename?: 'ExhibitComponent';
  fImaginationCost?: Maybe<Scalars['Float']['output']>;
  fReputationSizeMultiplier?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  offsetX?: Maybe<Scalars['Float']['output']>;
  offsetY?: Maybe<Scalars['Float']['output']>;
  offsetZ?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Factions = {
  __typename?: 'Factions';
  DestructibleComponent: Array<DestructibleComponent>;
  DestructibleComponent_faction: Array<DestructibleComponent>;
  enemyList?: Maybe<Scalars['String']['output']>;
  faction?: Maybe<Scalars['Int']['output']>;
  factionList?: Maybe<Scalars['String']['output']>;
  factionListFriendly?: Maybe<Scalars['Int']['output']>;
  friendList?: Maybe<Scalars['String']['output']>;
};

export type FeatureGating = {
  __typename?: 'FeatureGating';
  Activities: Array<Activities>;
  Activities_gate_version: Array<Activities>;
  ActivityText: Array<ActivityText>;
  ActivityText_gate_version: Array<ActivityText>;
  DeletionRestrictions: Array<DeletionRestrictions>;
  DeletionRestrictions_gate_version: Array<DeletionRestrictions>;
  Emotes: Array<Emotes>;
  Emotes_gate_version: Array<Emotes>;
  LootMatrix: Array<LootMatrix>;
  LootMatrix_gate_version: Array<LootMatrix>;
  MissionEmail: Array<MissionEmail>;
  MissionEmail_gate_version: Array<MissionEmail>;
  MissionNPCComponent: Array<MissionNpcComponent>;
  MissionNPCComponent_gate_version: Array<MissionNpcComponent>;
  MissionTasks: Array<MissionTasks>;
  MissionTasks_gate_version: Array<MissionTasks>;
  MissionText: Array<MissionText>;
  MissionText_gate_version: Array<MissionText>;
  Missions: Array<Missions>;
  Missions_gate_version: Array<Missions>;
  Objects: Array<Objects>;
  Objects_gate_version: Array<Objects>;
  PlayerStatistics: Array<PlayerStatistics>;
  PlayerStatistics_gate_version: Array<PlayerStatistics>;
  Preconditions: Array<Preconditions>;
  Preconditions_gate_version: Array<Preconditions>;
  PropertyTemplate: Array<PropertyTemplate>;
  PropertyTemplate_gate_version: Array<PropertyTemplate>;
  RewardCodes: Array<RewardCodes>;
  RewardCodes_gate_version: Array<RewardCodes>;
  SkillBehavior: Array<SkillBehavior>;
  SkillBehavior_gate_version: Array<SkillBehavior>;
  SpeedchatMenu: Array<SpeedchatMenu>;
  SpeedchatMenu_gate_version: Array<SpeedchatMenu>;
  UGBehaviorSounds: Array<UgBehaviorSounds>;
  UGBehaviorSounds_gate_version: Array<UgBehaviorSounds>;
  WhatsCoolItemSpotlight: Array<WhatsCoolItemSpotlight>;
  WhatsCoolItemSpotlight_gate_version: Array<WhatsCoolItemSpotlight>;
  WhatsCoolNewsAndTips: Array<WhatsCoolNewsAndTips>;
  WhatsCoolNewsAndTips_gate_version: Array<WhatsCoolNewsAndTips>;
  ZoneLoadingTips_gate_version: Array<ZoneLoadingTips>;
  ZoneLoadingTips_targetVersion: Array<ZoneLoadingTips>;
  current?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featureName?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['Int']['output']>;
  minor?: Maybe<Scalars['Int']['output']>;
};

export type FlairTable = {
  __typename?: 'FlairTable';
  asset?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Icons = {
  __typename?: 'Icons';
  CelebrationParameters: Array<CelebrationParameters>;
  CelebrationParameters_iconID: Array<CelebrationParameters>;
  IconID?: Maybe<Scalars['Int']['output']>;
  IconName?: Maybe<Scalars['String']['output']>;
  IconPath?: Maybe<Scalars['String']['output']>;
  MissionTasks_IconID: Array<MissionTasks>;
  MissionTasks_largeTaskIconID: Array<MissionTasks>;
  MissionText_IconID: Array<MissionText>;
  MissionText_turnInIconID: Array<MissionText>;
  Missions: Array<Missions>;
  Missions_missionIconID: Array<Missions>;
  Preconditions: Array<Preconditions>;
  Preconditions_iconID: Array<Preconditions>;
  ProximityTypes: Array<ProximityTypes>;
  ProximityTypes_IconID: Array<ProximityTypes>;
  RenderComponent: Array<RenderComponent>;
  RenderComponent_IconID: Array<RenderComponent>;
  SkillBehavior: Array<SkillBehavior>;
  SkillBehavior_skillIcon: Array<SkillBehavior>;
  WhatsCoolNewsAndTips: Array<WhatsCoolNewsAndTips>;
  WhatsCoolNewsAndTips_iconID: Array<WhatsCoolNewsAndTips>;
  mapIcon: Array<MapIcon>;
  mapIcon_iconID: Array<MapIcon>;
};

export type InventoryComponent = {
  __typename?: 'InventoryComponent';
  count?: Maybe<Scalars['Int']['output']>;
  equip?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  itemid?: Maybe<Objects>;
};

export type ItemComponent = {
  __typename?: 'ItemComponent';
  Objects: Array<Objects>;
  Objects_itemComponent: Array<Objects>;
  SellMultiplier?: Maybe<Scalars['Float']['output']>;
  altCurrencyCost?: Maybe<Scalars['Int']['output']>;
  animationFlag?: Maybe<Scalars['Int']['output']>;
  audioEquipMetaEventSet?: Maybe<Scalars['String']['output']>;
  audioEventUse?: Maybe<Scalars['String']['output']>;
  baseValue?: Maybe<Scalars['Int']['output']>;
  buildTypes?: Maybe<Scalars['Int']['output']>;
  color1?: Maybe<Scalars['Int']['output']>;
  commendationCost?: Maybe<Scalars['Int']['output']>;
  commendationLOT?: Maybe<Objects>;
  currencyCosts?: Maybe<Scalars['String']['output']>;
  currencyLOT?: Maybe<Objects>;
  decal?: Maybe<Scalars['Int']['output']>;
  delResIndex?: Maybe<Scalars['Int']['output']>;
  equipEffects?: Maybe<Scalars['Int']['output']>;
  equipLocation?: Maybe<Scalars['String']['output']>;
  forgeType?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inLootTable?: Maybe<Scalars['Int']['output']>;
  inVendor?: Maybe<Scalars['Int']['output']>;
  ingredientInfo?: Maybe<Scalars['String']['output']>;
  ingredientInfo_de_DE?: Maybe<Scalars['String']['output']>;
  ingredientInfo_en_GB?: Maybe<Scalars['String']['output']>;
  ingredientInfo_en_US?: Maybe<Scalars['String']['output']>;
  ingredientInfo_loc?: Maybe<Scalars['String']['output']>;
  isBOE?: Maybe<Scalars['Int']['output']>;
  isBOP?: Maybe<Scalars['Int']['output']>;
  isKitPiece?: Maybe<Scalars['Int']['output']>;
  isTwoHanded?: Maybe<Scalars['Int']['output']>;
  isUnique?: Maybe<Scalars['Int']['output']>;
  itemInfo?: Maybe<Scalars['Int']['output']>;
  itemRating?: Maybe<Scalars['Int']['output']>;
  itemType?: Maybe<MapItemTypes>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  minNumRequired?: Maybe<Scalars['Int']['output']>;
  noEquipAnimation?: Maybe<Scalars['Int']['output']>;
  offsetGroupID?: Maybe<Scalars['Int']['output']>;
  rarity?: Maybe<Scalars['Int']['output']>;
  readyForQA?: Maybe<Scalars['Int']['output']>;
  reqAchievementID?: Maybe<Scalars['Int']['output']>;
  reqFlagID?: Maybe<Scalars['Int']['output']>;
  reqPrecondition?: Maybe<Scalars['String']['output']>;
  reqSpecRank?: Maybe<Scalars['Int']['output']>;
  reqSpecialtyID?: Maybe<Scalars['Int']['output']>;
  stackSize?: Maybe<Scalars['Int']['output']>;
  subItems?: Maybe<Scalars['String']['output']>;
};

export type ItemEggData = {
  __typename?: 'ItemEggData';
  chassie_type_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ItemFoodData = {
  __typename?: 'ItemFoodData';
  element_1?: Maybe<Scalars['Int']['output']>;
  element_1_amount?: Maybe<Scalars['Int']['output']>;
  element_2?: Maybe<Scalars['Int']['output']>;
  element_2_amount?: Maybe<Scalars['Int']['output']>;
  element_3?: Maybe<Scalars['Int']['output']>;
  element_3_amount?: Maybe<Scalars['Int']['output']>;
  element_4?: Maybe<Scalars['Int']['output']>;
  element_4_amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ItemSetSkills = {
  __typename?: 'ItemSetSkills';
  SkillCastType?: Maybe<Scalars['Int']['output']>;
  SkillID?: Maybe<SkillBehavior>;
  SkillSetID?: Maybe<Scalars['Int']['output']>;
};

export type ItemSets = {
  __typename?: 'ItemSets';
  gate_version?: Maybe<Scalars['String']['output']>;
  itemIDs?: Maybe<Scalars['String']['output']>;
  kitID?: Maybe<Scalars['Int']['output']>;
  kitImage?: Maybe<Scalars['Int']['output']>;
  kitName_de_DE?: Maybe<Scalars['String']['output']>;
  kitName_en_GB?: Maybe<Scalars['String']['output']>;
  kitName_en_US?: Maybe<Scalars['String']['output']>;
  kitName_loc?: Maybe<Scalars['String']['output']>;
  kitRank?: Maybe<Scalars['Int']['output']>;
  kitType?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  setID?: Maybe<Scalars['Int']['output']>;
  skillSetWith2?: Maybe<Scalars['Int']['output']>;
  skillSetWith3?: Maybe<Scalars['Int']['output']>;
  skillSetWith4?: Maybe<Scalars['Int']['output']>;
  skillSetWith5?: Maybe<Scalars['Int']['output']>;
  skillSetWith6?: Maybe<Scalars['Int']['output']>;
};

export type JetPackPadComponent = {
  __typename?: 'JetPackPadComponent';
  id?: Maybe<Scalars['Int']['output']>;
  lotBlocker?: Maybe<Objects>;
  lotWarningVolume?: Maybe<Objects>;
  warnDistance?: Maybe<Scalars['Float']['output']>;
  xDistance?: Maybe<Scalars['Float']['output']>;
  yDistance?: Maybe<Scalars['Float']['output']>;
};

export type LupExhibitComponent = {
  __typename?: 'LUPExhibitComponent';
  id?: Maybe<Scalars['Int']['output']>;
  maxXZ?: Maybe<Scalars['Float']['output']>;
  maxY?: Maybe<Scalars['Float']['output']>;
  minXZ?: Maybe<Scalars['Float']['output']>;
  offsetX?: Maybe<Scalars['Float']['output']>;
  offsetY?: Maybe<Scalars['Float']['output']>;
  offsetZ?: Maybe<Scalars['Float']['output']>;
};

export type LupExhibitModelData = {
  __typename?: 'LUPExhibitModelData';
  LOT?: Maybe<Objects>;
  description?: Maybe<Scalars['String']['output']>;
  maxXZ?: Maybe<Scalars['Float']['output']>;
  maxY?: Maybe<Scalars['Float']['output']>;
  minXZ?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
};

export type LupZoneIDs = {
  __typename?: 'LUPZoneIDs';
  zoneID?: Maybe<ZoneTable>;
};

export type LanguageType = {
  __typename?: 'LanguageType';
  LanguageDescription?: Maybe<Scalars['String']['output']>;
  LanguageID?: Maybe<Scalars['Int']['output']>;
};

export type LevelProgressionLookup = {
  __typename?: 'LevelProgressionLookup';
  BehaviorEffect?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  requiredUScore?: Maybe<Scalars['Int']['output']>;
};

export type LootMatrix = {
  __typename?: 'LootMatrix';
  ActivityRewards: Array<ActivityRewards>;
  ActivityRewards_LootMatrixIndex: Array<ActivityRewards>;
  DestructibleComponent: Array<DestructibleComponent>;
  DestructibleComponent_LootMatrixIndex: Array<DestructibleComponent>;
  LootMatrixIndex?: Maybe<LootMatrixIndex>;
  LootTableIndex?: Maybe<LootTable>;
  PackageComponent: Array<PackageComponent>;
  PackageComponent_LootMatrixIndex: Array<PackageComponent>;
  RarityTableIndex?: Maybe<Scalars['Int']['output']>;
  SmashableChain: Array<SmashableChain>;
  SmashableChain_lootMatrixID: Array<SmashableChain>;
  SmashableComponent: Array<SmashableComponent>;
  SmashableComponent_LootMatrixIndex: Array<SmashableComponent>;
  VendorComponent: Array<VendorComponent>;
  VendorComponent_LootMatrixIndex: Array<VendorComponent>;
  flagID?: Maybe<Scalars['Int']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  maxToDrop?: Maybe<Scalars['Int']['output']>;
  minToDrop?: Maybe<Scalars['Int']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
};

export type LootMatrixIndex = {
  __typename?: 'LootMatrixIndex';
  LootMatrix: Array<LootMatrix>;
  LootMatrixIndex?: Maybe<Scalars['Int']['output']>;
  LootMatrix_LootMatrixIndex: Array<LootMatrix>;
  inNpcEditor?: Maybe<Scalars['Int']['output']>;
};

export type LootTable = {
  __typename?: 'LootTable';
  LootMatrix: Array<LootMatrix>;
  LootMatrix_LootTableIndex: Array<LootMatrix>;
  LootTableIndex?: Maybe<LootTableIndex>;
  MissionDrop?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  itemid?: Maybe<Objects>;
  sortPriority?: Maybe<Scalars['Int']['output']>;
};

export type LootTableIndex = {
  __typename?: 'LootTableIndex';
  LootTable: Array<LootTable>;
  LootTableIndex?: Maybe<Scalars['Int']['output']>;
  LootTable_LootTableIndex: Array<LootTable>;
};

export type MinifigComponent = {
  __typename?: 'MinifigComponent';
  chest?: Maybe<Scalars['Int']['output']>;
  chestdecal?: Maybe<Scalars['Int']['output']>;
  eyebrowstyle?: Maybe<MinifigDecals_Eyebrows>;
  eyesstyle?: Maybe<MinifigDecals_Eyes>;
  haircolor?: Maybe<Scalars['Int']['output']>;
  hairstyle?: Maybe<Scalars['Int']['output']>;
  head?: Maybe<Scalars['Int']['output']>;
  headcolor?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lefthand?: Maybe<Scalars['Int']['output']>;
  legs?: Maybe<Scalars['Int']['output']>;
  mouthstyle?: Maybe<MinifigDecals_Mouths>;
  righthand?: Maybe<Scalars['Int']['output']>;
};

export type MinifigDecals_Eyebrows = {
  __typename?: 'MinifigDecals_Eyebrows';
  CharacterCreateValid?: Maybe<Scalars['Int']['output']>;
  High_path?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  Low_path?: Maybe<Scalars['String']['output']>;
  MinifigComponent: Array<MinifigComponent>;
  MinifigComponent_eyebrowstyle: Array<MinifigComponent>;
  female?: Maybe<Scalars['Int']['output']>;
  male?: Maybe<Scalars['Int']['output']>;
};

export type MinifigDecals_Eyes = {
  __typename?: 'MinifigDecals_Eyes';
  CharacterCreateValid?: Maybe<Scalars['Int']['output']>;
  High_path?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  Low_path?: Maybe<Scalars['String']['output']>;
  MinifigComponent: Array<MinifigComponent>;
  MinifigComponent_eyesstyle: Array<MinifigComponent>;
  female?: Maybe<Scalars['Int']['output']>;
  male?: Maybe<Scalars['Int']['output']>;
};

export type MinifigDecals_Legs = {
  __typename?: 'MinifigDecals_Legs';
  High_path?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
};

export type MinifigDecals_Mouths = {
  __typename?: 'MinifigDecals_Mouths';
  CharacterCreateValid?: Maybe<Scalars['Int']['output']>;
  High_path?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  Low_path?: Maybe<Scalars['String']['output']>;
  MinifigComponent: Array<MinifigComponent>;
  MinifigComponent_mouthstyle: Array<MinifigComponent>;
  female?: Maybe<Scalars['Int']['output']>;
  male?: Maybe<Scalars['Int']['output']>;
};

export type MinifigDecals_Torsos = {
  __typename?: 'MinifigDecals_Torsos';
  CharacterCreateValid?: Maybe<Scalars['Int']['output']>;
  High_path?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['Int']['output']>;
  female?: Maybe<Scalars['Int']['output']>;
  male?: Maybe<Scalars['Int']['output']>;
};

export type MissionEmail = {
  __typename?: 'MissionEmail';
  ID?: Maybe<Scalars['Int']['output']>;
  announceText_de_DE?: Maybe<Scalars['String']['output']>;
  announceText_en_GB?: Maybe<Scalars['String']['output']>;
  announceText_en_US?: Maybe<Scalars['String']['output']>;
  announceText_loc?: Maybe<Scalars['String']['output']>;
  attachmentLOT?: Maybe<Objects>;
  bodyText_de_DE?: Maybe<Scalars['String']['output']>;
  bodyText_en_GB?: Maybe<Scalars['String']['output']>;
  bodyText_en_US?: Maybe<Scalars['String']['output']>;
  bodyText_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  messageType?: Maybe<Scalars['Int']['output']>;
  missionID?: Maybe<Missions>;
  notificationGroup?: Maybe<Scalars['Int']['output']>;
  senderName_de_DE?: Maybe<Scalars['String']['output']>;
  senderName_en_GB?: Maybe<Scalars['String']['output']>;
  senderName_en_US?: Maybe<Scalars['String']['output']>;
  senderName_loc?: Maybe<Scalars['String']['output']>;
  subjectText_de_DE?: Maybe<Scalars['String']['output']>;
  subjectText_en_GB?: Maybe<Scalars['String']['output']>;
  subjectText_en_US?: Maybe<Scalars['String']['output']>;
  subjectText_loc?: Maybe<Scalars['String']['output']>;
};

export type MissionNpcComponent = {
  __typename?: 'MissionNPCComponent';
  acceptsMission?: Maybe<Scalars['Int']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  missionID?: Maybe<Missions>;
  offersMission?: Maybe<Scalars['Int']['output']>;
};

export type MissionPrereqs = {
  __typename?: 'MissionPrereqs';
  andGroup: Scalars['Int']['output'];
  mission: Missions;
  prereqMission: Missions;
  prereqMissionState?: Maybe<Scalars['Int']['output']>;
};

export type MissionTaskMissions = {
  __typename?: 'MissionTaskMissions';
  mission: Missions;
  missionTask: MissionTasks;
};

export type MissionTaskObjects = {
  __typename?: 'MissionTaskObjects';
  missionTask: MissionTasks;
  object: Objects;
};

export type MissionTasks = {
  __typename?: 'MissionTasks';
  IconID?: Maybe<Icons>;
  MissionTaskMissions: Array<MissionTaskMissions>;
  MissionTaskMissions_missionTask: Array<MissionTaskMissions>;
  MissionTaskObjects: Array<MissionTaskObjects>;
  MissionTaskObjects_missionTask: Array<MissionTaskObjects>;
  description_de_DE?: Maybe<Scalars['String']['output']>;
  description_en_GB?: Maybe<Scalars['String']['output']>;
  description_en_US?: Maybe<Scalars['String']['output']>;
  description_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Missions>;
  largeTaskIcon?: Maybe<Scalars['String']['output']>;
  largeTaskIconID?: Maybe<Icons>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Int']['output']>;
  targetGroup?: Maybe<Scalars['String']['output']>;
  targetValue?: Maybe<Scalars['Int']['output']>;
  taskParam1?: Maybe<Scalars['String']['output']>;
  taskType?: Maybe<Scalars['Int']['output']>;
  uid?: Maybe<Scalars['Int']['output']>;
};

export type MissionText = {
  __typename?: 'MissionText';
  AudioEventGUID_Completed?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_Failed?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_Interact?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_OfferAccept?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_OfferDeny?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_Progress?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_TurnIn?: Maybe<Scalars['String']['output']>;
  AudioMusicCue_OfferAccept?: Maybe<Scalars['String']['output']>;
  AudioMusicCue_TurnIn?: Maybe<Scalars['String']['output']>;
  CinematicAccepted?: Maybe<Scalars['String']['output']>;
  CinematicAcceptedLeadin?: Maybe<Scalars['Float']['output']>;
  CinematicCompleted?: Maybe<Scalars['String']['output']>;
  CinematicCompletedLeadin?: Maybe<Scalars['Float']['output']>;
  CinematicRepeatable?: Maybe<Scalars['String']['output']>;
  CinematicRepeatableCompleted?: Maybe<Scalars['String']['output']>;
  CinematicRepeatableCompletedLeadin?: Maybe<Scalars['Float']['output']>;
  CinematicRepeatableLeadin?: Maybe<Scalars['Float']['output']>;
  IconID?: Maybe<Icons>;
  accept_chat_bubble_de_DE?: Maybe<Scalars['String']['output']>;
  accept_chat_bubble_en_GB?: Maybe<Scalars['String']['output']>;
  accept_chat_bubble_en_US?: Maybe<Scalars['String']['output']>;
  accept_chat_bubble_loc?: Maybe<Scalars['String']['output']>;
  chat_state_1_de_DE?: Maybe<Scalars['String']['output']>;
  chat_state_1_en_GB?: Maybe<Scalars['String']['output']>;
  chat_state_1_en_US?: Maybe<Scalars['String']['output']>;
  chat_state_1_loc?: Maybe<Scalars['String']['output']>;
  chat_state_2_de_DE?: Maybe<Scalars['String']['output']>;
  chat_state_2_en_GB?: Maybe<Scalars['String']['output']>;
  chat_state_2_en_US?: Maybe<Scalars['String']['output']>;
  chat_state_2_loc?: Maybe<Scalars['String']['output']>;
  chat_state_3_de_DE?: Maybe<Scalars['String']['output']>;
  chat_state_3_en_GB?: Maybe<Scalars['String']['output']>;
  chat_state_3_en_US?: Maybe<Scalars['String']['output']>;
  chat_state_3_loc?: Maybe<Scalars['String']['output']>;
  chat_state_3_turnin_de_DE?: Maybe<Scalars['String']['output']>;
  chat_state_3_turnin_en_GB?: Maybe<Scalars['String']['output']>;
  chat_state_3_turnin_en_US?: Maybe<Scalars['String']['output']>;
  chat_state_3_turnin_loc?: Maybe<Scalars['String']['output']>;
  chat_state_4_de_DE?: Maybe<Scalars['String']['output']>;
  chat_state_4_en_GB?: Maybe<Scalars['String']['output']>;
  chat_state_4_en_US?: Maybe<Scalars['String']['output']>;
  chat_state_4_loc?: Maybe<Scalars['String']['output']>;
  chat_state_4_turnin_de_DE?: Maybe<Scalars['String']['output']>;
  chat_state_4_turnin_en_GB?: Maybe<Scalars['String']['output']>;
  chat_state_4_turnin_en_US?: Maybe<Scalars['String']['output']>;
  chat_state_4_turnin_loc?: Maybe<Scalars['String']['output']>;
  completion_succeed_tip_de_DE?: Maybe<Scalars['String']['output']>;
  completion_succeed_tip_en_GB?: Maybe<Scalars['String']['output']>;
  completion_succeed_tip_en_US?: Maybe<Scalars['String']['output']>;
  completion_succeed_tip_loc?: Maybe<Scalars['String']['output']>;
  description_de_DE?: Maybe<Scalars['String']['output']>;
  description_en_GB?: Maybe<Scalars['String']['output']>;
  description_en_US?: Maybe<Scalars['String']['output']>;
  description_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Missions>;
  in_progress_de_DE?: Maybe<Scalars['String']['output']>;
  in_progress_en_GB?: Maybe<Scalars['String']['output']>;
  in_progress_en_US?: Maybe<Scalars['String']['output']>;
  in_progress_loc?: Maybe<Scalars['String']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  missionIcon?: Maybe<Scalars['String']['output']>;
  offerNPCIcon?: Maybe<Scalars['String']['output']>;
  offer_de_DE?: Maybe<Scalars['String']['output']>;
  offer_en_GB?: Maybe<Scalars['String']['output']>;
  offer_en_US?: Maybe<Scalars['String']['output']>;
  offer_loc?: Maybe<Scalars['String']['output']>;
  offer_repeatable_de_DE?: Maybe<Scalars['String']['output']>;
  offer_repeatable_en_GB?: Maybe<Scalars['String']['output']>;
  offer_repeatable_en_US?: Maybe<Scalars['String']['output']>;
  offer_repeatable_loc?: Maybe<Scalars['String']['output']>;
  onclick_anim?: Maybe<Scalars['String']['output']>;
  ready_to_complete_de_DE?: Maybe<Scalars['String']['output']>;
  ready_to_complete_en_GB?: Maybe<Scalars['String']['output']>;
  ready_to_complete_en_US?: Maybe<Scalars['String']['output']>;
  ready_to_complete_loc?: Maybe<Scalars['String']['output']>;
  state_1_anim?: Maybe<Scalars['String']['output']>;
  state_2_anim?: Maybe<Scalars['String']['output']>;
  state_3_anim?: Maybe<Scalars['String']['output']>;
  state_3_turnin_anim?: Maybe<Scalars['String']['output']>;
  state_4_anim?: Maybe<Scalars['String']['output']>;
  state_4_turnin_anim?: Maybe<Scalars['String']['output']>;
  story_icon?: Maybe<Scalars['String']['output']>;
  turnInIconID?: Maybe<Icons>;
};

export type Missions = {
  __typename?: 'Missions';
  CollectibleComponent: Array<CollectibleComponent>;
  CollectibleComponent_requirement_mission: Array<CollectibleComponent>;
  HUDStates?: Maybe<Scalars['String']['output']>;
  LegoScore?: Maybe<Scalars['Int']['output']>;
  MissionEmail: Array<MissionEmail>;
  MissionEmail_missionID: Array<MissionEmail>;
  MissionNPCComponent: Array<MissionNpcComponent>;
  MissionNPCComponent_missionID: Array<MissionNpcComponent>;
  MissionPrereqs_mission: Array<MissionPrereqs>;
  MissionPrereqs_prereqMission: Array<MissionPrereqs>;
  MissionTaskMissions: Array<MissionTaskMissions>;
  MissionTaskMissions_mission: Array<MissionTaskMissions>;
  MissionTasks: Array<MissionTasks>;
  MissionTasks_id: Array<MissionTasks>;
  MissionText: Array<MissionText>;
  MissionText_id: Array<MissionText>;
  UIPrereqID?: Maybe<Scalars['Int']['output']>;
  UISortOrder?: Maybe<Scalars['Int']['output']>;
  cooldownTime?: Maybe<Scalars['Int']['output']>;
  defined_subtype?: Maybe<Scalars['String']['output']>;
  defined_type?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  inMOTD?: Maybe<Scalars['Int']['output']>;
  isChoiceReward?: Maybe<Scalars['Int']['output']>;
  isMission?: Maybe<Scalars['Int']['output']>;
  isRandom?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  missionIconID?: Maybe<Icons>;
  name_de_DE?: Maybe<Scalars['String']['output']>;
  name_en_GB?: Maybe<Scalars['String']['output']>;
  name_en_US?: Maybe<Scalars['String']['output']>;
  name_loc?: Maybe<Scalars['String']['output']>;
  offer_objectID?: Maybe<Objects>;
  prereqMissionID?: Maybe<Scalars['String']['output']>;
  randomPool?: Maybe<Scalars['String']['output']>;
  repeatable?: Maybe<Scalars['Int']['output']>;
  reward_bankinventory?: Maybe<Scalars['Int']['output']>;
  reward_currency?: Maybe<Scalars['Int']['output']>;
  reward_currency_repeatable?: Maybe<Scalars['Int']['output']>;
  reward_emote?: Maybe<Emotes>;
  reward_emote2?: Maybe<Emotes>;
  reward_emote3?: Maybe<Emotes>;
  reward_emote4?: Maybe<Emotes>;
  reward_item1?: Maybe<Objects>;
  reward_item1_count?: Maybe<Scalars['Int']['output']>;
  reward_item1_repeat_count?: Maybe<Scalars['Int']['output']>;
  reward_item1_repeatable?: Maybe<Objects>;
  reward_item2?: Maybe<Objects>;
  reward_item2_count?: Maybe<Scalars['Int']['output']>;
  reward_item2_repeat_count?: Maybe<Scalars['Int']['output']>;
  reward_item2_repeatable?: Maybe<Objects>;
  reward_item3?: Maybe<Objects>;
  reward_item3_count?: Maybe<Scalars['Int']['output']>;
  reward_item3_repeat_count?: Maybe<Scalars['Int']['output']>;
  reward_item3_repeatable?: Maybe<Objects>;
  reward_item4?: Maybe<Objects>;
  reward_item4_count?: Maybe<Scalars['Int']['output']>;
  reward_item4_repeat_count?: Maybe<Scalars['Int']['output']>;
  reward_item4_repeatable?: Maybe<Objects>;
  reward_maxhealth?: Maybe<Scalars['Int']['output']>;
  reward_maximagination?: Maybe<Scalars['Int']['output']>;
  reward_maxinventory?: Maybe<Scalars['Int']['output']>;
  reward_maxmodel?: Maybe<Scalars['Int']['output']>;
  reward_maxwallet?: Maybe<Scalars['Int']['output']>;
  reward_maxwidget?: Maybe<Scalars['Int']['output']>;
  reward_reputation?: Maybe<Scalars['Int']['output']>;
  target_objectID?: Maybe<Objects>;
  time_limit?: Maybe<Scalars['Int']['output']>;
};

export type ModelBehavior = {
  __typename?: 'ModelBehavior';
  definitionXMLfilename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ModularBuildComponent = {
  __typename?: 'ModularBuildComponent';
  AudioEventGUID_Complete?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_Present?: Maybe<Scalars['String']['output']>;
  AudioEventGUID_Snap?: Maybe<Scalars['String']['output']>;
  buildType?: Maybe<Scalars['Int']['output']>;
  createdLOT?: Maybe<Objects>;
  createdPhysicsID?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  xml?: Maybe<Scalars['String']['output']>;
};

export type ModuleComponent = {
  __typename?: 'ModuleComponent';
  assembledEffectID?: Maybe<Scalars['Int']['output']>;
  buildType?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  partCode?: Maybe<Scalars['Int']['output']>;
  primarySoundGUID?: Maybe<Scalars['String']['output']>;
  xml?: Maybe<Scalars['String']['output']>;
};

export type MotionFx = {
  __typename?: 'MotionFX';
  addVelocity?: Maybe<Scalars['Float']['output']>;
  destGroupName?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  endScale?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slamVelocity?: Maybe<Scalars['Float']['output']>;
  startScale?: Maybe<Scalars['Float']['output']>;
  typeID?: Maybe<Scalars['Int']['output']>;
  velocity?: Maybe<Scalars['Float']['output']>;
};

export type MovementAiComponent = {
  __typename?: 'MovementAIComponent';
  MovementType?: Maybe<Scalars['String']['output']>;
  WanderChance?: Maybe<Scalars['Float']['output']>;
  WanderDelayMax?: Maybe<Scalars['Float']['output']>;
  WanderDelayMin?: Maybe<Scalars['Float']['output']>;
  WanderRadius?: Maybe<Scalars['Float']['output']>;
  WanderSpeed?: Maybe<Scalars['Float']['output']>;
  attachedPath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type MovingPlatforms = {
  __typename?: 'MovingPlatforms';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  platformIsSimpleMover?: Maybe<Scalars['Int']['output']>;
  platformMoveTime?: Maybe<Scalars['Float']['output']>;
  platformMoveX?: Maybe<Scalars['Float']['output']>;
  platformMoveY?: Maybe<Scalars['Float']['output']>;
  platformMoveZ?: Maybe<Scalars['Float']['output']>;
  platformStartAtEnd?: Maybe<Scalars['Int']['output']>;
};

export type NpcIcons = {
  __typename?: 'NpcIcons';
  LOT?: Maybe<Objects>;
  Texture?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  compositeConnectionNode?: Maybe<Scalars['String']['output']>;
  compositeHorizOffset?: Maybe<Scalars['Float']['output']>;
  compositeIconTexture?: Maybe<Scalars['String']['output']>;
  compositeLOTMultiMission?: Maybe<Objects>;
  compositeLOTMultiMissionVentor?: Maybe<Objects>;
  compositeScale?: Maybe<Scalars['Float']['output']>;
  compositeVertOffset?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isClickable?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Float']['output']>;
  rotateToFace?: Maybe<Scalars['Int']['output']>;
  scale?: Maybe<Scalars['Float']['output']>;
};

export type ObjectBehaviorXref = {
  __typename?: 'ObjectBehaviorXREF';
  LOT?: Maybe<Scalars['Int']['output']>;
  behaviorID1?: Maybe<Scalars['Int']['output']>;
  behaviorID2?: Maybe<Scalars['Int']['output']>;
  behaviorID3?: Maybe<Scalars['Int']['output']>;
  behaviorID4?: Maybe<Scalars['Int']['output']>;
  behaviorID5?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

export type ObjectBehaviors = {
  __typename?: 'ObjectBehaviors';
  BehaviorID?: Maybe<Scalars['Int']['output']>;
  xmldata?: Maybe<Scalars['String']['output']>;
};

export type ObjectSkills = {
  __typename?: 'ObjectSkills';
  AICombatWeight?: Maybe<Scalars['Int']['output']>;
  castOnType?: Maybe<Scalars['Int']['output']>;
  objectTemplate?: Maybe<Objects>;
  skillID?: Maybe<SkillBehavior>;
};

export type Objects = {
  __typename?: 'Objects';
  ActivityRewards: Array<ActivityRewards>;
  ActivityRewards_objectTemplate: Array<ActivityRewards>;
  BrickIDTable: Array<BrickIdTable>;
  BrickIDTable_NDObjectID: Array<BrickIdTable>;
  CelebrationParameters_backgroundObject: Array<CelebrationParameters>;
  CelebrationParameters_cameraPathLOT: Array<CelebrationParameters>;
  CurrencyDenominations: Array<CurrencyDenominations>;
  CurrencyDenominations_objectid: Array<CurrencyDenominations>;
  HQ_valid?: Maybe<Scalars['Int']['output']>;
  InventoryComponent: Array<InventoryComponent>;
  InventoryComponent_itemid: Array<InventoryComponent>;
  ItemComponent_commendationLOT: Array<ItemComponent>;
  ItemComponent_currencyLOT: Array<ItemComponent>;
  JetPackPadComponent_lotBlocker: Array<JetPackPadComponent>;
  JetPackPadComponent_lotWarningVolume: Array<JetPackPadComponent>;
  LUPExhibitModelData: Array<LupExhibitModelData>;
  LUPExhibitModelData_LOT: Array<LupExhibitModelData>;
  LootTable: Array<LootTable>;
  LootTable_itemid: Array<LootTable>;
  MissionEmail: Array<MissionEmail>;
  MissionEmail_attachmentLOT: Array<MissionEmail>;
  MissionTaskObjects: Array<MissionTaskObjects>;
  MissionTaskObjects_object: Array<MissionTaskObjects>;
  Missions_offer_objectID: Array<Missions>;
  Missions_reward_item1: Array<Missions>;
  Missions_reward_item1_repeatable: Array<Missions>;
  Missions_reward_item2: Array<Missions>;
  Missions_reward_item2_repeatable: Array<Missions>;
  Missions_reward_item3: Array<Missions>;
  Missions_reward_item3_repeatable: Array<Missions>;
  Missions_reward_item4: Array<Missions>;
  Missions_reward_item4_repeatable: Array<Missions>;
  Missions_target_objectID: Array<Missions>;
  ModularBuildComponent: Array<ModularBuildComponent>;
  ModularBuildComponent_createdLOT: Array<ModularBuildComponent>;
  NpcIcons_LOT: Array<NpcIcons>;
  NpcIcons_compositeLOTMultiMission: Array<NpcIcons>;
  NpcIcons_compositeLOTMultiMissionVentor: Array<NpcIcons>;
  ObjectSkills: Array<ObjectSkills>;
  ObjectSkills_objectTemplate: Array<ObjectSkills>;
  RebuildSections: Array<RebuildSections>;
  RebuildSections_objectID: Array<RebuildSections>;
  RewardCodes: Array<RewardCodes>;
  RewardCodes_attachmentLOT: Array<RewardCodes>;
  TamingBuildPuzzles_NPCLot: Array<TamingBuildPuzzles>;
  TamingBuildPuzzles_PuzzleModelLot: Array<TamingBuildPuzzles>;
  WhatsCoolItemSpotlight: Array<WhatsCoolItemSpotlight>;
  WhatsCoolItemSpotlight_itemID: Array<WhatsCoolItemSpotlight>;
  _internalNotes?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  description_de_DE?: Maybe<Scalars['String']['output']>;
  description_en_GB?: Maybe<Scalars['String']['output']>;
  description_en_US?: Maybe<Scalars['String']['output']>;
  description_loc?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  interactionDistance?: Maybe<Scalars['Float']['output']>;
  itemComponent?: Maybe<ItemComponent>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  mapIcon: Array<MapIcon>;
  mapIcon_LOT: Array<MapIcon>;
  name?: Maybe<Scalars['String']['output']>;
  name_de_DE?: Maybe<Scalars['String']['output']>;
  name_en_GB?: Maybe<Scalars['String']['output']>;
  name_en_US?: Maybe<Scalars['String']['output']>;
  name_loc?: Maybe<Scalars['String']['output']>;
  nametag?: Maybe<Scalars['Int']['output']>;
  npcTemplateID?: Maybe<Scalars['Int']['output']>;
  placeable?: Maybe<Scalars['Int']['output']>;
  renderComponent?: Maybe<RenderComponent>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PackageComponent = {
  __typename?: 'PackageComponent';
  LootMatrixIndex?: Maybe<LootMatrix>;
  id?: Maybe<Scalars['Int']['output']>;
  packageType?: Maybe<Scalars['Int']['output']>;
};

export type PetAbilities = {
  __typename?: 'PetAbilities';
  AbilityName?: Maybe<Scalars['String']['output']>;
  DisplayName_de_DE?: Maybe<Scalars['String']['output']>;
  DisplayName_en_GB?: Maybe<Scalars['String']['output']>;
  DisplayName_en_US?: Maybe<Scalars['String']['output']>;
  DisplayName_loc?: Maybe<Scalars['String']['output']>;
  ImaginationCost?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
};

export type PetComponent = {
  __typename?: 'PetComponent';
  AudioMetaEventSet?: Maybe<Scalars['String']['output']>;
  buffIDs?: Maybe<Scalars['String']['output']>;
  elementType?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  idleTimeMax?: Maybe<Scalars['Float']['output']>;
  idleTimeMin?: Maybe<Scalars['Float']['output']>;
  imaginationDrainRate?: Maybe<Scalars['Float']['output']>;
  maxTameUpdateTime?: Maybe<Scalars['Float']['output']>;
  minTameUpdateTime?: Maybe<Scalars['Float']['output']>;
  percentTameChance?: Maybe<Scalars['Float']['output']>;
  petForm?: Maybe<Scalars['Int']['output']>;
  runSpeed?: Maybe<Scalars['Float']['output']>;
  sprintSpeed?: Maybe<Scalars['Float']['output']>;
  tamability?: Maybe<Scalars['Float']['output']>;
  walkSpeed?: Maybe<Scalars['Float']['output']>;
};

export type PetNestComponent = {
  __typename?: 'PetNestComponent';
  ElementalType?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type PhysicsComponent = {
  __typename?: 'PhysicsComponent';
  airSpeed?: Maybe<Scalars['Float']['output']>;
  boundaryAsset?: Maybe<Scalars['String']['output']>;
  collisionGroup?: Maybe<Scalars['Int']['output']>;
  doublejump?: Maybe<Scalars['Float']['output']>;
  friction?: Maybe<Scalars['Float']['output']>;
  gravityVolumeAsset?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  jump?: Maybe<Scalars['Float']['output']>;
  jumpAirSpeed?: Maybe<Scalars['Float']['output']>;
  pcShapeType?: Maybe<Scalars['Int']['output']>;
  physics_asset?: Maybe<Scalars['String']['output']>;
  playerHeight?: Maybe<Scalars['Float']['output']>;
  playerRadius?: Maybe<Scalars['Float']['output']>;
  rotSpeed?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  static?: Maybe<Scalars['Float']['output']>;
};

export type PlayerFlags = {
  __typename?: 'PlayerFlags';
  OnlySetByServer?: Maybe<Scalars['Int']['output']>;
  SessionOnly?: Maybe<Scalars['Int']['output']>;
  SessionZoneOnly?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type PlayerStatistics = {
  __typename?: 'PlayerStatistics';
  gate_version?: Maybe<FeatureGating>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  statID?: Maybe<Scalars['Int']['output']>;
  statStr_de_DE?: Maybe<Scalars['String']['output']>;
  statStr_en_GB?: Maybe<Scalars['String']['output']>;
  statStr_en_US?: Maybe<Scalars['String']['output']>;
  statStr_loc?: Maybe<Scalars['String']['output']>;
};

export type PossessableComponent = {
  __typename?: 'PossessableComponent';
  attachOffsetFwd?: Maybe<Scalars['Float']['output']>;
  attachOffsetRight?: Maybe<Scalars['Float']['output']>;
  billboardOffsetUp?: Maybe<Scalars['Float']['output']>;
  controlSchemeID?: Maybe<ControlSchemes>;
  depossessOnHit?: Maybe<Scalars['Int']['output']>;
  hitStunTime?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  minifigAttachAnimation?: Maybe<Scalars['String']['output']>;
  minifigAttachPoint?: Maybe<Scalars['String']['output']>;
  minifigDetachAnimation?: Maybe<Scalars['String']['output']>;
  mountAttachAnimation?: Maybe<Scalars['String']['output']>;
  mountDetachAnimation?: Maybe<Scalars['String']['output']>;
  possessionType?: Maybe<Scalars['Int']['output']>;
  skillSet?: Maybe<Scalars['Int']['output']>;
  wantBillboard?: Maybe<Scalars['Int']['output']>;
};

export type Preconditions = {
  __typename?: 'Preconditions';
  FailureReason_de_DE?: Maybe<Scalars['String']['output']>;
  FailureReason_en_GB?: Maybe<Scalars['String']['output']>;
  FailureReason_en_US?: Maybe<Scalars['String']['output']>;
  FailureReason_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  iconID?: Maybe<Icons>;
  id?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  targetCount?: Maybe<Scalars['Int']['output']>;
  targetGroup?: Maybe<Scalars['String']['output']>;
  targetLOT?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  validContexts?: Maybe<Scalars['Int']['output']>;
};

export type PropertyEntranceComponent = {
  __typename?: 'PropertyEntranceComponent';
  groupType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isOnProperty?: Maybe<Scalars['Int']['output']>;
  mapID?: Maybe<ZoneTable>;
  propertyName?: Maybe<Scalars['String']['output']>;
};

export type PropertyTemplate = {
  __typename?: 'PropertyTemplate';
  achievementRequired?: Maybe<Scalars['Int']['output']>;
  cloneLimit?: Maybe<Scalars['Int']['output']>;
  description_de_DE?: Maybe<Scalars['String']['output']>;
  description_en_GB?: Maybe<Scalars['String']['output']>;
  description_en_US?: Maybe<Scalars['String']['output']>;
  description_loc?: Maybe<Scalars['String']['output']>;
  durationType?: Maybe<Scalars['Int']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  mapID?: Maybe<ZoneTable>;
  maxBuildHeight?: Maybe<Scalars['Float']['output']>;
  minimumPrice?: Maybe<Scalars['Int']['output']>;
  name_de_DE?: Maybe<Scalars['String']['output']>;
  name_en_GB?: Maybe<Scalars['String']['output']>;
  name_en_US?: Maybe<Scalars['String']['output']>;
  name_loc?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  rentDuration?: Maybe<Scalars['Int']['output']>;
  reputationPerMinute?: Maybe<Scalars['Int']['output']>;
  sizecode?: Maybe<Scalars['Int']['output']>;
  spawnName?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  vendorMapID?: Maybe<ZoneTable>;
  zoneX?: Maybe<Scalars['Float']['output']>;
  zoneY?: Maybe<Scalars['Float']['output']>;
  zoneZ?: Maybe<Scalars['Float']['output']>;
};

export type ProximityMonitorComponent = {
  __typename?: 'ProximityMonitorComponent';
  LoadOnClient?: Maybe<Scalars['Int']['output']>;
  LoadOnServer?: Maybe<Scalars['Int']['output']>;
  Proximities?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ProximityTypes = {
  __typename?: 'ProximityTypes';
  CollisionGroup?: Maybe<Scalars['Int']['output']>;
  IconID?: Maybe<Icons>;
  LoadOnClient?: Maybe<Scalars['Int']['output']>;
  LoadOnServer?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PassiveChecks?: Maybe<Scalars['Int']['output']>;
  Radius?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  AICombatRoles?: Maybe<Array<Maybe<AiCombatRoles>>>;
  AccessoryDefaultLoc?: Maybe<Array<Maybe<AccessoryDefaultLoc>>>;
  Activities?: Maybe<Array<Maybe<Activities>>>;
  ActivityRewards?: Maybe<Array<Maybe<ActivityRewards>>>;
  ActivityText?: Maybe<Array<Maybe<ActivityText>>>;
  AnimationIndex?: Maybe<Array<Maybe<AnimationIndex>>>;
  Animations?: Maybe<Array<Maybe<Animations>>>;
  BaseCombatAIComponent?: Maybe<Array<Maybe<BaseCombatAiComponent>>>;
  BehaviorEffect?: Maybe<Array<Maybe<BehaviorEffect>>>;
  BehaviorParameter?: Maybe<Array<Maybe<BehaviorParameter>>>;
  BehaviorTemplate?: Maybe<Array<Maybe<BehaviorTemplate>>>;
  BehaviorTemplateName?: Maybe<Array<Maybe<BehaviorTemplateName>>>;
  Blueprints?: Maybe<Array<Maybe<Blueprints>>>;
  BrickColors?: Maybe<Array<Maybe<BrickColors>>>;
  BrickIDTable?: Maybe<Array<Maybe<BrickIdTable>>>;
  BuffDefinitions?: Maybe<Array<Maybe<BuffDefinitions>>>;
  BuffParameters?: Maybe<Array<Maybe<BuffParameters>>>;
  Camera?: Maybe<Array<Maybe<Camera>>>;
  CelebrationParameters?: Maybe<Array<Maybe<CelebrationParameters>>>;
  ChoiceBuildComponent?: Maybe<Array<Maybe<ChoiceBuildComponent>>>;
  CollectibleComponent?: Maybe<Array<Maybe<CollectibleComponent>>>;
  ComponentsRegistry?: Maybe<Array<Maybe<ComponentsRegistry>>>;
  ControlSchemes?: Maybe<Array<Maybe<ControlSchemes>>>;
  CurrencyDenominations?: Maybe<Array<Maybe<CurrencyDenominations>>>;
  CurrencyTable?: Maybe<Array<Maybe<CurrencyTable>>>;
  DBExclude?: Maybe<Array<Maybe<DbExclude>>>;
  DeletionRestrictions?: Maybe<Array<Maybe<DeletionRestrictions>>>;
  DestructibleComponent?: Maybe<Array<Maybe<DestructibleComponent>>>;
  DevModelBehaviors?: Maybe<Array<Maybe<DevModelBehaviors>>>;
  Emotes?: Maybe<Array<Maybe<Emotes>>>;
  EventGating?: Maybe<Array<Maybe<EventGating>>>;
  ExhibitComponent?: Maybe<Array<Maybe<ExhibitComponent>>>;
  Factions?: Maybe<Array<Maybe<Factions>>>;
  FeatureGating?: Maybe<Array<Maybe<FeatureGating>>>;
  FlairTable?: Maybe<Array<Maybe<FlairTable>>>;
  Icons?: Maybe<Array<Maybe<Icons>>>;
  InventoryComponent?: Maybe<Array<Maybe<InventoryComponent>>>;
  ItemComponent?: Maybe<Array<Maybe<ItemComponent>>>;
  ItemEggData?: Maybe<Array<Maybe<ItemEggData>>>;
  ItemFoodData?: Maybe<Array<Maybe<ItemFoodData>>>;
  ItemSetSkills?: Maybe<Array<Maybe<ItemSetSkills>>>;
  ItemSets?: Maybe<Array<Maybe<ItemSets>>>;
  JetPackPadComponent?: Maybe<Array<Maybe<JetPackPadComponent>>>;
  LUPExhibitComponent?: Maybe<Array<Maybe<LupExhibitComponent>>>;
  LUPExhibitModelData?: Maybe<Array<Maybe<LupExhibitModelData>>>;
  LUPZoneIDs?: Maybe<Array<Maybe<LupZoneIDs>>>;
  LanguageType?: Maybe<Array<Maybe<LanguageType>>>;
  LevelProgressionLookup?: Maybe<Array<Maybe<LevelProgressionLookup>>>;
  LootMatrix?: Maybe<Array<Maybe<LootMatrix>>>;
  LootMatrixIndex?: Maybe<Array<Maybe<LootMatrixIndex>>>;
  LootTable?: Maybe<Array<Maybe<LootTable>>>;
  LootTableIndex?: Maybe<Array<Maybe<LootTableIndex>>>;
  MinifigComponent?: Maybe<Array<Maybe<MinifigComponent>>>;
  MinifigDecals_Eyebrows?: Maybe<Array<Maybe<MinifigDecals_Eyebrows>>>;
  MinifigDecals_Eyes?: Maybe<Array<Maybe<MinifigDecals_Eyes>>>;
  MinifigDecals_Legs?: Maybe<Array<Maybe<MinifigDecals_Legs>>>;
  MinifigDecals_Mouths?: Maybe<Array<Maybe<MinifigDecals_Mouths>>>;
  MinifigDecals_Torsos?: Maybe<Array<Maybe<MinifigDecals_Torsos>>>;
  MissionEmail?: Maybe<Array<Maybe<MissionEmail>>>;
  MissionNPCComponent?: Maybe<Array<Maybe<MissionNpcComponent>>>;
  MissionPrereqs?: Maybe<Array<Maybe<MissionPrereqs>>>;
  MissionTaskMissions?: Maybe<Array<Maybe<MissionTaskMissions>>>;
  MissionTaskObjects?: Maybe<Array<Maybe<MissionTaskObjects>>>;
  MissionTasks?: Maybe<Array<Maybe<MissionTasks>>>;
  MissionText?: Maybe<Array<Maybe<MissionText>>>;
  Missions?: Maybe<Array<Maybe<Missions>>>;
  ModelBehavior?: Maybe<Array<Maybe<ModelBehavior>>>;
  ModularBuildComponent?: Maybe<Array<Maybe<ModularBuildComponent>>>;
  ModuleComponent?: Maybe<Array<Maybe<ModuleComponent>>>;
  MotionFX?: Maybe<Array<Maybe<MotionFx>>>;
  MovementAIComponent?: Maybe<Array<Maybe<MovementAiComponent>>>;
  MovingPlatforms?: Maybe<Array<Maybe<MovingPlatforms>>>;
  NpcIcons?: Maybe<Array<Maybe<NpcIcons>>>;
  ObjectBehaviorXREF?: Maybe<Array<Maybe<ObjectBehaviorXref>>>;
  ObjectBehaviors?: Maybe<Array<Maybe<ObjectBehaviors>>>;
  ObjectSkills?: Maybe<Array<Maybe<ObjectSkills>>>;
  Objects?: Maybe<Array<Maybe<Objects>>>;
  PackageComponent?: Maybe<Array<Maybe<PackageComponent>>>;
  PetAbilities?: Maybe<Array<Maybe<PetAbilities>>>;
  PetComponent?: Maybe<Array<Maybe<PetComponent>>>;
  PetNestComponent?: Maybe<Array<Maybe<PetNestComponent>>>;
  PhysicsComponent?: Maybe<Array<Maybe<PhysicsComponent>>>;
  PlayerFlags?: Maybe<Array<Maybe<PlayerFlags>>>;
  PlayerStatistics?: Maybe<Array<Maybe<PlayerStatistics>>>;
  PossessableComponent?: Maybe<Array<Maybe<PossessableComponent>>>;
  Preconditions?: Maybe<Array<Maybe<Preconditions>>>;
  PropertyEntranceComponent?: Maybe<Array<Maybe<PropertyEntranceComponent>>>;
  PropertyTemplate?: Maybe<Array<Maybe<PropertyTemplate>>>;
  ProximityMonitorComponent?: Maybe<Array<Maybe<ProximityMonitorComponent>>>;
  ProximityTypes?: Maybe<Array<Maybe<ProximityTypes>>>;
  RacingModuleComponent?: Maybe<Array<Maybe<RacingModuleComponent>>>;
  RailActivatorComponent?: Maybe<Array<Maybe<RailActivatorComponent>>>;
  RarityTable?: Maybe<Array<Maybe<RarityTable>>>;
  RarityTableIndex?: Maybe<Array<Maybe<RarityTableIndex>>>;
  RebuildComponent?: Maybe<Array<Maybe<RebuildComponent>>>;
  RebuildSections?: Maybe<Array<Maybe<RebuildSections>>>;
  Release_Version?: Maybe<Array<Maybe<Release_Version>>>;
  RenderComponent?: Maybe<Array<Maybe<RenderComponent>>>;
  RenderComponentFlash?: Maybe<Array<Maybe<RenderComponentFlash>>>;
  RenderComponentWrapper?: Maybe<Array<Maybe<RenderComponentWrapper>>>;
  RenderIconAssets?: Maybe<Array<Maybe<RenderIconAssets>>>;
  ReputationRewards?: Maybe<Array<Maybe<ReputationRewards>>>;
  RewardCodes?: Maybe<Array<Maybe<RewardCodes>>>;
  Rewards?: Maybe<Array<Maybe<Rewards>>>;
  RocketLaunchpadControlComponent?: Maybe<Array<Maybe<RocketLaunchpadControlComponent>>>;
  SceneTable?: Maybe<Array<Maybe<SceneTable>>>;
  ScriptComponent?: Maybe<Array<Maybe<ScriptComponent>>>;
  SkillBehavior?: Maybe<Array<Maybe<SkillBehavior>>>;
  SmashableChain?: Maybe<Array<Maybe<SmashableChain>>>;
  SmashableChainIndex?: Maybe<Array<Maybe<SmashableChainIndex>>>;
  SmashableComponent?: Maybe<Array<Maybe<SmashableComponent>>>;
  SmashableElements?: Maybe<Array<Maybe<SmashableElements>>>;
  SpeedchatMenu?: Maybe<Array<Maybe<SpeedchatMenu>>>;
  SubscriptionPricing?: Maybe<Array<Maybe<SubscriptionPricing>>>;
  SurfaceType?: Maybe<Array<Maybe<SurfaceType>>>;
  TamingBuildPuzzles?: Maybe<Array<Maybe<TamingBuildPuzzles>>>;
  TextDescription?: Maybe<Array<Maybe<TextDescription>>>;
  TextLanguage?: Maybe<Array<Maybe<TextLanguage>>>;
  TrailEffects?: Maybe<Array<Maybe<TrailEffects>>>;
  UGBehaviorSounds?: Maybe<Array<Maybe<UgBehaviorSounds>>>;
  VehiclePhysics?: Maybe<Array<Maybe<VehiclePhysics>>>;
  VehicleStatMap?: Maybe<Array<Maybe<VehicleStatMap>>>;
  VendorComponent?: Maybe<Array<Maybe<VendorComponent>>>;
  WhatsCoolItemSpotlight?: Maybe<Array<Maybe<WhatsCoolItemSpotlight>>>;
  WhatsCoolNewsAndTips?: Maybe<Array<Maybe<WhatsCoolNewsAndTips>>>;
  WorldConfig?: Maybe<Array<Maybe<WorldConfig>>>;
  ZoneLoadingTips?: Maybe<Array<Maybe<ZoneLoadingTips>>>;
  ZoneSummary?: Maybe<Array<Maybe<ZoneSummary>>>;
  ZoneTable?: Maybe<Array<Maybe<ZoneTable>>>;
  brickAttributes?: Maybe<Array<Maybe<BrickAttributes>>>;
  dtproperties?: Maybe<Array<Maybe<Dtproperties>>>;
  mapAnimationPriorities?: Maybe<Array<Maybe<MapAnimationPriorities>>>;
  mapAssetType?: Maybe<Array<Maybe<MapAssetType>>>;
  mapIcon?: Maybe<Array<Maybe<MapIcon>>>;
  mapItemTypes?: Maybe<Array<Maybe<MapItemTypes>>>;
  mapRenderEffects?: Maybe<Array<Maybe<MapRenderEffects>>>;
  mapShaders?: Maybe<Array<Maybe<MapShaders>>>;
  mapTextureResource?: Maybe<Array<Maybe<MapTextureResource>>>;
  map_BlueprintCategory?: Maybe<Array<Maybe<Map_BlueprintCategory>>>;
  sysdiagrams?: Maybe<Array<Maybe<Sysdiagrams>>>;
};


export type QueryAiCombatRolesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  preferredRole?: InputMaybe<Scalars['Int']['input']>;
  specificMaxRange?: InputMaybe<Scalars['Float']['input']>;
  specificMinRange?: InputMaybe<Scalars['Float']['input']>;
  specifiedMaxRangeNOUSE?: InputMaybe<Scalars['Float']['input']>;
  specifiedMinRangeNOUSE?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryAccessoryDefaultLocArgs = {
  Description?: InputMaybe<Scalars['String']['input']>;
  GroupID?: InputMaybe<Scalars['Int']['input']>;
  Pos_X?: InputMaybe<Scalars['Float']['input']>;
  Pos_Y?: InputMaybe<Scalars['Float']['input']>;
  Pos_Z?: InputMaybe<Scalars['Float']['input']>;
  Rot_X?: InputMaybe<Scalars['Float']['input']>;
  Rot_Y?: InputMaybe<Scalars['Float']['input']>;
  Rot_Z?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryActivitiesArgs = {
  ActivityID?: InputMaybe<Scalars['Int']['input']>;
  ActivityName_de_DE?: InputMaybe<Scalars['String']['input']>;
  ActivityName_en_GB?: InputMaybe<Scalars['String']['input']>;
  ActivityName_en_US?: InputMaybe<Scalars['String']['input']>;
  ActivityName_loc?: InputMaybe<Scalars['String']['input']>;
  ActivityText?: InputMaybe<Array<ActivityText>>;
  ActivityText_activityID?: InputMaybe<Array<ActivityText>>;
  CommunityActivityFlagID?: InputMaybe<Scalars['Int']['input']>;
  RebuildComponent?: InputMaybe<Array<RebuildComponent>>;
  RebuildComponent_activityID?: InputMaybe<Array<RebuildComponent>>;
  gate_version?: InputMaybe<FeatureGating>;
  instanceMapID?: InputMaybe<ZoneTable>;
  leaderboardType?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  maxTeamSize?: InputMaybe<Scalars['Int']['input']>;
  maxTeams?: InputMaybe<Scalars['Int']['input']>;
  minTeamSize?: InputMaybe<Scalars['Int']['input']>;
  minTeams?: InputMaybe<Scalars['Int']['input']>;
  noTeamLootOnDeath?: InputMaybe<Scalars['Int']['input']>;
  optionalCostCount?: InputMaybe<Scalars['Int']['input']>;
  optionalCostLOT?: InputMaybe<Scalars['Int']['input']>;
  optionalPercentage?: InputMaybe<Scalars['Float']['input']>;
  requiresUniqueData?: InputMaybe<Scalars['Int']['input']>;
  showUIRewards?: InputMaybe<Scalars['Int']['input']>;
  startDelay?: InputMaybe<Scalars['Int']['input']>;
  waitTime?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryActivityRewardsArgs = {
  ActivityRewardIndex?: InputMaybe<Scalars['Int']['input']>;
  ChallengeRating?: InputMaybe<Scalars['Int']['input']>;
  CurrencyIndex?: InputMaybe<Scalars['Int']['input']>;
  LootMatrixIndex?: InputMaybe<LootMatrix>;
  activityRating?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  objectTemplate?: InputMaybe<Objects>;
};


export type QueryActivityTextArgs = {
  activityID?: InputMaybe<Activities>;
  broadcast_subjectText_de_DE?: InputMaybe<Scalars['String']['input']>;
  broadcast_subjectText_en_GB?: InputMaybe<Scalars['String']['input']>;
  broadcast_subjectText_en_US?: InputMaybe<Scalars['String']['input']>;
  broadcast_subjectText_loc?: InputMaybe<Scalars['String']['input']>;
  broadcast_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  broadcast_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  broadcast_text_en_US?: InputMaybe<Scalars['String']['input']>;
  broadcast_text_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  hint1_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint1_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint1_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint1_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint2_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint2_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint2_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint2_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint3_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint3_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint3_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint3_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint4_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint4_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint4_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint4_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint5_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint5_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint5_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint5_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint6_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint6_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint6_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint6_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint7_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint7_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint7_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint7_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint8_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint8_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint8_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint8_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint9_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint9_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint9_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint9_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint10_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint10_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint10_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint10_text_loc?: InputMaybe<Scalars['String']['input']>;
  hint11_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  hint11_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  hint11_text_en_US?: InputMaybe<Scalars['String']['input']>;
  hint11_text_loc?: InputMaybe<Scalars['String']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  mail_subjectText_de_DE?: InputMaybe<Scalars['String']['input']>;
  mail_subjectText_en_GB?: InputMaybe<Scalars['String']['input']>;
  mail_subjectText_en_US?: InputMaybe<Scalars['String']['input']>;
  mail_subjectText_loc?: InputMaybe<Scalars['String']['input']>;
  mail_text_de_DE?: InputMaybe<Scalars['String']['input']>;
  mail_text_en_GB?: InputMaybe<Scalars['String']['input']>;
  mail_text_en_US?: InputMaybe<Scalars['String']['input']>;
  mail_text_loc?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnimationIndexArgs = {
  animationGroupID?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groupType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnimationsArgs = {
  animationGroupID?: InputMaybe<Scalars['Int']['input']>;
  animation_length?: InputMaybe<Scalars['Float']['input']>;
  animation_name?: InputMaybe<Scalars['String']['input']>;
  animation_type?: InputMaybe<Scalars['String']['input']>;
  blendTime?: InputMaybe<Scalars['Float']['input']>;
  chance_to_play?: InputMaybe<Scalars['Float']['input']>;
  face_animation_name?: InputMaybe<Scalars['String']['input']>;
  hideEquip?: InputMaybe<Scalars['Int']['input']>;
  ignoreUpperBody?: InputMaybe<Scalars['Int']['input']>;
  max_loops?: InputMaybe<Scalars['Int']['input']>;
  min_loops?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  restartable?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBaseCombatAiComponentArgs = {
  aggroRadius?: InputMaybe<Scalars['Float']['input']>;
  behaviorType?: InputMaybe<Scalars['Int']['input']>;
  combatRole?: InputMaybe<Scalars['Int']['input']>;
  combatRoundLength?: InputMaybe<Scalars['Float']['input']>;
  combatStartDelay?: InputMaybe<Scalars['Float']['input']>;
  hardTetherRadius?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ignoreMediator?: InputMaybe<Scalars['Int']['input']>;
  ignoreParent?: InputMaybe<Scalars['Int']['input']>;
  ignoreStatReset?: InputMaybe<Scalars['Int']['input']>;
  maxRoundLength?: InputMaybe<Scalars['Float']['input']>;
  minRoundLength?: InputMaybe<Scalars['Float']['input']>;
  pursuitSpeed?: InputMaybe<Scalars['Float']['input']>;
  softTetherRadius?: InputMaybe<Scalars['Float']['input']>;
  spawnTimer?: InputMaybe<Scalars['Float']['input']>;
  tetherEffectID?: InputMaybe<Scalars['Int']['input']>;
  tetherSpeed?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryBehaviorEffectArgs = {
  AudioEventGUID?: InputMaybe<Scalars['String']['input']>;
  animationName?: InputMaybe<Scalars['String']['input']>;
  attachToObject?: InputMaybe<Scalars['Int']['input']>;
  boneName?: InputMaybe<Scalars['String']['input']>;
  cameraDuration?: InputMaybe<Scalars['Float']['input']>;
  cameraEffectType?: InputMaybe<Scalars['Int']['input']>;
  cameraFrequency?: InputMaybe<Scalars['Float']['input']>;
  cameraPitch?: InputMaybe<Scalars['Float']['input']>;
  cameraRoll?: InputMaybe<Scalars['Float']['input']>;
  cameraRotFrequency?: InputMaybe<Scalars['Float']['input']>;
  cameraXAmp?: InputMaybe<Scalars['Float']['input']>;
  cameraYAmp?: InputMaybe<Scalars['Float']['input']>;
  cameraYaw?: InputMaybe<Scalars['Float']['input']>;
  cameraZAmp?: InputMaybe<Scalars['Float']['input']>;
  effectID?: InputMaybe<Scalars['Int']['input']>;
  effectName?: InputMaybe<Scalars['String']['input']>;
  effectType?: InputMaybe<Scalars['String']['input']>;
  meshDuration?: InputMaybe<Scalars['Float']['input']>;
  meshID?: InputMaybe<Scalars['Int']['input']>;
  meshLockedNode?: InputMaybe<Scalars['String']['input']>;
  motionID?: InputMaybe<Scalars['Int']['input']>;
  pcreateDuration?: InputMaybe<Scalars['Float']['input']>;
  renderDelayVal?: InputMaybe<Scalars['Float']['input']>;
  renderEffectTime?: InputMaybe<Scalars['Float']['input']>;
  renderEffectType?: InputMaybe<Scalars['Int']['input']>;
  renderEndVal?: InputMaybe<Scalars['Float']['input']>;
  renderRGBA?: InputMaybe<Scalars['String']['input']>;
  renderShaderVal?: InputMaybe<Scalars['Int']['input']>;
  renderStartVal?: InputMaybe<Scalars['Float']['input']>;
  renderValue1?: InputMaybe<Scalars['Float']['input']>;
  renderValue2?: InputMaybe<Scalars['Float']['input']>;
  renderValue3?: InputMaybe<Scalars['Float']['input']>;
  trailID?: InputMaybe<Scalars['Int']['input']>;
  useSecondary?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBehaviorParameterArgs = {
  behaviorID?: InputMaybe<Scalars['Int']['input']>;
  parameterID?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryBehaviorTemplateArgs = {
  behaviorID?: InputMaybe<Scalars['Int']['input']>;
  effectHandle?: InputMaybe<Scalars['String']['input']>;
  effectID?: InputMaybe<Scalars['Int']['input']>;
  templateID?: InputMaybe<BehaviorTemplateName>;
};


export type QueryBehaviorTemplateNameArgs = {
  BehaviorTemplate?: InputMaybe<Array<BehaviorTemplate>>;
  BehaviorTemplate_templateID?: InputMaybe<Array<BehaviorTemplate>>;
  name?: InputMaybe<Scalars['String']['input']>;
  templateID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBlueprintsArgs = {
  accountid?: InputMaybe<Scalars['Int']['input']>;
  categoryid?: InputMaybe<Scalars['Int']['input']>;
  characterid?: InputMaybe<Scalars['Int']['input']>;
  created?: InputMaybe<Scalars['Int']['input']>;
  deleted?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lxfpath?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBrickColorsArgs = {
  alpha?: InputMaybe<Scalars['Float']['input']>;
  blue?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  factoryValid?: InputMaybe<Scalars['Int']['input']>;
  green?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  legopaletteid?: InputMaybe<Scalars['Int']['input']>;
  red?: InputMaybe<Scalars['Float']['input']>;
  validCharacters?: InputMaybe<Scalars['Int']['input']>;
  validTypes?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBrickIdTableArgs = {
  LEGOBrickID?: InputMaybe<Scalars['Int']['input']>;
  NDObjectID?: InputMaybe<Objects>;
};


export type QueryBuffDefinitionsArgs = {
  BuffParameters?: InputMaybe<Array<BuffParameters>>;
  BuffParameters_BuffID?: InputMaybe<Array<BuffParameters>>;
  ID?: InputMaybe<Scalars['Int']['input']>;
  Priority?: InputMaybe<Scalars['Float']['input']>;
  UIIcon?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBuffParametersArgs = {
  BuffID?: InputMaybe<BuffDefinitions>;
  EffectID?: InputMaybe<Scalars['Int']['input']>;
  NumberValue?: InputMaybe<Scalars['Float']['input']>;
  ParameterName?: InputMaybe<Scalars['String']['input']>;
  StringValue?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCameraArgs = {
  camera_collision_padding?: InputMaybe<Scalars['Float']['input']>;
  camera_name?: InputMaybe<Scalars['String']['input']>;
  fade_player_min_range?: InputMaybe<Scalars['Float']['input']>;
  glide_speed?: InputMaybe<Scalars['Float']['input']>;
  horizontal_return_modifier?: InputMaybe<Scalars['Float']['input']>;
  horizontal_rotate_modifier?: InputMaybe<Scalars['Float']['input']>;
  horizontal_rotate_tolerance?: InputMaybe<Scalars['Float']['input']>;
  input_movement_scalar?: InputMaybe<Scalars['Float']['input']>;
  input_rotation_scalar?: InputMaybe<Scalars['Float']['input']>;
  input_zoom_scalar?: InputMaybe<Scalars['Float']['input']>;
  look_forward_offset?: InputMaybe<Scalars['Float']['input']>;
  look_up_offset?: InputMaybe<Scalars['Float']['input']>;
  maximum_auto_glide_angle?: InputMaybe<Scalars['Float']['input']>;
  maximum_ignore_jump_distance?: InputMaybe<Scalars['Float']['input']>;
  maximum_pitch_desired?: InputMaybe<Scalars['Float']['input']>;
  maximum_vertical_dampening_distance?: InputMaybe<Scalars['Float']['input']>;
  maximum_zoom?: InputMaybe<Scalars['Float']['input']>;
  min_glide_distance_tolerance?: InputMaybe<Scalars['Float']['input']>;
  min_movement_delta_tolerance?: InputMaybe<Scalars['Float']['input']>;
  minimum_ignore_jump_distance?: InputMaybe<Scalars['Float']['input']>;
  minimum_pitch_desired?: InputMaybe<Scalars['Float']['input']>;
  minimum_tether_glide_distance?: InputMaybe<Scalars['Float']['input']>;
  minimum_vertical_dampening_distance?: InputMaybe<Scalars['Float']['input']>;
  minimum_zoom?: InputMaybe<Scalars['Float']['input']>;
  pitch_angle_tolerance?: InputMaybe<Scalars['Float']['input']>;
  pitch_return_modifier?: InputMaybe<Scalars['Float']['input']>;
  return_from_incline_modifier?: InputMaybe<Scalars['Float']['input']>;
  set_0_FOV?: InputMaybe<Scalars['Float']['input']>;
  set_0_angular_relaxation?: InputMaybe<Scalars['Float']['input']>;
  set_0_max_yaw_angle?: InputMaybe<Scalars['Float']['input']>;
  set_0_position_forward_offset?: InputMaybe<Scalars['Float']['input']>;
  set_0_position_up_offset?: InputMaybe<Scalars['Float']['input']>;
  set_0_speed_influence_on_dir?: InputMaybe<Scalars['Float']['input']>;
  set_1_FOV?: InputMaybe<Scalars['Float']['input']>;
  set_1_angular_relaxation?: InputMaybe<Scalars['Float']['input']>;
  set_1_fade_in_camera_set_change?: InputMaybe<Scalars['Int']['input']>;
  set_1_fade_out_camera_set_change?: InputMaybe<Scalars['Int']['input']>;
  set_1_look_forward_offset?: InputMaybe<Scalars['Float']['input']>;
  set_1_look_up_offset?: InputMaybe<Scalars['Float']['input']>;
  set_1_max_yaw_angle?: InputMaybe<Scalars['Float']['input']>;
  set_1_position_forward_offset?: InputMaybe<Scalars['Float']['input']>;
  set_1_position_up_offset?: InputMaybe<Scalars['Float']['input']>;
  set_1_speed_influence_on_dir?: InputMaybe<Scalars['Float']['input']>;
  set_2_FOV?: InputMaybe<Scalars['Float']['input']>;
  set_2_angular_relaxation?: InputMaybe<Scalars['Float']['input']>;
  set_2_fade_in_camera_set_change?: InputMaybe<Scalars['Int']['input']>;
  set_2_fade_out_camera_set_change?: InputMaybe<Scalars['Int']['input']>;
  set_2_look_forward_offset?: InputMaybe<Scalars['Float']['input']>;
  set_2_look_up_offset?: InputMaybe<Scalars['Float']['input']>;
  set_2_max_yaw_angle?: InputMaybe<Scalars['Float']['input']>;
  set_2_position_forward_offset?: InputMaybe<Scalars['Float']['input']>;
  set_2_position_up_offset?: InputMaybe<Scalars['Float']['input']>;
  set_2_speed_influence_on_dir?: InputMaybe<Scalars['Float']['input']>;
  starting_zoom?: InputMaybe<Scalars['Float']['input']>;
  tether_in_return_multiplier?: InputMaybe<Scalars['Float']['input']>;
  tether_out_return_modifier?: InputMaybe<Scalars['Float']['input']>;
  verticle_movement_dampening_modifier?: InputMaybe<Scalars['Float']['input']>;
  yaw_behavior_speed_multiplier?: InputMaybe<Scalars['Float']['input']>;
  yaw_sign_correction?: InputMaybe<Scalars['Float']['input']>;
  zoom_return_modifier?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryCelebrationParametersArgs = {
  ambientB?: InputMaybe<Scalars['Float']['input']>;
  ambientG?: InputMaybe<Scalars['Float']['input']>;
  ambientR?: InputMaybe<Scalars['Float']['input']>;
  animation?: InputMaybe<Scalars['String']['input']>;
  backgroundObject?: InputMaybe<Objects>;
  blendTime?: InputMaybe<Scalars['Float']['input']>;
  cameraPathLOT?: InputMaybe<Objects>;
  celeLeadIn?: InputMaybe<Scalars['Float']['input']>;
  celeLeadOut?: InputMaybe<Scalars['Float']['input']>;
  directionalB?: InputMaybe<Scalars['Float']['input']>;
  directionalG?: InputMaybe<Scalars['Float']['input']>;
  directionalR?: InputMaybe<Scalars['Float']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  fogColorB?: InputMaybe<Scalars['Float']['input']>;
  fogColorG?: InputMaybe<Scalars['Float']['input']>;
  fogColorR?: InputMaybe<Scalars['Float']['input']>;
  iconID?: InputMaybe<Icons>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lightPositionX?: InputMaybe<Scalars['Float']['input']>;
  lightPositionY?: InputMaybe<Scalars['Float']['input']>;
  lightPositionZ?: InputMaybe<Scalars['Float']['input']>;
  mainText?: InputMaybe<Scalars['String']['input']>;
  mixerProgram?: InputMaybe<Scalars['String']['input']>;
  musicCue?: InputMaybe<Scalars['String']['input']>;
  pathNodeName?: InputMaybe<Scalars['String']['input']>;
  soundGUID?: InputMaybe<Scalars['String']['input']>;
  specularB?: InputMaybe<Scalars['Float']['input']>;
  specularG?: InputMaybe<Scalars['Float']['input']>;
  specularR?: InputMaybe<Scalars['Float']['input']>;
  subText?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChoiceBuildComponentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  imaginationOverride?: InputMaybe<Scalars['Int']['input']>;
  selections?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectibleComponentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  requirement_mission?: InputMaybe<Missions>;
};


export type QueryComponentsRegistryArgs = {
  component_id?: InputMaybe<Scalars['Int']['input']>;
  component_type?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryControlSchemesArgs = {
  PossessableComponent?: InputMaybe<Array<PossessableComponent>>;
  PossessableComponent_controlSchemeID?: InputMaybe<Array<PossessableComponent>>;
  control_scheme?: InputMaybe<Scalars['Int']['input']>;
  freecam_fast_speed_multiplier?: InputMaybe<Scalars['Float']['input']>;
  freecam_mouse_modifier?: InputMaybe<Scalars['Float']['input']>;
  freecam_slow_speed_multiplier?: InputMaybe<Scalars['Float']['input']>;
  freecam_speed_modifier?: InputMaybe<Scalars['Float']['input']>;
  gamepad_pitch_rot_sensitivity?: InputMaybe<Scalars['Float']['input']>;
  gamepad_trigger_sensitivity?: InputMaybe<Scalars['Float']['input']>;
  gamepad_yaw_rot_sensitivity?: InputMaybe<Scalars['Float']['input']>;
  keyboard_pitch_sensitivity?: InputMaybe<Scalars['Float']['input']>;
  keyboard_yaw_sensitivity?: InputMaybe<Scalars['Float']['input']>;
  keyboard_zoom_sensitivity?: InputMaybe<Scalars['Float']['input']>;
  mouse_zoom_wheel_sensitivity?: InputMaybe<Scalars['Float']['input']>;
  rotation_speed?: InputMaybe<Scalars['Float']['input']>;
  run_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  run_strafe_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  run_strafe_forward_speed?: InputMaybe<Scalars['Float']['input']>;
  run_strafe_speed?: InputMaybe<Scalars['Float']['input']>;
  scheme_name?: InputMaybe<Scalars['String']['input']>;
  walk_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  walk_forward_speed?: InputMaybe<Scalars['Float']['input']>;
  walk_strafe_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  walk_strafe_forward_speed?: InputMaybe<Scalars['Float']['input']>;
  walk_strafe_speed?: InputMaybe<Scalars['Float']['input']>;
  x_mouse_move_sensitivity_modifier?: InputMaybe<Scalars['Float']['input']>;
  y_mouse_move_sensitivity_modifier?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryCurrencyDenominationsArgs = {
  objectid?: InputMaybe<Objects>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurrencyTableArgs = {
  currencyIndex?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxvalue?: InputMaybe<Scalars['Int']['input']>;
  minvalue?: InputMaybe<Scalars['Int']['input']>;
  npcminlevel?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDbExcludeArgs = {
  column?: InputMaybe<Scalars['String']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDeletionRestrictionsArgs = {
  checkType?: InputMaybe<Scalars['Int']['input']>;
  failureReason_de_DE?: InputMaybe<Scalars['String']['input']>;
  failureReason_en_GB?: InputMaybe<Scalars['String']['input']>;
  failureReason_en_US?: InputMaybe<Scalars['String']['input']>;
  failureReason_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Scalars['String']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  restricted?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDestructibleComponentArgs = {
  CurrencyIndex?: InputMaybe<Scalars['Int']['input']>;
  LootMatrixIndex?: InputMaybe<LootMatrix>;
  armor?: InputMaybe<Scalars['Float']['input']>;
  attack_priority?: InputMaybe<Scalars['Int']['input']>;
  death_behavior?: InputMaybe<Scalars['Int']['input']>;
  difficultyLevel?: InputMaybe<Scalars['Int']['input']>;
  faction?: InputMaybe<Factions>;
  factionList?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imagination?: InputMaybe<Scalars['Int']['input']>;
  isSmashable?: InputMaybe<Scalars['Int']['input']>;
  isnpc?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  life?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDevModelBehaviorsArgs = {
  BehaviorID?: InputMaybe<Scalars['Int']['input']>;
  ModelID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmotesArgs = {
  Missions_reward_emote?: InputMaybe<Array<Missions>>;
  Missions_reward_emote2?: InputMaybe<Array<Missions>>;
  Missions_reward_emote3?: InputMaybe<Array<Missions>>;
  Missions_reward_emote4?: InputMaybe<Array<Missions>>;
  SpeedchatMenu?: InputMaybe<Array<SpeedchatMenu>>;
  SpeedchatMenu_emoteId?: InputMaybe<Array<SpeedchatMenu>>;
  animationName?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  command?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  iconFilename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Int']['input']>;
  outputText_de_DE?: InputMaybe<Scalars['String']['input']>;
  outputText_en_GB?: InputMaybe<Scalars['String']['input']>;
  outputText_en_US?: InputMaybe<Scalars['String']['input']>;
  outputText_loc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventGatingArgs = {
  date_end?: InputMaybe<Scalars['Int']['input']>;
  date_start?: InputMaybe<Scalars['Int']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExhibitComponentArgs = {
  fImaginationCost?: InputMaybe<Scalars['Float']['input']>;
  fReputationSizeMultiplier?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  offsetX?: InputMaybe<Scalars['Float']['input']>;
  offsetY?: InputMaybe<Scalars['Float']['input']>;
  offsetZ?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryFactionsArgs = {
  DestructibleComponent?: InputMaybe<Array<DestructibleComponent>>;
  DestructibleComponent_faction?: InputMaybe<Array<DestructibleComponent>>;
  enemyList?: InputMaybe<Scalars['String']['input']>;
  faction?: InputMaybe<Scalars['Int']['input']>;
  factionList?: InputMaybe<Scalars['String']['input']>;
  factionListFriendly?: InputMaybe<Scalars['Int']['input']>;
  friendList?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFeatureGatingArgs = {
  Activities?: InputMaybe<Array<Activities>>;
  Activities_gate_version?: InputMaybe<Array<Activities>>;
  ActivityText?: InputMaybe<Array<ActivityText>>;
  ActivityText_gate_version?: InputMaybe<Array<ActivityText>>;
  DeletionRestrictions?: InputMaybe<Array<DeletionRestrictions>>;
  DeletionRestrictions_gate_version?: InputMaybe<Array<DeletionRestrictions>>;
  Emotes?: InputMaybe<Array<Emotes>>;
  Emotes_gate_version?: InputMaybe<Array<Emotes>>;
  LootMatrix?: InputMaybe<Array<LootMatrix>>;
  LootMatrix_gate_version?: InputMaybe<Array<LootMatrix>>;
  MissionEmail?: InputMaybe<Array<MissionEmail>>;
  MissionEmail_gate_version?: InputMaybe<Array<MissionEmail>>;
  MissionNPCComponent?: InputMaybe<Array<MissionNpcComponent>>;
  MissionNPCComponent_gate_version?: InputMaybe<Array<MissionNpcComponent>>;
  MissionTasks?: InputMaybe<Array<MissionTasks>>;
  MissionTasks_gate_version?: InputMaybe<Array<MissionTasks>>;
  MissionText?: InputMaybe<Array<MissionText>>;
  MissionText_gate_version?: InputMaybe<Array<MissionText>>;
  Missions?: InputMaybe<Array<Missions>>;
  Missions_gate_version?: InputMaybe<Array<Missions>>;
  Objects?: InputMaybe<Array<Objects>>;
  Objects_gate_version?: InputMaybe<Array<Objects>>;
  PlayerStatistics?: InputMaybe<Array<PlayerStatistics>>;
  PlayerStatistics_gate_version?: InputMaybe<Array<PlayerStatistics>>;
  Preconditions?: InputMaybe<Array<Preconditions>>;
  Preconditions_gate_version?: InputMaybe<Array<Preconditions>>;
  PropertyTemplate?: InputMaybe<Array<PropertyTemplate>>;
  PropertyTemplate_gate_version?: InputMaybe<Array<PropertyTemplate>>;
  RewardCodes?: InputMaybe<Array<RewardCodes>>;
  RewardCodes_gate_version?: InputMaybe<Array<RewardCodes>>;
  SkillBehavior?: InputMaybe<Array<SkillBehavior>>;
  SkillBehavior_gate_version?: InputMaybe<Array<SkillBehavior>>;
  SpeedchatMenu?: InputMaybe<Array<SpeedchatMenu>>;
  SpeedchatMenu_gate_version?: InputMaybe<Array<SpeedchatMenu>>;
  UGBehaviorSounds?: InputMaybe<Array<UgBehaviorSounds>>;
  UGBehaviorSounds_gate_version?: InputMaybe<Array<UgBehaviorSounds>>;
  WhatsCoolItemSpotlight?: InputMaybe<Array<WhatsCoolItemSpotlight>>;
  WhatsCoolItemSpotlight_gate_version?: InputMaybe<Array<WhatsCoolItemSpotlight>>;
  WhatsCoolNewsAndTips?: InputMaybe<Array<WhatsCoolNewsAndTips>>;
  WhatsCoolNewsAndTips_gate_version?: InputMaybe<Array<WhatsCoolNewsAndTips>>;
  ZoneLoadingTips_gate_version?: InputMaybe<Array<ZoneLoadingTips>>;
  ZoneLoadingTips_targetVersion?: InputMaybe<Array<ZoneLoadingTips>>;
  current?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featureName?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['Int']['input']>;
  minor?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFlairTableArgs = {
  asset?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIconsArgs = {
  CelebrationParameters?: InputMaybe<Array<CelebrationParameters>>;
  CelebrationParameters_iconID?: InputMaybe<Array<CelebrationParameters>>;
  IconID?: InputMaybe<Scalars['Int']['input']>;
  IconName?: InputMaybe<Scalars['String']['input']>;
  IconPath?: InputMaybe<Scalars['String']['input']>;
  MissionTasks_IconID?: InputMaybe<Array<MissionTasks>>;
  MissionTasks_largeTaskIconID?: InputMaybe<Array<MissionTasks>>;
  MissionText_IconID?: InputMaybe<Array<MissionText>>;
  MissionText_turnInIconID?: InputMaybe<Array<MissionText>>;
  Missions?: InputMaybe<Array<Missions>>;
  Missions_missionIconID?: InputMaybe<Array<Missions>>;
  Preconditions?: InputMaybe<Array<Preconditions>>;
  Preconditions_iconID?: InputMaybe<Array<Preconditions>>;
  ProximityTypes?: InputMaybe<Array<ProximityTypes>>;
  ProximityTypes_IconID?: InputMaybe<Array<ProximityTypes>>;
  RenderComponent?: InputMaybe<Array<RenderComponent>>;
  RenderComponent_IconID?: InputMaybe<Array<RenderComponent>>;
  SkillBehavior?: InputMaybe<Array<SkillBehavior>>;
  SkillBehavior_skillIcon?: InputMaybe<Array<SkillBehavior>>;
  WhatsCoolNewsAndTips?: InputMaybe<Array<WhatsCoolNewsAndTips>>;
  WhatsCoolNewsAndTips_iconID?: InputMaybe<Array<WhatsCoolNewsAndTips>>;
  mapIcon?: InputMaybe<Array<MapIcon>>;
  mapIcon_iconID?: InputMaybe<Array<MapIcon>>;
};


export type QueryInventoryComponentArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  equip?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itemid?: InputMaybe<Objects>;
};


export type QueryItemComponentArgs = {
  Objects?: InputMaybe<Array<Objects>>;
  Objects_itemComponent?: InputMaybe<Array<Objects>>;
  SellMultiplier?: InputMaybe<Scalars['Float']['input']>;
  altCurrencyCost?: InputMaybe<Scalars['Int']['input']>;
  animationFlag?: InputMaybe<Scalars['Int']['input']>;
  audioEquipMetaEventSet?: InputMaybe<Scalars['String']['input']>;
  audioEventUse?: InputMaybe<Scalars['String']['input']>;
  baseValue?: InputMaybe<Scalars['Int']['input']>;
  buildTypes?: InputMaybe<Scalars['Int']['input']>;
  color1?: InputMaybe<Scalars['Int']['input']>;
  commendationCost?: InputMaybe<Scalars['Int']['input']>;
  commendationLOT?: InputMaybe<Objects>;
  currencyCosts?: InputMaybe<Scalars['String']['input']>;
  currencyLOT?: InputMaybe<Objects>;
  decal?: InputMaybe<Scalars['Int']['input']>;
  delResIndex?: InputMaybe<Scalars['Int']['input']>;
  equipEffects?: InputMaybe<Scalars['Int']['input']>;
  equipLocation?: InputMaybe<Scalars['String']['input']>;
  forgeType?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inLootTable?: InputMaybe<Scalars['Int']['input']>;
  inVendor?: InputMaybe<Scalars['Int']['input']>;
  ingredientInfo?: InputMaybe<Scalars['String']['input']>;
  ingredientInfo_de_DE?: InputMaybe<Scalars['String']['input']>;
  ingredientInfo_en_GB?: InputMaybe<Scalars['String']['input']>;
  ingredientInfo_en_US?: InputMaybe<Scalars['String']['input']>;
  ingredientInfo_loc?: InputMaybe<Scalars['String']['input']>;
  isBOE?: InputMaybe<Scalars['Int']['input']>;
  isBOP?: InputMaybe<Scalars['Int']['input']>;
  isKitPiece?: InputMaybe<Scalars['Int']['input']>;
  isTwoHanded?: InputMaybe<Scalars['Int']['input']>;
  isUnique?: InputMaybe<Scalars['Int']['input']>;
  itemInfo?: InputMaybe<Scalars['Int']['input']>;
  itemRating?: InputMaybe<Scalars['Int']['input']>;
  itemType?: InputMaybe<MapItemTypes>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  minNumRequired?: InputMaybe<Scalars['Int']['input']>;
  noEquipAnimation?: InputMaybe<Scalars['Int']['input']>;
  offsetGroupID?: InputMaybe<Scalars['Int']['input']>;
  rarity?: InputMaybe<Scalars['Int']['input']>;
  readyForQA?: InputMaybe<Scalars['Int']['input']>;
  reqAchievementID?: InputMaybe<Scalars['Int']['input']>;
  reqFlagID?: InputMaybe<Scalars['Int']['input']>;
  reqPrecondition?: InputMaybe<Scalars['String']['input']>;
  reqSpecRank?: InputMaybe<Scalars['Int']['input']>;
  reqSpecialtyID?: InputMaybe<Scalars['Int']['input']>;
  stackSize?: InputMaybe<Scalars['Int']['input']>;
  subItems?: InputMaybe<Scalars['String']['input']>;
};


export type QueryItemEggDataArgs = {
  chassie_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemFoodDataArgs = {
  element_1?: InputMaybe<Scalars['Int']['input']>;
  element_1_amount?: InputMaybe<Scalars['Int']['input']>;
  element_2?: InputMaybe<Scalars['Int']['input']>;
  element_2_amount?: InputMaybe<Scalars['Int']['input']>;
  element_3?: InputMaybe<Scalars['Int']['input']>;
  element_3_amount?: InputMaybe<Scalars['Int']['input']>;
  element_4?: InputMaybe<Scalars['Int']['input']>;
  element_4_amount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemSetSkillsArgs = {
  SkillCastType?: InputMaybe<Scalars['Int']['input']>;
  SkillID?: InputMaybe<SkillBehavior>;
  SkillSetID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemSetsArgs = {
  gate_version?: InputMaybe<Scalars['String']['input']>;
  itemIDs?: InputMaybe<Scalars['String']['input']>;
  kitID?: InputMaybe<Scalars['Int']['input']>;
  kitImage?: InputMaybe<Scalars['Int']['input']>;
  kitName_de_DE?: InputMaybe<Scalars['String']['input']>;
  kitName_en_GB?: InputMaybe<Scalars['String']['input']>;
  kitName_en_US?: InputMaybe<Scalars['String']['input']>;
  kitName_loc?: InputMaybe<Scalars['String']['input']>;
  kitRank?: InputMaybe<Scalars['Int']['input']>;
  kitType?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  setID?: InputMaybe<Scalars['Int']['input']>;
  skillSetWith2?: InputMaybe<Scalars['Int']['input']>;
  skillSetWith3?: InputMaybe<Scalars['Int']['input']>;
  skillSetWith4?: InputMaybe<Scalars['Int']['input']>;
  skillSetWith5?: InputMaybe<Scalars['Int']['input']>;
  skillSetWith6?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJetPackPadComponentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lotBlocker?: InputMaybe<Objects>;
  lotWarningVolume?: InputMaybe<Objects>;
  warnDistance?: InputMaybe<Scalars['Float']['input']>;
  xDistance?: InputMaybe<Scalars['Float']['input']>;
  yDistance?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryLupExhibitComponentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  maxXZ?: InputMaybe<Scalars['Float']['input']>;
  maxY?: InputMaybe<Scalars['Float']['input']>;
  minXZ?: InputMaybe<Scalars['Float']['input']>;
  offsetX?: InputMaybe<Scalars['Float']['input']>;
  offsetY?: InputMaybe<Scalars['Float']['input']>;
  offsetZ?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryLupExhibitModelDataArgs = {
  LOT?: InputMaybe<Objects>;
  description?: InputMaybe<Scalars['String']['input']>;
  maxXZ?: InputMaybe<Scalars['Float']['input']>;
  maxY?: InputMaybe<Scalars['Float']['input']>;
  minXZ?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLupZoneIDsArgs = {
  zoneID?: InputMaybe<ZoneTable>;
};


export type QueryLanguageTypeArgs = {
  LanguageDescription?: InputMaybe<Scalars['String']['input']>;
  LanguageID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLevelProgressionLookupArgs = {
  BehaviorEffect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  requiredUScore?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLootMatrixArgs = {
  ActivityRewards?: InputMaybe<Array<ActivityRewards>>;
  ActivityRewards_LootMatrixIndex?: InputMaybe<Array<ActivityRewards>>;
  DestructibleComponent?: InputMaybe<Array<DestructibleComponent>>;
  DestructibleComponent_LootMatrixIndex?: InputMaybe<Array<DestructibleComponent>>;
  LootMatrixIndex?: InputMaybe<LootMatrixIndex>;
  LootTableIndex?: InputMaybe<LootTable>;
  PackageComponent?: InputMaybe<Array<PackageComponent>>;
  PackageComponent_LootMatrixIndex?: InputMaybe<Array<PackageComponent>>;
  RarityTableIndex?: InputMaybe<Scalars['Int']['input']>;
  SmashableChain?: InputMaybe<Array<SmashableChain>>;
  SmashableChain_lootMatrixID?: InputMaybe<Array<SmashableChain>>;
  SmashableComponent?: InputMaybe<Array<SmashableComponent>>;
  SmashableComponent_LootMatrixIndex?: InputMaybe<Array<SmashableComponent>>;
  VendorComponent?: InputMaybe<Array<VendorComponent>>;
  VendorComponent_LootMatrixIndex?: InputMaybe<Array<VendorComponent>>;
  flagID?: InputMaybe<Scalars['Int']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxToDrop?: InputMaybe<Scalars['Int']['input']>;
  minToDrop?: InputMaybe<Scalars['Int']['input']>;
  percent?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryLootMatrixIndexArgs = {
  LootMatrix?: InputMaybe<Array<LootMatrix>>;
  LootMatrixIndex?: InputMaybe<Scalars['Int']['input']>;
  LootMatrix_LootMatrixIndex?: InputMaybe<Array<LootMatrix>>;
  inNpcEditor?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLootTableArgs = {
  LootMatrix?: InputMaybe<Array<LootMatrix>>;
  LootMatrix_LootTableIndex?: InputMaybe<Array<LootMatrix>>;
  LootTableIndex?: InputMaybe<LootTableIndex>;
  MissionDrop?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itemid?: InputMaybe<Objects>;
  sortPriority?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLootTableIndexArgs = {
  LootTable?: InputMaybe<Array<LootTable>>;
  LootTableIndex?: InputMaybe<Scalars['Int']['input']>;
  LootTable_LootTableIndex?: InputMaybe<Array<LootTable>>;
};


export type QueryMinifigComponentArgs = {
  chest?: InputMaybe<Scalars['Int']['input']>;
  chestdecal?: InputMaybe<Scalars['Int']['input']>;
  eyebrowstyle?: InputMaybe<MinifigDecals_Eyebrows>;
  eyesstyle?: InputMaybe<MinifigDecals_Eyes>;
  haircolor?: InputMaybe<Scalars['Int']['input']>;
  hairstyle?: InputMaybe<Scalars['Int']['input']>;
  head?: InputMaybe<Scalars['Int']['input']>;
  headcolor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lefthand?: InputMaybe<Scalars['Int']['input']>;
  legs?: InputMaybe<Scalars['Int']['input']>;
  mouthstyle?: InputMaybe<MinifigDecals_Mouths>;
  righthand?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMinifigDecals_EyebrowsArgs = {
  CharacterCreateValid?: InputMaybe<Scalars['Int']['input']>;
  High_path?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['Int']['input']>;
  Low_path?: InputMaybe<Scalars['String']['input']>;
  MinifigComponent?: InputMaybe<Array<MinifigComponent>>;
  MinifigComponent_eyebrowstyle?: InputMaybe<Array<MinifigComponent>>;
  female?: InputMaybe<Scalars['Int']['input']>;
  male?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMinifigDecals_EyesArgs = {
  CharacterCreateValid?: InputMaybe<Scalars['Int']['input']>;
  High_path?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['Int']['input']>;
  Low_path?: InputMaybe<Scalars['String']['input']>;
  MinifigComponent?: InputMaybe<Array<MinifigComponent>>;
  MinifigComponent_eyesstyle?: InputMaybe<Array<MinifigComponent>>;
  female?: InputMaybe<Scalars['Int']['input']>;
  male?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMinifigDecals_LegsArgs = {
  High_path?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMinifigDecals_MouthsArgs = {
  CharacterCreateValid?: InputMaybe<Scalars['Int']['input']>;
  High_path?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['Int']['input']>;
  Low_path?: InputMaybe<Scalars['String']['input']>;
  MinifigComponent?: InputMaybe<Array<MinifigComponent>>;
  MinifigComponent_mouthstyle?: InputMaybe<Array<MinifigComponent>>;
  female?: InputMaybe<Scalars['Int']['input']>;
  male?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMinifigDecals_TorsosArgs = {
  CharacterCreateValid?: InputMaybe<Scalars['Int']['input']>;
  High_path?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['Int']['input']>;
  female?: InputMaybe<Scalars['Int']['input']>;
  male?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMissionEmailArgs = {
  ID?: InputMaybe<Scalars['Int']['input']>;
  announceText_de_DE?: InputMaybe<Scalars['String']['input']>;
  announceText_en_GB?: InputMaybe<Scalars['String']['input']>;
  announceText_en_US?: InputMaybe<Scalars['String']['input']>;
  announceText_loc?: InputMaybe<Scalars['String']['input']>;
  attachmentLOT?: InputMaybe<Objects>;
  bodyText_de_DE?: InputMaybe<Scalars['String']['input']>;
  bodyText_en_GB?: InputMaybe<Scalars['String']['input']>;
  bodyText_en_US?: InputMaybe<Scalars['String']['input']>;
  bodyText_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  messageType?: InputMaybe<Scalars['Int']['input']>;
  missionID?: InputMaybe<Missions>;
  notificationGroup?: InputMaybe<Scalars['Int']['input']>;
  senderName_de_DE?: InputMaybe<Scalars['String']['input']>;
  senderName_en_GB?: InputMaybe<Scalars['String']['input']>;
  senderName_en_US?: InputMaybe<Scalars['String']['input']>;
  senderName_loc?: InputMaybe<Scalars['String']['input']>;
  subjectText_de_DE?: InputMaybe<Scalars['String']['input']>;
  subjectText_en_GB?: InputMaybe<Scalars['String']['input']>;
  subjectText_en_US?: InputMaybe<Scalars['String']['input']>;
  subjectText_loc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMissionNpcComponentArgs = {
  acceptsMission?: InputMaybe<Scalars['Int']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  missionID?: InputMaybe<Missions>;
  offersMission?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMissionPrereqsArgs = {
  andGroup?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Missions>;
  prereqMission?: InputMaybe<Missions>;
  prereqMissionState?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMissionTaskMissionsArgs = {
  mission?: InputMaybe<Missions>;
  missionTask?: InputMaybe<MissionTasks>;
};


export type QueryMissionTaskObjectsArgs = {
  missionTask?: InputMaybe<MissionTasks>;
  object?: InputMaybe<Objects>;
};


export type QueryMissionTasksArgs = {
  IconID?: InputMaybe<Icons>;
  MissionTaskMissions?: InputMaybe<Array<MissionTaskMissions>>;
  MissionTaskMissions_missionTask?: InputMaybe<Array<MissionTaskMissions>>;
  MissionTaskObjects?: InputMaybe<Array<MissionTaskObjects>>;
  MissionTaskObjects_missionTask?: InputMaybe<Array<MissionTaskObjects>>;
  description_de_DE?: InputMaybe<Scalars['String']['input']>;
  description_en_GB?: InputMaybe<Scalars['String']['input']>;
  description_en_US?: InputMaybe<Scalars['String']['input']>;
  description_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Missions>;
  largeTaskIcon?: InputMaybe<Scalars['String']['input']>;
  largeTaskIconID?: InputMaybe<Icons>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  target?: InputMaybe<Scalars['Int']['input']>;
  targetGroup?: InputMaybe<Scalars['String']['input']>;
  targetValue?: InputMaybe<Scalars['Int']['input']>;
  taskParam1?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['Int']['input']>;
  uid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMissionTextArgs = {
  AudioEventGUID_Completed?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_Failed?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_Interact?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_OfferAccept?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_OfferDeny?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_Progress?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_TurnIn?: InputMaybe<Scalars['String']['input']>;
  AudioMusicCue_OfferAccept?: InputMaybe<Scalars['String']['input']>;
  AudioMusicCue_TurnIn?: InputMaybe<Scalars['String']['input']>;
  CinematicAccepted?: InputMaybe<Scalars['String']['input']>;
  CinematicAcceptedLeadin?: InputMaybe<Scalars['Float']['input']>;
  CinematicCompleted?: InputMaybe<Scalars['String']['input']>;
  CinematicCompletedLeadin?: InputMaybe<Scalars['Float']['input']>;
  CinematicRepeatable?: InputMaybe<Scalars['String']['input']>;
  CinematicRepeatableCompleted?: InputMaybe<Scalars['String']['input']>;
  CinematicRepeatableCompletedLeadin?: InputMaybe<Scalars['Float']['input']>;
  CinematicRepeatableLeadin?: InputMaybe<Scalars['Float']['input']>;
  IconID?: InputMaybe<Icons>;
  accept_chat_bubble_de_DE?: InputMaybe<Scalars['String']['input']>;
  accept_chat_bubble_en_GB?: InputMaybe<Scalars['String']['input']>;
  accept_chat_bubble_en_US?: InputMaybe<Scalars['String']['input']>;
  accept_chat_bubble_loc?: InputMaybe<Scalars['String']['input']>;
  chat_state_1_de_DE?: InputMaybe<Scalars['String']['input']>;
  chat_state_1_en_GB?: InputMaybe<Scalars['String']['input']>;
  chat_state_1_en_US?: InputMaybe<Scalars['String']['input']>;
  chat_state_1_loc?: InputMaybe<Scalars['String']['input']>;
  chat_state_2_de_DE?: InputMaybe<Scalars['String']['input']>;
  chat_state_2_en_GB?: InputMaybe<Scalars['String']['input']>;
  chat_state_2_en_US?: InputMaybe<Scalars['String']['input']>;
  chat_state_2_loc?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_de_DE?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_en_GB?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_en_US?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_loc?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_turnin_de_DE?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_turnin_en_GB?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_turnin_en_US?: InputMaybe<Scalars['String']['input']>;
  chat_state_3_turnin_loc?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_de_DE?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_en_GB?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_en_US?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_loc?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_turnin_de_DE?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_turnin_en_GB?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_turnin_en_US?: InputMaybe<Scalars['String']['input']>;
  chat_state_4_turnin_loc?: InputMaybe<Scalars['String']['input']>;
  completion_succeed_tip_de_DE?: InputMaybe<Scalars['String']['input']>;
  completion_succeed_tip_en_GB?: InputMaybe<Scalars['String']['input']>;
  completion_succeed_tip_en_US?: InputMaybe<Scalars['String']['input']>;
  completion_succeed_tip_loc?: InputMaybe<Scalars['String']['input']>;
  description_de_DE?: InputMaybe<Scalars['String']['input']>;
  description_en_GB?: InputMaybe<Scalars['String']['input']>;
  description_en_US?: InputMaybe<Scalars['String']['input']>;
  description_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Missions>;
  in_progress_de_DE?: InputMaybe<Scalars['String']['input']>;
  in_progress_en_GB?: InputMaybe<Scalars['String']['input']>;
  in_progress_en_US?: InputMaybe<Scalars['String']['input']>;
  in_progress_loc?: InputMaybe<Scalars['String']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  missionIcon?: InputMaybe<Scalars['String']['input']>;
  offerNPCIcon?: InputMaybe<Scalars['String']['input']>;
  offer_de_DE?: InputMaybe<Scalars['String']['input']>;
  offer_en_GB?: InputMaybe<Scalars['String']['input']>;
  offer_en_US?: InputMaybe<Scalars['String']['input']>;
  offer_loc?: InputMaybe<Scalars['String']['input']>;
  offer_repeatable_de_DE?: InputMaybe<Scalars['String']['input']>;
  offer_repeatable_en_GB?: InputMaybe<Scalars['String']['input']>;
  offer_repeatable_en_US?: InputMaybe<Scalars['String']['input']>;
  offer_repeatable_loc?: InputMaybe<Scalars['String']['input']>;
  onclick_anim?: InputMaybe<Scalars['String']['input']>;
  ready_to_complete_de_DE?: InputMaybe<Scalars['String']['input']>;
  ready_to_complete_en_GB?: InputMaybe<Scalars['String']['input']>;
  ready_to_complete_en_US?: InputMaybe<Scalars['String']['input']>;
  ready_to_complete_loc?: InputMaybe<Scalars['String']['input']>;
  state_1_anim?: InputMaybe<Scalars['String']['input']>;
  state_2_anim?: InputMaybe<Scalars['String']['input']>;
  state_3_anim?: InputMaybe<Scalars['String']['input']>;
  state_3_turnin_anim?: InputMaybe<Scalars['String']['input']>;
  state_4_anim?: InputMaybe<Scalars['String']['input']>;
  state_4_turnin_anim?: InputMaybe<Scalars['String']['input']>;
  story_icon?: InputMaybe<Scalars['String']['input']>;
  turnInIconID?: InputMaybe<Icons>;
};


export type QueryMissionsArgs = {
  CollectibleComponent?: InputMaybe<Array<CollectibleComponent>>;
  CollectibleComponent_requirement_mission?: InputMaybe<Array<CollectibleComponent>>;
  HUDStates?: InputMaybe<Scalars['String']['input']>;
  LegoScore?: InputMaybe<Scalars['Int']['input']>;
  MissionEmail?: InputMaybe<Array<MissionEmail>>;
  MissionEmail_missionID?: InputMaybe<Array<MissionEmail>>;
  MissionNPCComponent?: InputMaybe<Array<MissionNpcComponent>>;
  MissionNPCComponent_missionID?: InputMaybe<Array<MissionNpcComponent>>;
  MissionPrereqs_mission?: InputMaybe<Array<MissionPrereqs>>;
  MissionPrereqs_prereqMission?: InputMaybe<Array<MissionPrereqs>>;
  MissionTaskMissions?: InputMaybe<Array<MissionTaskMissions>>;
  MissionTaskMissions_mission?: InputMaybe<Array<MissionTaskMissions>>;
  MissionTasks?: InputMaybe<Array<MissionTasks>>;
  MissionTasks_id?: InputMaybe<Array<MissionTasks>>;
  MissionText?: InputMaybe<Array<MissionText>>;
  MissionText_id?: InputMaybe<Array<MissionText>>;
  UIPrereqID?: InputMaybe<Scalars['Int']['input']>;
  UISortOrder?: InputMaybe<Scalars['Int']['input']>;
  cooldownTime?: InputMaybe<Scalars['Int']['input']>;
  defined_subtype?: InputMaybe<Scalars['String']['input']>;
  defined_type?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  inMOTD?: InputMaybe<Scalars['Int']['input']>;
  isChoiceReward?: InputMaybe<Scalars['Int']['input']>;
  isMission?: InputMaybe<Scalars['Int']['input']>;
  isRandom?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  missionIconID?: InputMaybe<Icons>;
  name_de_DE?: InputMaybe<Scalars['String']['input']>;
  name_en_GB?: InputMaybe<Scalars['String']['input']>;
  name_en_US?: InputMaybe<Scalars['String']['input']>;
  name_loc?: InputMaybe<Scalars['String']['input']>;
  offer_objectID?: InputMaybe<Objects>;
  prereqMissionID?: InputMaybe<Scalars['String']['input']>;
  randomPool?: InputMaybe<Scalars['String']['input']>;
  repeatable?: InputMaybe<Scalars['Int']['input']>;
  reward_bankinventory?: InputMaybe<Scalars['Int']['input']>;
  reward_currency?: InputMaybe<Scalars['Int']['input']>;
  reward_currency_repeatable?: InputMaybe<Scalars['Int']['input']>;
  reward_emote?: InputMaybe<Emotes>;
  reward_emote2?: InputMaybe<Emotes>;
  reward_emote3?: InputMaybe<Emotes>;
  reward_emote4?: InputMaybe<Emotes>;
  reward_item1?: InputMaybe<Objects>;
  reward_item1_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item1_repeat_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item1_repeatable?: InputMaybe<Objects>;
  reward_item2?: InputMaybe<Objects>;
  reward_item2_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item2_repeat_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item2_repeatable?: InputMaybe<Objects>;
  reward_item3?: InputMaybe<Objects>;
  reward_item3_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item3_repeat_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item3_repeatable?: InputMaybe<Objects>;
  reward_item4?: InputMaybe<Objects>;
  reward_item4_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item4_repeat_count?: InputMaybe<Scalars['Int']['input']>;
  reward_item4_repeatable?: InputMaybe<Objects>;
  reward_maxhealth?: InputMaybe<Scalars['Int']['input']>;
  reward_maximagination?: InputMaybe<Scalars['Int']['input']>;
  reward_maxinventory?: InputMaybe<Scalars['Int']['input']>;
  reward_maxmodel?: InputMaybe<Scalars['Int']['input']>;
  reward_maxwallet?: InputMaybe<Scalars['Int']['input']>;
  reward_maxwidget?: InputMaybe<Scalars['Int']['input']>;
  reward_reputation?: InputMaybe<Scalars['Int']['input']>;
  target_objectID?: InputMaybe<Objects>;
  time_limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModelBehaviorArgs = {
  definitionXMLfilename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModularBuildComponentArgs = {
  AudioEventGUID_Complete?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_Present?: InputMaybe<Scalars['String']['input']>;
  AudioEventGUID_Snap?: InputMaybe<Scalars['String']['input']>;
  buildType?: InputMaybe<Scalars['Int']['input']>;
  createdLOT?: InputMaybe<Objects>;
  createdPhysicsID?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  xml?: InputMaybe<Scalars['String']['input']>;
};


export type QueryModuleComponentArgs = {
  assembledEffectID?: InputMaybe<Scalars['Int']['input']>;
  buildType?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  partCode?: InputMaybe<Scalars['Int']['input']>;
  primarySoundGUID?: InputMaybe<Scalars['String']['input']>;
  xml?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMotionFxArgs = {
  addVelocity?: InputMaybe<Scalars['Float']['input']>;
  destGroupName?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Float']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  endScale?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  slamVelocity?: InputMaybe<Scalars['Float']['input']>;
  startScale?: InputMaybe<Scalars['Float']['input']>;
  typeID?: InputMaybe<Scalars['Int']['input']>;
  velocity?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryMovementAiComponentArgs = {
  MovementType?: InputMaybe<Scalars['String']['input']>;
  WanderChance?: InputMaybe<Scalars['Float']['input']>;
  WanderDelayMax?: InputMaybe<Scalars['Float']['input']>;
  WanderDelayMin?: InputMaybe<Scalars['Float']['input']>;
  WanderRadius?: InputMaybe<Scalars['Float']['input']>;
  WanderSpeed?: InputMaybe<Scalars['Float']['input']>;
  attachedPath?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovingPlatformsArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  platformIsSimpleMover?: InputMaybe<Scalars['Int']['input']>;
  platformMoveTime?: InputMaybe<Scalars['Float']['input']>;
  platformMoveX?: InputMaybe<Scalars['Float']['input']>;
  platformMoveY?: InputMaybe<Scalars['Float']['input']>;
  platformMoveZ?: InputMaybe<Scalars['Float']['input']>;
  platformStartAtEnd?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNpcIconsArgs = {
  LOT?: InputMaybe<Objects>;
  Texture?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['Int']['input']>;
  compositeConnectionNode?: InputMaybe<Scalars['String']['input']>;
  compositeHorizOffset?: InputMaybe<Scalars['Float']['input']>;
  compositeIconTexture?: InputMaybe<Scalars['String']['input']>;
  compositeLOTMultiMission?: InputMaybe<Objects>;
  compositeLOTMultiMissionVentor?: InputMaybe<Objects>;
  compositeScale?: InputMaybe<Scalars['Float']['input']>;
  compositeVertOffset?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isClickable?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  rotateToFace?: InputMaybe<Scalars['Int']['input']>;
  scale?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryObjectBehaviorXrefArgs = {
  LOT?: InputMaybe<Scalars['Int']['input']>;
  behaviorID1?: InputMaybe<Scalars['Int']['input']>;
  behaviorID2?: InputMaybe<Scalars['Int']['input']>;
  behaviorID3?: InputMaybe<Scalars['Int']['input']>;
  behaviorID4?: InputMaybe<Scalars['Int']['input']>;
  behaviorID5?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryObjectBehaviorsArgs = {
  BehaviorID?: InputMaybe<Scalars['Int']['input']>;
  xmldata?: InputMaybe<Scalars['String']['input']>;
};


export type QueryObjectSkillsArgs = {
  AICombatWeight?: InputMaybe<Scalars['Int']['input']>;
  castOnType?: InputMaybe<Scalars['Int']['input']>;
  objectTemplate?: InputMaybe<Objects>;
  skillID?: InputMaybe<SkillBehavior>;
};


export type QueryObjectsArgs = {
  ActivityRewards?: InputMaybe<Array<ActivityRewards>>;
  ActivityRewards_objectTemplate?: InputMaybe<Array<ActivityRewards>>;
  BrickIDTable?: InputMaybe<Array<BrickIdTable>>;
  BrickIDTable_NDObjectID?: InputMaybe<Array<BrickIdTable>>;
  CelebrationParameters_backgroundObject?: InputMaybe<Array<CelebrationParameters>>;
  CelebrationParameters_cameraPathLOT?: InputMaybe<Array<CelebrationParameters>>;
  CurrencyDenominations?: InputMaybe<Array<CurrencyDenominations>>;
  CurrencyDenominations_objectid?: InputMaybe<Array<CurrencyDenominations>>;
  HQ_valid?: InputMaybe<Scalars['Int']['input']>;
  InventoryComponent?: InputMaybe<Array<InventoryComponent>>;
  InventoryComponent_itemid?: InputMaybe<Array<InventoryComponent>>;
  ItemComponent_commendationLOT?: InputMaybe<Array<ItemComponent>>;
  ItemComponent_currencyLOT?: InputMaybe<Array<ItemComponent>>;
  JetPackPadComponent_lotBlocker?: InputMaybe<Array<JetPackPadComponent>>;
  JetPackPadComponent_lotWarningVolume?: InputMaybe<Array<JetPackPadComponent>>;
  LUPExhibitModelData?: InputMaybe<Array<LupExhibitModelData>>;
  LUPExhibitModelData_LOT?: InputMaybe<Array<LupExhibitModelData>>;
  LootTable?: InputMaybe<Array<LootTable>>;
  LootTable_itemid?: InputMaybe<Array<LootTable>>;
  MissionEmail?: InputMaybe<Array<MissionEmail>>;
  MissionEmail_attachmentLOT?: InputMaybe<Array<MissionEmail>>;
  MissionTaskObjects?: InputMaybe<Array<MissionTaskObjects>>;
  MissionTaskObjects_object?: InputMaybe<Array<MissionTaskObjects>>;
  Missions_offer_objectID?: InputMaybe<Array<Missions>>;
  Missions_reward_item1?: InputMaybe<Array<Missions>>;
  Missions_reward_item1_repeatable?: InputMaybe<Array<Missions>>;
  Missions_reward_item2?: InputMaybe<Array<Missions>>;
  Missions_reward_item2_repeatable?: InputMaybe<Array<Missions>>;
  Missions_reward_item3?: InputMaybe<Array<Missions>>;
  Missions_reward_item3_repeatable?: InputMaybe<Array<Missions>>;
  Missions_reward_item4?: InputMaybe<Array<Missions>>;
  Missions_reward_item4_repeatable?: InputMaybe<Array<Missions>>;
  Missions_target_objectID?: InputMaybe<Array<Missions>>;
  ModularBuildComponent?: InputMaybe<Array<ModularBuildComponent>>;
  ModularBuildComponent_createdLOT?: InputMaybe<Array<ModularBuildComponent>>;
  NpcIcons_LOT?: InputMaybe<Array<NpcIcons>>;
  NpcIcons_compositeLOTMultiMission?: InputMaybe<Array<NpcIcons>>;
  NpcIcons_compositeLOTMultiMissionVentor?: InputMaybe<Array<NpcIcons>>;
  ObjectSkills?: InputMaybe<Array<ObjectSkills>>;
  ObjectSkills_objectTemplate?: InputMaybe<Array<ObjectSkills>>;
  RebuildSections?: InputMaybe<Array<RebuildSections>>;
  RebuildSections_objectID?: InputMaybe<Array<RebuildSections>>;
  RewardCodes?: InputMaybe<Array<RewardCodes>>;
  RewardCodes_attachmentLOT?: InputMaybe<Array<RewardCodes>>;
  TamingBuildPuzzles_NPCLot?: InputMaybe<Array<TamingBuildPuzzles>>;
  TamingBuildPuzzles_PuzzleModelLot?: InputMaybe<Array<TamingBuildPuzzles>>;
  WhatsCoolItemSpotlight?: InputMaybe<Array<WhatsCoolItemSpotlight>>;
  WhatsCoolItemSpotlight_itemID?: InputMaybe<Array<WhatsCoolItemSpotlight>>;
  _internalNotes?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_de_DE?: InputMaybe<Scalars['String']['input']>;
  description_en_GB?: InputMaybe<Scalars['String']['input']>;
  description_en_US?: InputMaybe<Scalars['String']['input']>;
  description_loc?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interactionDistance?: InputMaybe<Scalars['Float']['input']>;
  itemComponent?: InputMaybe<ItemComponent>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  mapIcon?: InputMaybe<Array<MapIcon>>;
  mapIcon_LOT?: InputMaybe<Array<MapIcon>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_de_DE?: InputMaybe<Scalars['String']['input']>;
  name_en_GB?: InputMaybe<Scalars['String']['input']>;
  name_en_US?: InputMaybe<Scalars['String']['input']>;
  name_loc?: InputMaybe<Scalars['String']['input']>;
  nametag?: InputMaybe<Scalars['Int']['input']>;
  npcTemplateID?: InputMaybe<Scalars['Int']['input']>;
  placeable?: InputMaybe<Scalars['Int']['input']>;
  renderComponent?: InputMaybe<RenderComponent>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPackageComponentArgs = {
  LootMatrixIndex?: InputMaybe<LootMatrix>;
  id?: InputMaybe<Scalars['Int']['input']>;
  packageType?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPetAbilitiesArgs = {
  AbilityName?: InputMaybe<Scalars['String']['input']>;
  DisplayName_de_DE?: InputMaybe<Scalars['String']['input']>;
  DisplayName_en_GB?: InputMaybe<Scalars['String']['input']>;
  DisplayName_en_US?: InputMaybe<Scalars['String']['input']>;
  DisplayName_loc?: InputMaybe<Scalars['String']['input']>;
  ImaginationCost?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPetComponentArgs = {
  AudioMetaEventSet?: InputMaybe<Scalars['String']['input']>;
  buffIDs?: InputMaybe<Scalars['String']['input']>;
  elementType?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idleTimeMax?: InputMaybe<Scalars['Float']['input']>;
  idleTimeMin?: InputMaybe<Scalars['Float']['input']>;
  imaginationDrainRate?: InputMaybe<Scalars['Float']['input']>;
  maxTameUpdateTime?: InputMaybe<Scalars['Float']['input']>;
  minTameUpdateTime?: InputMaybe<Scalars['Float']['input']>;
  percentTameChance?: InputMaybe<Scalars['Float']['input']>;
  petForm?: InputMaybe<Scalars['Int']['input']>;
  runSpeed?: InputMaybe<Scalars['Float']['input']>;
  sprintSpeed?: InputMaybe<Scalars['Float']['input']>;
  tamability?: InputMaybe<Scalars['Float']['input']>;
  walkSpeed?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryPetNestComponentArgs = {
  ElementalType?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPhysicsComponentArgs = {
  airSpeed?: InputMaybe<Scalars['Float']['input']>;
  boundaryAsset?: InputMaybe<Scalars['String']['input']>;
  collisionGroup?: InputMaybe<Scalars['Int']['input']>;
  doublejump?: InputMaybe<Scalars['Float']['input']>;
  friction?: InputMaybe<Scalars['Float']['input']>;
  gravityVolumeAsset?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jump?: InputMaybe<Scalars['Float']['input']>;
  jumpAirSpeed?: InputMaybe<Scalars['Float']['input']>;
  pcShapeType?: InputMaybe<Scalars['Int']['input']>;
  physics_asset?: InputMaybe<Scalars['String']['input']>;
  playerHeight?: InputMaybe<Scalars['Float']['input']>;
  playerRadius?: InputMaybe<Scalars['Float']['input']>;
  rotSpeed?: InputMaybe<Scalars['Float']['input']>;
  speed?: InputMaybe<Scalars['Float']['input']>;
  static?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryPlayerFlagsArgs = {
  OnlySetByServer?: InputMaybe<Scalars['Int']['input']>;
  SessionOnly?: InputMaybe<Scalars['Int']['input']>;
  SessionZoneOnly?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerStatisticsArgs = {
  gate_version?: InputMaybe<FeatureGating>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  statID?: InputMaybe<Scalars['Int']['input']>;
  statStr_de_DE?: InputMaybe<Scalars['String']['input']>;
  statStr_en_GB?: InputMaybe<Scalars['String']['input']>;
  statStr_en_US?: InputMaybe<Scalars['String']['input']>;
  statStr_loc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPossessableComponentArgs = {
  attachOffsetFwd?: InputMaybe<Scalars['Float']['input']>;
  attachOffsetRight?: InputMaybe<Scalars['Float']['input']>;
  billboardOffsetUp?: InputMaybe<Scalars['Float']['input']>;
  controlSchemeID?: InputMaybe<ControlSchemes>;
  depossessOnHit?: InputMaybe<Scalars['Int']['input']>;
  hitStunTime?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  minifigAttachAnimation?: InputMaybe<Scalars['String']['input']>;
  minifigAttachPoint?: InputMaybe<Scalars['String']['input']>;
  minifigDetachAnimation?: InputMaybe<Scalars['String']['input']>;
  mountAttachAnimation?: InputMaybe<Scalars['String']['input']>;
  mountDetachAnimation?: InputMaybe<Scalars['String']['input']>;
  possessionType?: InputMaybe<Scalars['Int']['input']>;
  skillSet?: InputMaybe<Scalars['Int']['input']>;
  wantBillboard?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPreconditionsArgs = {
  FailureReason_de_DE?: InputMaybe<Scalars['String']['input']>;
  FailureReason_en_GB?: InputMaybe<Scalars['String']['input']>;
  FailureReason_en_US?: InputMaybe<Scalars['String']['input']>;
  FailureReason_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  iconID?: InputMaybe<Icons>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  targetCount?: InputMaybe<Scalars['Int']['input']>;
  targetGroup?: InputMaybe<Scalars['String']['input']>;
  targetLOT?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  validContexts?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPropertyEntranceComponentArgs = {
  groupType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isOnProperty?: InputMaybe<Scalars['Int']['input']>;
  mapID?: InputMaybe<ZoneTable>;
  propertyName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPropertyTemplateArgs = {
  achievementRequired?: InputMaybe<Scalars['Int']['input']>;
  cloneLimit?: InputMaybe<Scalars['Int']['input']>;
  description_de_DE?: InputMaybe<Scalars['String']['input']>;
  description_en_GB?: InputMaybe<Scalars['String']['input']>;
  description_en_US?: InputMaybe<Scalars['String']['input']>;
  description_loc?: InputMaybe<Scalars['String']['input']>;
  durationType?: InputMaybe<Scalars['Int']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  mapID?: InputMaybe<ZoneTable>;
  maxBuildHeight?: InputMaybe<Scalars['Float']['input']>;
  minimumPrice?: InputMaybe<Scalars['Int']['input']>;
  name_de_DE?: InputMaybe<Scalars['String']['input']>;
  name_en_GB?: InputMaybe<Scalars['String']['input']>;
  name_en_US?: InputMaybe<Scalars['String']['input']>;
  name_loc?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  rentDuration?: InputMaybe<Scalars['Int']['input']>;
  reputationPerMinute?: InputMaybe<Scalars['Int']['input']>;
  sizecode?: InputMaybe<Scalars['Int']['input']>;
  spawnName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  vendorMapID?: InputMaybe<ZoneTable>;
  zoneX?: InputMaybe<Scalars['Float']['input']>;
  zoneY?: InputMaybe<Scalars['Float']['input']>;
  zoneZ?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryProximityMonitorComponentArgs = {
  LoadOnClient?: InputMaybe<Scalars['Int']['input']>;
  LoadOnServer?: InputMaybe<Scalars['Int']['input']>;
  Proximities?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProximityTypesArgs = {
  CollisionGroup?: InputMaybe<Scalars['Int']['input']>;
  IconID?: InputMaybe<Icons>;
  LoadOnClient?: InputMaybe<Scalars['Int']['input']>;
  LoadOnServer?: InputMaybe<Scalars['Int']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PassiveChecks?: InputMaybe<Scalars['Int']['input']>;
  Radius?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRacingModuleComponentArgs = {
  acceleration?: InputMaybe<Scalars['Float']['input']>;
  handling?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imagination?: InputMaybe<Scalars['Float']['input']>;
  stability?: InputMaybe<Scalars['Float']['input']>;
  topSpeed?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryRailActivatorComponentArgs = {
  DamageImmune?: InputMaybe<Scalars['Int']['input']>;
  NoAggro?: InputMaybe<Scalars['Int']['input']>;
  ShowNameBillboard?: InputMaybe<Scalars['Int']['input']>;
  StartEffectID?: InputMaybe<Scalars['String']['input']>;
  StopEffectID?: InputMaybe<Scalars['String']['input']>;
  cameraLocked?: InputMaybe<Scalars['Int']['input']>;
  effectIDs?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  loopAnim?: InputMaybe<Scalars['String']['input']>;
  loopSound?: InputMaybe<Scalars['String']['input']>;
  playerCollision?: InputMaybe<Scalars['Int']['input']>;
  preconditions?: InputMaybe<Scalars['String']['input']>;
  startAnim?: InputMaybe<Scalars['String']['input']>;
  startSound?: InputMaybe<Scalars['String']['input']>;
  stopAnim?: InputMaybe<Scalars['String']['input']>;
  stopSound?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRarityTableArgs = {
  RarityTableIndex?: InputMaybe<RarityTableIndex>;
  SmashableChain?: InputMaybe<Array<SmashableChain>>;
  SmashableChain_rarityTableIndex?: InputMaybe<Array<SmashableChain>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  randmax?: InputMaybe<Scalars['Float']['input']>;
  rarity?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRarityTableIndexArgs = {
  RarityTable?: InputMaybe<Array<RarityTable>>;
  RarityTableIndex?: InputMaybe<Scalars['Int']['input']>;
  RarityTable_RarityTableIndex?: InputMaybe<Array<RarityTable>>;
};


export type QueryRebuildComponentArgs = {
  activityID?: InputMaybe<Activities>;
  complete_time?: InputMaybe<Scalars['Float']['input']>;
  custom_modules?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interruptible?: InputMaybe<Scalars['Int']['input']>;
  post_imagination_cost?: InputMaybe<Scalars['Int']['input']>;
  reset_time?: InputMaybe<Scalars['Float']['input']>;
  self_activator?: InputMaybe<Scalars['Int']['input']>;
  take_imagination?: InputMaybe<Scalars['Int']['input']>;
  time_before_smash?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryRebuildSectionsArgs = {
  bPlaced?: InputMaybe<Scalars['Int']['input']>;
  fall_angle_x?: InputMaybe<Scalars['Float']['input']>;
  fall_angle_y?: InputMaybe<Scalars['Float']['input']>;
  fall_angle_z?: InputMaybe<Scalars['Float']['input']>;
  fall_height?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  objectID?: InputMaybe<Objects>;
  offset_x?: InputMaybe<Scalars['Float']['input']>;
  offset_y?: InputMaybe<Scalars['Float']['input']>;
  offset_z?: InputMaybe<Scalars['Float']['input']>;
  rebuildID?: InputMaybe<Scalars['Int']['input']>;
  requires_list?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRelease_VersionArgs = {
  ReleaseDate?: InputMaybe<Scalars['Int']['input']>;
  ReleaseVersion?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRenderComponentArgs = {
  AudioMetaEventSet?: InputMaybe<Scalars['String']['input']>;
  IconID?: InputMaybe<Icons>;
  LXFMLFolder?: InputMaybe<Scalars['String']['input']>;
  Objects?: InputMaybe<Array<Objects>>;
  Objects_renderComponent?: InputMaybe<Array<Objects>>;
  animationFlag?: InputMaybe<Scalars['Int']['input']>;
  animationGroupIDs?: InputMaybe<Scalars['String']['input']>;
  attachIndicatorsToNode?: InputMaybe<Scalars['Int']['input']>;
  billboardHeight?: InputMaybe<Scalars['Float']['input']>;
  chatBubbleOffset?: InputMaybe<Scalars['Float']['input']>;
  effect1?: InputMaybe<Scalars['Int']['input']>;
  effect2?: InputMaybe<Scalars['Int']['input']>;
  effect3?: InputMaybe<Scalars['Int']['input']>;
  effect4?: InputMaybe<Scalars['Int']['input']>;
  effect5?: InputMaybe<Scalars['Int']['input']>;
  effect6?: InputMaybe<Scalars['Int']['input']>;
  fade?: InputMaybe<Scalars['Int']['input']>;
  fadeInTime?: InputMaybe<Scalars['Float']['input']>;
  gradualSnap?: InputMaybe<Scalars['Int']['input']>;
  icon_asset?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ignoreCameraCollision?: InputMaybe<Scalars['Int']['input']>;
  maxShadowDistance?: InputMaybe<Scalars['Float']['input']>;
  preloadAnimations?: InputMaybe<Scalars['Int']['input']>;
  renderComponentLOD1?: InputMaybe<Scalars['Int']['input']>;
  renderComponentLOD2?: InputMaybe<Scalars['Int']['input']>;
  render_asset?: InputMaybe<Scalars['String']['input']>;
  shader_id?: InputMaybe<Scalars['Int']['input']>;
  staticBillboard?: InputMaybe<Scalars['Int']['input']>;
  usedropshadow?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRenderComponentFlashArgs = {
  _uid?: InputMaybe<Scalars['Int']['input']>;
  animated?: InputMaybe<Scalars['Int']['input']>;
  elementName?: InputMaybe<Scalars['String']['input']>;
  flashPath?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interactive?: InputMaybe<Scalars['Int']['input']>;
  nodeName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRenderComponentWrapperArgs = {
  defaultWrapperAsset?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRenderIconAssetsArgs = {
  blank_column?: InputMaybe<Scalars['String']['input']>;
  icon_asset?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReputationRewardsArgs = {
  repLevel?: InputMaybe<Scalars['Int']['input']>;
  reputation?: InputMaybe<Scalars['Float']['input']>;
  sublevel?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRewardCodesArgs = {
  attachmentLOT?: InputMaybe<Objects>;
  bodyText_de_DE?: InputMaybe<Scalars['String']['input']>;
  bodyText_en_GB?: InputMaybe<Scalars['String']['input']>;
  bodyText_en_US?: InputMaybe<Scalars['String']['input']>;
  bodyText_loc?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  subjectText_de_DE?: InputMaybe<Scalars['String']['input']>;
  subjectText_en_GB?: InputMaybe<Scalars['String']['input']>;
  subjectText_en_US?: InputMaybe<Scalars['String']['input']>;
  subjectText_loc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRewardsArgs = {
  LevelID?: InputMaybe<Scalars['Int']['input']>;
  MissionID?: InputMaybe<Scalars['Int']['input']>;
  RewardType?: InputMaybe<Scalars['Int']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRocketLaunchpadControlComponentArgs = {
  altLandingPrecondition?: InputMaybe<Scalars['String']['input']>;
  altLandingSpawnPointName?: InputMaybe<Scalars['String']['input']>;
  defaultZoneID?: InputMaybe<ZoneTable>;
  gmLevel?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  launchMusic?: InputMaybe<Scalars['String']['input']>;
  launchPrecondition?: InputMaybe<Scalars['String']['input']>;
  playerAnimation?: InputMaybe<Scalars['String']['input']>;
  rocketAnimation?: InputMaybe<Scalars['String']['input']>;
  targetScene?: InputMaybe<Scalars['String']['input']>;
  targetZone?: InputMaybe<ZoneTable>;
  useAltLandingPrecondition?: InputMaybe<Scalars['Int']['input']>;
  useLaunchPrecondition?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySceneTableArgs = {
  sceneID?: InputMaybe<Scalars['Int']['input']>;
  sceneName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryScriptComponentArgs = {
  client_script_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  script_name?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySkillBehaviorArgs = {
  ItemSetSkills?: InputMaybe<Array<ItemSetSkills>>;
  ItemSetSkills_SkillID?: InputMaybe<Array<ItemSetSkills>>;
  ObjectSkills?: InputMaybe<Array<ObjectSkills>>;
  ObjectSkills_skillID?: InputMaybe<Array<ObjectSkills>>;
  armorBonusUI?: InputMaybe<Scalars['Int']['input']>;
  behaviorID?: InputMaybe<Scalars['Int']['input']>;
  cancelType?: InputMaybe<Scalars['Int']['input']>;
  castTypeDesc?: InputMaybe<Scalars['Int']['input']>;
  cooldown?: InputMaybe<Scalars['Float']['input']>;
  cooldowngroup?: InputMaybe<Scalars['Int']['input']>;
  damageUI?: InputMaybe<Scalars['Int']['input']>;
  descriptionUI_de_DE?: InputMaybe<Scalars['String']['input']>;
  descriptionUI_en_GB?: InputMaybe<Scalars['String']['input']>;
  descriptionUI_en_US?: InputMaybe<Scalars['String']['input']>;
  descriptionUI_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  hideIcon?: InputMaybe<Scalars['Int']['input']>;
  imBonusUI?: InputMaybe<Scalars['Int']['input']>;
  imaginationcost?: InputMaybe<Scalars['Int']['input']>;
  inNpcEditor?: InputMaybe<Scalars['Int']['input']>;
  lifeBonusUI?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  name_de_DE?: InputMaybe<Scalars['String']['input']>;
  name_en_GB?: InputMaybe<Scalars['String']['input']>;
  name_en_US?: InputMaybe<Scalars['String']['input']>;
  name_loc?: InputMaybe<Scalars['String']['input']>;
  oomBehaviorEffectID?: InputMaybe<Scalars['Int']['input']>;
  oomSkillID?: InputMaybe<Scalars['String']['input']>;
  skillID?: InputMaybe<Scalars['Int']['input']>;
  skillIcon?: InputMaybe<Icons>;
};


export type QuerySmashableChainArgs = {
  chainIndex?: InputMaybe<Scalars['Int']['input']>;
  chainLevel?: InputMaybe<Scalars['Int']['input']>;
  chainStepID?: InputMaybe<Scalars['Int']['input']>;
  currencyIndex?: InputMaybe<Scalars['Int']['input']>;
  currencyLevel?: InputMaybe<Scalars['Int']['input']>;
  lootMatrixID?: InputMaybe<LootMatrix>;
  rarityTableIndex?: InputMaybe<RarityTable>;
  smashCount?: InputMaybe<Scalars['Int']['input']>;
  timeLimit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySmashableChainIndexArgs = {
  continuous?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  targetGroup?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySmashableComponentArgs = {
  LootMatrixIndex?: InputMaybe<LootMatrix>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySmashableElementsArgs = {
  dropWeight?: InputMaybe<Scalars['Int']['input']>;
  elementID?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySpeedchatMenuArgs = {
  emoteId?: InputMaybe<Emotes>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imageName?: InputMaybe<Scalars['String']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  menuText_de_DE?: InputMaybe<Scalars['String']['input']>;
  menuText_en_GB?: InputMaybe<Scalars['String']['input']>;
  menuText_en_US?: InputMaybe<Scalars['String']['input']>;
  menuText_loc?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubscriptionPricingArgs = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  monetarySymbol?: InputMaybe<Scalars['Int']['input']>;
  monthlyFeeBronze?: InputMaybe<Scalars['String']['input']>;
  monthlyFeeGold?: InputMaybe<Scalars['String']['input']>;
  monthlyFeeSilver?: InputMaybe<Scalars['String']['input']>;
  symbolIsAppended?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySurfaceTypeArgs = {
  FootstepNDAudioMetaEventSetName?: InputMaybe<Scalars['String']['input']>;
  SurfaceType?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTamingBuildPuzzlesArgs = {
  Difficulty?: InputMaybe<Scalars['Int']['input']>;
  Duration?: InputMaybe<Scalars['Float']['input']>;
  FullModelLXF?: InputMaybe<Scalars['String']['input']>;
  InvalidPiecesLXF?: InputMaybe<Scalars['String']['input']>;
  ModelName?: InputMaybe<Scalars['String']['input']>;
  NPCLot?: InputMaybe<Objects>;
  NumValidPieces?: InputMaybe<Scalars['Int']['input']>;
  PuzzleModelLot?: InputMaybe<Objects>;
  Timelimit?: InputMaybe<Scalars['Int']['input']>;
  TotalNumPieces?: InputMaybe<Scalars['Int']['input']>;
  ValidPiecesLXF?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imagCostPerBuild?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTextDescriptionArgs = {
  TestDescription?: InputMaybe<Scalars['String']['input']>;
  TextID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTextLanguageArgs = {
  LanguageID?: InputMaybe<Scalars['Int']['input']>;
  Text?: InputMaybe<Scalars['String']['input']>;
  TextID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrailEffectsArgs = {
  birthDelay?: InputMaybe<Scalars['Float']['input']>;
  blendmode?: InputMaybe<Scalars['Int']['input']>;
  bone1?: InputMaybe<Scalars['String']['input']>;
  bone2?: InputMaybe<Scalars['String']['input']>;
  cardlifetime?: InputMaybe<Scalars['Float']['input']>;
  colorlifetime?: InputMaybe<Scalars['Float']['input']>;
  deathDelay?: InputMaybe<Scalars['Float']['input']>;
  endColorA?: InputMaybe<Scalars['Float']['input']>;
  endColorB?: InputMaybe<Scalars['Float']['input']>;
  endColorG?: InputMaybe<Scalars['Float']['input']>;
  endColorR?: InputMaybe<Scalars['Float']['input']>;
  max_particles?: InputMaybe<Scalars['Int']['input']>;
  middleColorA?: InputMaybe<Scalars['Float']['input']>;
  middleColorB?: InputMaybe<Scalars['Float']['input']>;
  middleColorG?: InputMaybe<Scalars['Float']['input']>;
  middleColorR?: InputMaybe<Scalars['Float']['input']>;
  minTailFade?: InputMaybe<Scalars['Float']['input']>;
  startColorA?: InputMaybe<Scalars['Float']['input']>;
  startColorB?: InputMaybe<Scalars['Float']['input']>;
  startColorG?: InputMaybe<Scalars['Float']['input']>;
  startColorR?: InputMaybe<Scalars['Float']['input']>;
  tailFade?: InputMaybe<Scalars['Float']['input']>;
  texLength?: InputMaybe<Scalars['Float']['input']>;
  texWidth?: InputMaybe<Scalars['Float']['input']>;
  textureName?: InputMaybe<Scalars['String']['input']>;
  trailID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUgBehaviorSoundsArgs = {
  gate_version?: InputMaybe<FeatureGating>;
  guid?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  name_de_DE?: InputMaybe<Scalars['String']['input']>;
  name_en_GB?: InputMaybe<Scalars['String']['input']>;
  name_en_US?: InputMaybe<Scalars['String']['input']>;
  name_loc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVehiclePhysicsArgs = {
  AudioAirtimeForHeavyLand?: InputMaybe<Scalars['Float']['input']>;
  AudioAirtimeForLightLand?: InputMaybe<Scalars['Float']['input']>;
  AudioEventEngine?: InputMaybe<Scalars['String']['input']>;
  AudioEventHeavyHit?: InputMaybe<Scalars['String']['input']>;
  AudioEventHeavyLand?: InputMaybe<Scalars['String']['input']>;
  AudioEventLightHit?: InputMaybe<Scalars['String']['input']>;
  AudioEventLightLand?: InputMaybe<Scalars['String']['input']>;
  AudioEventSkid?: InputMaybe<Scalars['String']['input']>;
  AudioEventStart?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadConcrete?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadDirt?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadGrass?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadGravel?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadIce?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadLeaves?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadMetal?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadMud?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadPlastic?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadSand?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadSnow?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadWater?: InputMaybe<Scalars['String']['input']>;
  AudioEventTreadWood?: InputMaybe<Scalars['String']['input']>;
  AudioSpeedThresholdHeavyHit?: InputMaybe<Scalars['Float']['input']>;
  AudioSpeedThresholdLightHit?: InputMaybe<Scalars['Float']['input']>;
  AudioTimeoutHeavyHit?: InputMaybe<Scalars['Float']['input']>;
  AudioTimeoutLightHit?: InputMaybe<Scalars['Float']['input']>;
  bWheelsVisible?: InputMaybe<Scalars['Int']['input']>;
  fAeroAirDensity?: InputMaybe<Scalars['Float']['input']>;
  fAeroDragCoefficient?: InputMaybe<Scalars['Float']['input']>;
  fAeroExtraGravity?: InputMaybe<Scalars['Float']['input']>;
  fAeroFrontalArea?: InputMaybe<Scalars['Float']['input']>;
  fAeroLiftCoefficient?: InputMaybe<Scalars['Float']['input']>;
  fBoostAccelerateChange?: InputMaybe<Scalars['Float']['input']>;
  fBoostCostPerSecond?: InputMaybe<Scalars['Float']['input']>;
  fBoostDampingChange?: InputMaybe<Scalars['Float']['input']>;
  fBoostTopSpeed?: InputMaybe<Scalars['Float']['input']>;
  fBrakeFrontTorque?: InputMaybe<Scalars['Float']['input']>;
  fBrakeMinInputToBlock?: InputMaybe<Scalars['Float']['input']>;
  fBrakeMinTimeToBlock?: InputMaybe<Scalars['Float']['input']>;
  fBrakeRearTorque?: InputMaybe<Scalars['Float']['input']>;
  fCenterOfMassFwd?: InputMaybe<Scalars['Float']['input']>;
  fCenterOfMassRight?: InputMaybe<Scalars['Float']['input']>;
  fCenterOfMassUp?: InputMaybe<Scalars['Float']['input']>;
  fChassisFriction?: InputMaybe<Scalars['Float']['input']>;
  fCollisionSpinDamping?: InputMaybe<Scalars['Float']['input']>;
  fCollisionThreshold?: InputMaybe<Scalars['Float']['input']>;
  fEngineTorque?: InputMaybe<Scalars['Float']['input']>;
  fExtraTorqueFactor?: InputMaybe<Scalars['Float']['input']>;
  fFrontTireFriction?: InputMaybe<Scalars['Float']['input']>;
  fFrontTireFrictionSlide?: InputMaybe<Scalars['Float']['input']>;
  fFrontTireSlipAngle?: InputMaybe<Scalars['Float']['input']>;
  fFwdBias?: InputMaybe<Scalars['Float']['input']>;
  fGravityScale?: InputMaybe<Scalars['Float']['input']>;
  fImaginationTankSize?: InputMaybe<Scalars['Float']['input']>;
  fInertiaPitch?: InputMaybe<Scalars['Float']['input']>;
  fInertiaRoll?: InputMaybe<Scalars['Float']['input']>;
  fInertiaYaw?: InputMaybe<Scalars['Float']['input']>;
  fInputAccelSpeed?: InputMaybe<Scalars['Float']['input']>;
  fInputDeadAccelDownSpeed?: InputMaybe<Scalars['Float']['input']>;
  fInputDeadDecelDownSpeed?: InputMaybe<Scalars['Float']['input']>;
  fInputDeadTurnBackSpeed?: InputMaybe<Scalars['Float']['input']>;
  fInputDeadZone?: InputMaybe<Scalars['Float']['input']>;
  fInputDecelSpeed?: InputMaybe<Scalars['Float']['input']>;
  fInputInitialSlope?: InputMaybe<Scalars['Float']['input']>;
  fInputSlopeChangePointX?: InputMaybe<Scalars['Float']['input']>;
  fInputTurnSpeed?: InputMaybe<Scalars['Float']['input']>;
  fMass?: InputMaybe<Scalars['Float']['input']>;
  fMaxSpeed?: InputMaybe<Scalars['Float']['input']>;
  fNormalSpinDamping?: InputMaybe<Scalars['Float']['input']>;
  fPowerslideNeutralAngle?: InputMaybe<Scalars['Float']['input']>;
  fPowerslideTorqueStrength?: InputMaybe<Scalars['Float']['input']>;
  fRearTireFriction?: InputMaybe<Scalars['Float']['input']>;
  fRearTireFrictionSlide?: InputMaybe<Scalars['Float']['input']>;
  fRearTireSlipAngle?: InputMaybe<Scalars['Float']['input']>;
  fReorientPitchStrength?: InputMaybe<Scalars['Float']['input']>;
  fReorientRollStrength?: InputMaybe<Scalars['Float']['input']>;
  fSkillCost?: InputMaybe<Scalars['Float']['input']>;
  fSteeringMaxAngle?: InputMaybe<Scalars['Float']['input']>;
  fSteeringMinAngle?: InputMaybe<Scalars['Float']['input']>;
  fSteeringSpeedLimitForMaxAngle?: InputMaybe<Scalars['Float']['input']>;
  fSuspensionDampingCompression?: InputMaybe<Scalars['Float']['input']>;
  fSuspensionDampingRelaxation?: InputMaybe<Scalars['Float']['input']>;
  fSuspensionLength?: InputMaybe<Scalars['Float']['input']>;
  fSuspensionStrength?: InputMaybe<Scalars['Float']['input']>;
  fTorquePitchFactor?: InputMaybe<Scalars['Float']['input']>;
  fTorqueRollFactor?: InputMaybe<Scalars['Float']['input']>;
  fTorqueYawFactor?: InputMaybe<Scalars['Float']['input']>;
  fWheelHardpointFrontFwd?: InputMaybe<Scalars['Float']['input']>;
  fWheelHardpointFrontRight?: InputMaybe<Scalars['Float']['input']>;
  fWheelHardpointFrontUp?: InputMaybe<Scalars['Float']['input']>;
  fWheelHardpointRearFwd?: InputMaybe<Scalars['Float']['input']>;
  fWheelHardpointRearRight?: InputMaybe<Scalars['Float']['input']>;
  fWheelHardpointRearUp?: InputMaybe<Scalars['Float']['input']>;
  fWheelMass?: InputMaybe<Scalars['Float']['input']>;
  fWheelRadius?: InputMaybe<Scalars['Float']['input']>;
  fWheelWidth?: InputMaybe<Scalars['Float']['input']>;
  fWreckMinAngle?: InputMaybe<Scalars['Float']['input']>;
  fWreckSpeedBase?: InputMaybe<Scalars['Float']['input']>;
  fWreckSpeedPercent?: InputMaybe<Scalars['Float']['input']>;
  hkxFilename?: InputMaybe<Scalars['String']['input']>;
  iChassisCollisionGroup?: InputMaybe<Scalars['Int']['input']>;
  iPowerslideNumTorqueApplications?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVehicleStatMapArgs = {
  HavokChangePerModuleStat?: InputMaybe<Scalars['Float']['input']>;
  HavokStat?: InputMaybe<Scalars['String']['input']>;
  ModuleStat?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVendorComponentArgs = {
  LootMatrixIndex?: InputMaybe<LootMatrix>;
  buyScalar?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  refreshTimeSeconds?: InputMaybe<Scalars['Float']['input']>;
  sellScalar?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryWhatsCoolItemSpotlightArgs = {
  description_de_DE?: InputMaybe<Scalars['String']['input']>;
  description_en_GB?: InputMaybe<Scalars['String']['input']>;
  description_en_US?: InputMaybe<Scalars['String']['input']>;
  description_loc?: InputMaybe<Scalars['String']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itemID?: InputMaybe<Objects>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWhatsCoolNewsAndTipsArgs = {
  gate_version?: InputMaybe<FeatureGating>;
  iconID?: InputMaybe<Icons>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  storyTitle_de_DE?: InputMaybe<Scalars['String']['input']>;
  storyTitle_en_GB?: InputMaybe<Scalars['String']['input']>;
  storyTitle_en_US?: InputMaybe<Scalars['String']['input']>;
  storyTitle_loc?: InputMaybe<Scalars['String']['input']>;
  text_de_DE?: InputMaybe<Scalars['String']['input']>;
  text_en_GB?: InputMaybe<Scalars['String']['input']>;
  text_en_US?: InputMaybe<Scalars['String']['input']>;
  text_loc?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorldConfigArgs = {
  CharacterVersion?: InputMaybe<Scalars['Int']['input']>;
  LevelCap?: InputMaybe<Scalars['Int']['input']>;
  LevelCapCurrencyConversion?: InputMaybe<Scalars['Int']['input']>;
  LevelUpBehaviorEffect?: InputMaybe<Scalars['String']['input']>;
  WorldConfigID?: InputMaybe<Scalars['Int']['input']>;
  characterGroundedSpeed?: InputMaybe<Scalars['Float']['input']>;
  characterGroundedTime?: InputMaybe<Scalars['Float']['input']>;
  character_eye_height?: InputMaybe<Scalars['Float']['input']>;
  character_max_slope?: InputMaybe<Scalars['Float']['input']>;
  character_rotation_speed?: InputMaybe<Scalars['Float']['input']>;
  character_run_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  character_run_strafe_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  character_run_strafe_forward_speed?: InputMaybe<Scalars['Float']['input']>;
  character_run_strafe_speed?: InputMaybe<Scalars['Float']['input']>;
  character_votes_per_day?: InputMaybe<Scalars['Int']['input']>;
  character_walk_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  character_walk_forward_speed?: InputMaybe<Scalars['Float']['input']>;
  character_walk_strafe_backward_speed?: InputMaybe<Scalars['Float']['input']>;
  character_walk_strafe_forward_speed?: InputMaybe<Scalars['Float']['input']>;
  character_walk_strafe_speed?: InputMaybe<Scalars['Float']['input']>;
  coins_lost_on_death_max?: InputMaybe<Scalars['Int']['input']>;
  coins_lost_on_death_max_timeout?: InputMaybe<Scalars['Float']['input']>;
  coins_lost_on_death_min?: InputMaybe<Scalars['Int']['input']>;
  coins_lost_on_death_min_timeout?: InputMaybe<Scalars['Float']['input']>;
  coins_lost_on_death_percent?: InputMaybe<Scalars['Float']['input']>;
  defaultHomespaceTemplate?: InputMaybe<Scalars['Int']['input']>;
  defaultPropertyMaxHeight?: InputMaybe<Scalars['Float']['input']>;
  defaultrespawntime?: InputMaybe<Scalars['Float']['input']>;
  fReputationPerVote?: InputMaybe<Scalars['Float']['input']>;
  flight_airspeed?: InputMaybe<Scalars['Float']['input']>;
  flight_fuel_ratio?: InputMaybe<Scalars['Float']['input']>;
  flight_max_airspeed?: InputMaybe<Scalars['Float']['input']>;
  flight_vertical_velocity?: InputMaybe<Scalars['Float']['input']>;
  globalImmunityTime?: InputMaybe<Scalars['Float']['input']>;
  global_cooldown?: InputMaybe<Scalars['Float']['input']>;
  mail_base_fee?: InputMaybe<Scalars['Int']['input']>;
  mail_percent_attachment_fee?: InputMaybe<Scalars['Float']['input']>;
  mission_tooltip_timeout?: InputMaybe<Scalars['Float']['input']>;
  modelModerateOnCreate?: InputMaybe<Scalars['Int']['input']>;
  nPropertyCloneLimit?: InputMaybe<Scalars['Int']['input']>;
  pebroadphaseworldsize?: InputMaybe<Scalars['Float']['input']>;
  pegameobjscalefactor?: InputMaybe<Scalars['Float']['input']>;
  pegravityvalue?: InputMaybe<Scalars['Float']['input']>;
  pet_follow_radius?: InputMaybe<Scalars['Float']['input']>;
  propertyModRequestsAllowedInterval?: InputMaybe<Scalars['Int']['input']>;
  propertyModRequestsAllowedSpike?: InputMaybe<Scalars['Int']['input']>;
  propertyModRequestsAllowedTotal?: InputMaybe<Scalars['Int']['input']>;
  propertyModRequestsIntervalDuration?: InputMaybe<Scalars['Int']['input']>;
  propertyModRequestsSpikeDuration?: InputMaybe<Scalars['Int']['input']>;
  propertyReputationDelay?: InputMaybe<Scalars['Int']['input']>;
  property_moderation_request_approval_cost?: InputMaybe<Scalars['Int']['input']>;
  property_moderation_request_review_cost?: InputMaybe<Scalars['Int']['input']>;
  reputationPerBattlePromotion?: InputMaybe<Scalars['Float']['input']>;
  reputationPerVoteCast?: InputMaybe<Scalars['Float']['input']>;
  reputationPerVoteReceived?: InputMaybe<Scalars['Float']['input']>;
  showcaseTopModelConsiderationBattles?: InputMaybe<Scalars['Int']['input']>;
  vendor_buy_multiplier?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryZoneLoadingTipsArgs = {
  gate_version?: InputMaybe<FeatureGating>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imagelocation?: InputMaybe<Scalars['String']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  targetVersion?: InputMaybe<FeatureGating>;
  tip1_de_DE?: InputMaybe<Scalars['String']['input']>;
  tip1_en_GB?: InputMaybe<Scalars['String']['input']>;
  tip1_en_US?: InputMaybe<Scalars['String']['input']>;
  tip1_loc?: InputMaybe<Scalars['String']['input']>;
  tip2_de_DE?: InputMaybe<Scalars['String']['input']>;
  tip2_en_GB?: InputMaybe<Scalars['String']['input']>;
  tip2_en_US?: InputMaybe<Scalars['String']['input']>;
  tip2_loc?: InputMaybe<Scalars['String']['input']>;
  title_de_DE?: InputMaybe<Scalars['String']['input']>;
  title_en_GB?: InputMaybe<Scalars['String']['input']>;
  title_en_US?: InputMaybe<Scalars['String']['input']>;
  title_loc?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  zoneid?: InputMaybe<ZoneTable>;
};


export type QueryZoneSummaryArgs = {
  _uniqueID?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  zoneID?: InputMaybe<ZoneTable>;
};


export type QueryZoneTableArgs = {
  Activities?: InputMaybe<Array<Activities>>;
  Activities_instanceMapID?: InputMaybe<Array<Activities>>;
  DisplayDescription?: InputMaybe<Scalars['String']['input']>;
  DisplayDescription_de_DE?: InputMaybe<Scalars['String']['input']>;
  DisplayDescription_en_GB?: InputMaybe<Scalars['String']['input']>;
  DisplayDescription_en_US?: InputMaybe<Scalars['String']['input']>;
  DisplayDescription_loc?: InputMaybe<Scalars['String']['input']>;
  LUPZoneIDs?: InputMaybe<Array<LupZoneIDs>>;
  LUPZoneIDs_zoneID?: InputMaybe<Array<LupZoneIDs>>;
  PlayerLoseCoinsOnDeath?: InputMaybe<Scalars['Int']['input']>;
  PropertyEntranceComponent?: InputMaybe<Array<PropertyEntranceComponent>>;
  PropertyEntranceComponent_mapID?: InputMaybe<Array<PropertyEntranceComponent>>;
  PropertyTemplate_mapID?: InputMaybe<Array<PropertyTemplate>>;
  PropertyTemplate_vendorMapID?: InputMaybe<Array<PropertyTemplate>>;
  RocketLaunchpadControlComponent_defaultZoneID?: InputMaybe<Array<RocketLaunchpadControlComponent>>;
  RocketLaunchpadControlComponent_targetZone?: InputMaybe<Array<RocketLaunchpadControlComponent>>;
  ZoneLoadingTips?: InputMaybe<Array<ZoneLoadingTips>>;
  ZoneLoadingTips_zoneid?: InputMaybe<Array<ZoneLoadingTips>>;
  ZoneSummary?: InputMaybe<Array<ZoneSummary>>;
  ZoneSummary_zoneID?: InputMaybe<Array<ZoneSummary>>;
  clientPhysicsFramerate?: InputMaybe<Scalars['String']['input']>;
  disableSaveLoc?: InputMaybe<Scalars['Int']['input']>;
  fZoneWeight?: InputMaybe<Scalars['Float']['input']>;
  gate_version?: InputMaybe<FeatureGating>;
  ghostdistance?: InputMaybe<Scalars['Float']['input']>;
  ghostdistance_min?: InputMaybe<Scalars['Float']['input']>;
  heightInChunks?: InputMaybe<Scalars['Int']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  localize?: InputMaybe<Scalars['Int']['input']>;
  mapFolder?: InputMaybe<Scalars['String']['input']>;
  mixerProgram?: InputMaybe<Scalars['String']['input']>;
  mountsAllowed?: InputMaybe<Scalars['Int']['input']>;
  petsAllowed?: InputMaybe<Scalars['Int']['input']>;
  population_hard_cap?: InputMaybe<Scalars['Int']['input']>;
  population_soft_cap?: InputMaybe<Scalars['Int']['input']>;
  scriptID?: InputMaybe<Scalars['Int']['input']>;
  serverPhysicsFramerate?: InputMaybe<Scalars['String']['input']>;
  smashableMaxDistance?: InputMaybe<Scalars['Float']['input']>;
  smashableMinDistance?: InputMaybe<Scalars['Float']['input']>;
  summary_de_DE?: InputMaybe<Scalars['String']['input']>;
  summary_en_GB?: InputMaybe<Scalars['String']['input']>;
  summary_en_US?: InputMaybe<Scalars['String']['input']>;
  summary_loc?: InputMaybe<Scalars['String']['input']>;
  teamRadius?: InputMaybe<Scalars['Float']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  widthInChunks?: InputMaybe<Scalars['Int']['input']>;
  zoneControlTemplate?: InputMaybe<Scalars['Int']['input']>;
  zoneID?: InputMaybe<Scalars['Int']['input']>;
  zoneName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBrickAttributesArgs = {
  ID?: InputMaybe<Scalars['Int']['input']>;
  display_order?: InputMaybe<Scalars['Int']['input']>;
  icon_asset?: InputMaybe<Scalars['String']['input']>;
  locStatus?: InputMaybe<Scalars['Int']['input']>;
  name_de_DE?: InputMaybe<Scalars['String']['input']>;
  name_en_GB?: InputMaybe<Scalars['String']['input']>;
  name_en_US?: InputMaybe<Scalars['String']['input']>;
  name_loc?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDtpropertiesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lvalue?: InputMaybe<Scalars['String']['input']>;
  objectid?: InputMaybe<Scalars['Int']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  uvalue?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapAnimationPrioritiesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryMapAssetTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  pathdir?: InputMaybe<Scalars['String']['input']>;
  typelabel?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMapIconArgs = {
  LOT?: InputMaybe<Objects>;
  iconID?: InputMaybe<Icons>;
  iconState?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapItemTypesArgs = {
  ItemComponent?: InputMaybe<Array<ItemComponent>>;
  ItemComponent_itemType?: InputMaybe<Array<ItemComponent>>;
  description?: InputMaybe<Scalars['String']['input']>;
  equipLocation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapRenderEffectsArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  gameID?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapShadersArgs = {
  gameValue?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapTextureResourceArgs = {
  SurfaceType?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  texturepath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMap_BlueprintCategoryArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySysdiagramsArgs = {
  definition?: InputMaybe<Scalars['String']['input']>;
  diagram_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  principal_id?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type RacingModuleComponent = {
  __typename?: 'RacingModuleComponent';
  acceleration?: Maybe<Scalars['Float']['output']>;
  handling?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imagination?: Maybe<Scalars['Float']['output']>;
  stability?: Maybe<Scalars['Float']['output']>;
  topSpeed?: Maybe<Scalars['Float']['output']>;
};

export type RailActivatorComponent = {
  __typename?: 'RailActivatorComponent';
  DamageImmune?: Maybe<Scalars['Int']['output']>;
  NoAggro?: Maybe<Scalars['Int']['output']>;
  ShowNameBillboard?: Maybe<Scalars['Int']['output']>;
  StartEffectID?: Maybe<Scalars['String']['output']>;
  StopEffectID?: Maybe<Scalars['String']['output']>;
  cameraLocked?: Maybe<Scalars['Int']['output']>;
  effectIDs?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  loopAnim?: Maybe<Scalars['String']['output']>;
  loopSound?: Maybe<Scalars['String']['output']>;
  playerCollision?: Maybe<Scalars['Int']['output']>;
  preconditions?: Maybe<Scalars['String']['output']>;
  startAnim?: Maybe<Scalars['String']['output']>;
  startSound?: Maybe<Scalars['String']['output']>;
  stopAnim?: Maybe<Scalars['String']['output']>;
  stopSound?: Maybe<Scalars['String']['output']>;
};

export type RarityTable = {
  __typename?: 'RarityTable';
  RarityTableIndex?: Maybe<RarityTableIndex>;
  SmashableChain: Array<SmashableChain>;
  SmashableChain_rarityTableIndex: Array<SmashableChain>;
  id?: Maybe<Scalars['Int']['output']>;
  randmax?: Maybe<Scalars['Float']['output']>;
  rarity?: Maybe<Scalars['Int']['output']>;
};

export type RarityTableIndex = {
  __typename?: 'RarityTableIndex';
  RarityTable: Array<RarityTable>;
  RarityTableIndex?: Maybe<Scalars['Int']['output']>;
  RarityTable_RarityTableIndex: Array<RarityTable>;
};

export type RebuildComponent = {
  __typename?: 'RebuildComponent';
  activityID?: Maybe<Activities>;
  complete_time?: Maybe<Scalars['Float']['output']>;
  custom_modules?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interruptible?: Maybe<Scalars['Int']['output']>;
  post_imagination_cost?: Maybe<Scalars['Int']['output']>;
  reset_time?: Maybe<Scalars['Float']['output']>;
  self_activator?: Maybe<Scalars['Int']['output']>;
  take_imagination?: Maybe<Scalars['Int']['output']>;
  time_before_smash?: Maybe<Scalars['Float']['output']>;
};

export type RebuildSections = {
  __typename?: 'RebuildSections';
  bPlaced?: Maybe<Scalars['Int']['output']>;
  fall_angle_x?: Maybe<Scalars['Float']['output']>;
  fall_angle_y?: Maybe<Scalars['Float']['output']>;
  fall_angle_z?: Maybe<Scalars['Float']['output']>;
  fall_height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectID?: Maybe<Objects>;
  offset_x?: Maybe<Scalars['Float']['output']>;
  offset_y?: Maybe<Scalars['Float']['output']>;
  offset_z?: Maybe<Scalars['Float']['output']>;
  rebuildID?: Maybe<Scalars['Int']['output']>;
  requires_list?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type Release_Version = {
  __typename?: 'Release_Version';
  ReleaseDate?: Maybe<Scalars['Int']['output']>;
  ReleaseVersion?: Maybe<Scalars['String']['output']>;
};

export type RenderComponent = {
  __typename?: 'RenderComponent';
  AudioMetaEventSet?: Maybe<Scalars['String']['output']>;
  IconID?: Maybe<Icons>;
  LXFMLFolder?: Maybe<Scalars['String']['output']>;
  Objects: Array<Objects>;
  Objects_renderComponent: Array<Objects>;
  animationFlag?: Maybe<Scalars['Int']['output']>;
  animationGroupIDs?: Maybe<Scalars['String']['output']>;
  attachIndicatorsToNode?: Maybe<Scalars['Int']['output']>;
  billboardHeight?: Maybe<Scalars['Float']['output']>;
  chatBubbleOffset?: Maybe<Scalars['Float']['output']>;
  effect1?: Maybe<Scalars['Int']['output']>;
  effect2?: Maybe<Scalars['Int']['output']>;
  effect3?: Maybe<Scalars['Int']['output']>;
  effect4?: Maybe<Scalars['Int']['output']>;
  effect5?: Maybe<Scalars['Int']['output']>;
  effect6?: Maybe<Scalars['Int']['output']>;
  fade?: Maybe<Scalars['Int']['output']>;
  fadeInTime?: Maybe<Scalars['Float']['output']>;
  gradualSnap?: Maybe<Scalars['Int']['output']>;
  icon_asset?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ignoreCameraCollision?: Maybe<Scalars['Int']['output']>;
  maxShadowDistance?: Maybe<Scalars['Float']['output']>;
  preloadAnimations?: Maybe<Scalars['Int']['output']>;
  renderComponentLOD1?: Maybe<Scalars['Int']['output']>;
  renderComponentLOD2?: Maybe<Scalars['Int']['output']>;
  render_asset?: Maybe<Scalars['String']['output']>;
  shader_id?: Maybe<Scalars['Int']['output']>;
  staticBillboard?: Maybe<Scalars['Int']['output']>;
  usedropshadow?: Maybe<Scalars['Int']['output']>;
};

export type RenderComponentFlash = {
  __typename?: 'RenderComponentFlash';
  _uid?: Maybe<Scalars['Int']['output']>;
  animated?: Maybe<Scalars['Int']['output']>;
  elementName?: Maybe<Scalars['String']['output']>;
  flashPath?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interactive?: Maybe<Scalars['Int']['output']>;
  nodeName?: Maybe<Scalars['String']['output']>;
};

export type RenderComponentWrapper = {
  __typename?: 'RenderComponentWrapper';
  defaultWrapperAsset?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type RenderIconAssets = {
  __typename?: 'RenderIconAssets';
  blank_column?: Maybe<Scalars['String']['output']>;
  icon_asset?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ReputationRewards = {
  __typename?: 'ReputationRewards';
  repLevel?: Maybe<Scalars['Int']['output']>;
  reputation?: Maybe<Scalars['Float']['output']>;
  sublevel?: Maybe<Scalars['Int']['output']>;
};

export type RewardCodes = {
  __typename?: 'RewardCodes';
  attachmentLOT?: Maybe<Objects>;
  bodyText_de_DE?: Maybe<Scalars['String']['output']>;
  bodyText_en_GB?: Maybe<Scalars['String']['output']>;
  bodyText_en_US?: Maybe<Scalars['String']['output']>;
  bodyText_loc?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  subjectText_de_DE?: Maybe<Scalars['String']['output']>;
  subjectText_en_GB?: Maybe<Scalars['String']['output']>;
  subjectText_en_US?: Maybe<Scalars['String']['output']>;
  subjectText_loc?: Maybe<Scalars['String']['output']>;
};

export type Rewards = {
  __typename?: 'Rewards';
  LevelID?: Maybe<Scalars['Int']['output']>;
  MissionID?: Maybe<Scalars['Int']['output']>;
  RewardType?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type RocketLaunchpadControlComponent = {
  __typename?: 'RocketLaunchpadControlComponent';
  altLandingPrecondition?: Maybe<Scalars['String']['output']>;
  altLandingSpawnPointName?: Maybe<Scalars['String']['output']>;
  defaultZoneID?: Maybe<ZoneTable>;
  gmLevel?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  launchMusic?: Maybe<Scalars['String']['output']>;
  launchPrecondition?: Maybe<Scalars['String']['output']>;
  playerAnimation?: Maybe<Scalars['String']['output']>;
  rocketAnimation?: Maybe<Scalars['String']['output']>;
  targetScene?: Maybe<Scalars['String']['output']>;
  targetZone?: Maybe<ZoneTable>;
  useAltLandingPrecondition?: Maybe<Scalars['Int']['output']>;
  useLaunchPrecondition?: Maybe<Scalars['Int']['output']>;
};

export type SceneTable = {
  __typename?: 'SceneTable';
  sceneID?: Maybe<Scalars['Int']['output']>;
  sceneName?: Maybe<Scalars['String']['output']>;
};

export type ScriptComponent = {
  __typename?: 'ScriptComponent';
  client_script_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  script_name?: Maybe<Scalars['String']['output']>;
};

export type SkillBehavior = {
  __typename?: 'SkillBehavior';
  ItemSetSkills: Array<ItemSetSkills>;
  ItemSetSkills_SkillID: Array<ItemSetSkills>;
  ObjectSkills: Array<ObjectSkills>;
  ObjectSkills_skillID: Array<ObjectSkills>;
  armorBonusUI?: Maybe<Scalars['Int']['output']>;
  behaviorID?: Maybe<Scalars['Int']['output']>;
  cancelType?: Maybe<Scalars['Int']['output']>;
  castTypeDesc?: Maybe<Scalars['Int']['output']>;
  cooldown?: Maybe<Scalars['Float']['output']>;
  cooldowngroup?: Maybe<Scalars['Int']['output']>;
  damageUI?: Maybe<Scalars['Int']['output']>;
  descriptionUI_de_DE?: Maybe<Scalars['String']['output']>;
  descriptionUI_en_GB?: Maybe<Scalars['String']['output']>;
  descriptionUI_en_US?: Maybe<Scalars['String']['output']>;
  descriptionUI_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  hideIcon?: Maybe<Scalars['Int']['output']>;
  imBonusUI?: Maybe<Scalars['Int']['output']>;
  imaginationcost?: Maybe<Scalars['Int']['output']>;
  inNpcEditor?: Maybe<Scalars['Int']['output']>;
  lifeBonusUI?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  name_de_DE?: Maybe<Scalars['String']['output']>;
  name_en_GB?: Maybe<Scalars['String']['output']>;
  name_en_US?: Maybe<Scalars['String']['output']>;
  name_loc?: Maybe<Scalars['String']['output']>;
  oomBehaviorEffectID?: Maybe<Scalars['Int']['output']>;
  oomSkillID?: Maybe<Scalars['String']['output']>;
  skillID?: Maybe<Scalars['Int']['output']>;
  skillIcon?: Maybe<Icons>;
};

export type SmashableChain = {
  __typename?: 'SmashableChain';
  chainIndex?: Maybe<Scalars['Int']['output']>;
  chainLevel?: Maybe<Scalars['Int']['output']>;
  chainStepID?: Maybe<Scalars['Int']['output']>;
  currencyIndex?: Maybe<Scalars['Int']['output']>;
  currencyLevel?: Maybe<Scalars['Int']['output']>;
  lootMatrixID?: Maybe<LootMatrix>;
  rarityTableIndex?: Maybe<RarityTable>;
  smashCount?: Maybe<Scalars['Int']['output']>;
  timeLimit?: Maybe<Scalars['Int']['output']>;
};

export type SmashableChainIndex = {
  __typename?: 'SmashableChainIndex';
  continuous?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  targetGroup?: Maybe<Scalars['String']['output']>;
};

export type SmashableComponent = {
  __typename?: 'SmashableComponent';
  LootMatrixIndex?: Maybe<LootMatrix>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type SmashableElements = {
  __typename?: 'SmashableElements';
  dropWeight?: Maybe<Scalars['Int']['output']>;
  elementID?: Maybe<Scalars['Int']['output']>;
};

export type SpeedchatMenu = {
  __typename?: 'SpeedchatMenu';
  emoteId?: Maybe<Emotes>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  imageName?: Maybe<Scalars['String']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  menuText_de_DE?: Maybe<Scalars['String']['output']>;
  menuText_en_GB?: Maybe<Scalars['String']['output']>;
  menuText_en_US?: Maybe<Scalars['String']['output']>;
  menuText_loc?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
};

export type SubscriptionPricing = {
  __typename?: 'SubscriptionPricing';
  countryCode?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  monetarySymbol?: Maybe<Scalars['Int']['output']>;
  monthlyFeeBronze?: Maybe<Scalars['String']['output']>;
  monthlyFeeGold?: Maybe<Scalars['String']['output']>;
  monthlyFeeSilver?: Maybe<Scalars['String']['output']>;
  symbolIsAppended?: Maybe<Scalars['Int']['output']>;
};

export type SurfaceType = {
  __typename?: 'SurfaceType';
  FootstepNDAudioMetaEventSetName?: Maybe<Scalars['String']['output']>;
  SurfaceType?: Maybe<Scalars['Int']['output']>;
};

export type TamingBuildPuzzles = {
  __typename?: 'TamingBuildPuzzles';
  Difficulty?: Maybe<Scalars['Int']['output']>;
  Duration?: Maybe<Scalars['Float']['output']>;
  FullModelLXF?: Maybe<Scalars['String']['output']>;
  InvalidPiecesLXF?: Maybe<Scalars['String']['output']>;
  ModelName?: Maybe<Scalars['String']['output']>;
  NPCLot?: Maybe<Objects>;
  NumValidPieces?: Maybe<Scalars['Int']['output']>;
  PuzzleModelLot?: Maybe<Objects>;
  Timelimit?: Maybe<Scalars['Int']['output']>;
  TotalNumPieces?: Maybe<Scalars['Int']['output']>;
  ValidPiecesLXF?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imagCostPerBuild?: Maybe<Scalars['Int']['output']>;
};

export type TextDescription = {
  __typename?: 'TextDescription';
  TestDescription?: Maybe<Scalars['String']['output']>;
  TextID?: Maybe<Scalars['Int']['output']>;
};

export type TextLanguage = {
  __typename?: 'TextLanguage';
  LanguageID?: Maybe<Scalars['Int']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  TextID?: Maybe<Scalars['Int']['output']>;
};

export type TrailEffects = {
  __typename?: 'TrailEffects';
  birthDelay?: Maybe<Scalars['Float']['output']>;
  blendmode?: Maybe<Scalars['Int']['output']>;
  bone1?: Maybe<Scalars['String']['output']>;
  bone2?: Maybe<Scalars['String']['output']>;
  cardlifetime?: Maybe<Scalars['Float']['output']>;
  colorlifetime?: Maybe<Scalars['Float']['output']>;
  deathDelay?: Maybe<Scalars['Float']['output']>;
  endColorA?: Maybe<Scalars['Float']['output']>;
  endColorB?: Maybe<Scalars['Float']['output']>;
  endColorG?: Maybe<Scalars['Float']['output']>;
  endColorR?: Maybe<Scalars['Float']['output']>;
  max_particles?: Maybe<Scalars['Int']['output']>;
  middleColorA?: Maybe<Scalars['Float']['output']>;
  middleColorB?: Maybe<Scalars['Float']['output']>;
  middleColorG?: Maybe<Scalars['Float']['output']>;
  middleColorR?: Maybe<Scalars['Float']['output']>;
  minTailFade?: Maybe<Scalars['Float']['output']>;
  startColorA?: Maybe<Scalars['Float']['output']>;
  startColorB?: Maybe<Scalars['Float']['output']>;
  startColorG?: Maybe<Scalars['Float']['output']>;
  startColorR?: Maybe<Scalars['Float']['output']>;
  tailFade?: Maybe<Scalars['Float']['output']>;
  texLength?: Maybe<Scalars['Float']['output']>;
  texWidth?: Maybe<Scalars['Float']['output']>;
  textureName?: Maybe<Scalars['String']['output']>;
  trailID?: Maybe<Scalars['Int']['output']>;
};

export type UgBehaviorSounds = {
  __typename?: 'UGBehaviorSounds';
  gate_version?: Maybe<FeatureGating>;
  guid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  name_de_DE?: Maybe<Scalars['String']['output']>;
  name_en_GB?: Maybe<Scalars['String']['output']>;
  name_en_US?: Maybe<Scalars['String']['output']>;
  name_loc?: Maybe<Scalars['String']['output']>;
};

export type VehiclePhysics = {
  __typename?: 'VehiclePhysics';
  AudioAirtimeForHeavyLand?: Maybe<Scalars['Float']['output']>;
  AudioAirtimeForLightLand?: Maybe<Scalars['Float']['output']>;
  AudioEventEngine?: Maybe<Scalars['String']['output']>;
  AudioEventHeavyHit?: Maybe<Scalars['String']['output']>;
  AudioEventHeavyLand?: Maybe<Scalars['String']['output']>;
  AudioEventLightHit?: Maybe<Scalars['String']['output']>;
  AudioEventLightLand?: Maybe<Scalars['String']['output']>;
  AudioEventSkid?: Maybe<Scalars['String']['output']>;
  AudioEventStart?: Maybe<Scalars['String']['output']>;
  AudioEventTreadConcrete?: Maybe<Scalars['String']['output']>;
  AudioEventTreadDirt?: Maybe<Scalars['String']['output']>;
  AudioEventTreadGrass?: Maybe<Scalars['String']['output']>;
  AudioEventTreadGravel?: Maybe<Scalars['String']['output']>;
  AudioEventTreadIce?: Maybe<Scalars['String']['output']>;
  AudioEventTreadLeaves?: Maybe<Scalars['String']['output']>;
  AudioEventTreadMetal?: Maybe<Scalars['String']['output']>;
  AudioEventTreadMud?: Maybe<Scalars['String']['output']>;
  AudioEventTreadPlastic?: Maybe<Scalars['String']['output']>;
  AudioEventTreadSand?: Maybe<Scalars['String']['output']>;
  AudioEventTreadSnow?: Maybe<Scalars['String']['output']>;
  AudioEventTreadWater?: Maybe<Scalars['String']['output']>;
  AudioEventTreadWood?: Maybe<Scalars['String']['output']>;
  AudioSpeedThresholdHeavyHit?: Maybe<Scalars['Float']['output']>;
  AudioSpeedThresholdLightHit?: Maybe<Scalars['Float']['output']>;
  AudioTimeoutHeavyHit?: Maybe<Scalars['Float']['output']>;
  AudioTimeoutLightHit?: Maybe<Scalars['Float']['output']>;
  bWheelsVisible?: Maybe<Scalars['Int']['output']>;
  fAeroAirDensity?: Maybe<Scalars['Float']['output']>;
  fAeroDragCoefficient?: Maybe<Scalars['Float']['output']>;
  fAeroExtraGravity?: Maybe<Scalars['Float']['output']>;
  fAeroFrontalArea?: Maybe<Scalars['Float']['output']>;
  fAeroLiftCoefficient?: Maybe<Scalars['Float']['output']>;
  fBoostAccelerateChange?: Maybe<Scalars['Float']['output']>;
  fBoostCostPerSecond?: Maybe<Scalars['Float']['output']>;
  fBoostDampingChange?: Maybe<Scalars['Float']['output']>;
  fBoostTopSpeed?: Maybe<Scalars['Float']['output']>;
  fBrakeFrontTorque?: Maybe<Scalars['Float']['output']>;
  fBrakeMinInputToBlock?: Maybe<Scalars['Float']['output']>;
  fBrakeMinTimeToBlock?: Maybe<Scalars['Float']['output']>;
  fBrakeRearTorque?: Maybe<Scalars['Float']['output']>;
  fCenterOfMassFwd?: Maybe<Scalars['Float']['output']>;
  fCenterOfMassRight?: Maybe<Scalars['Float']['output']>;
  fCenterOfMassUp?: Maybe<Scalars['Float']['output']>;
  fChassisFriction?: Maybe<Scalars['Float']['output']>;
  fCollisionSpinDamping?: Maybe<Scalars['Float']['output']>;
  fCollisionThreshold?: Maybe<Scalars['Float']['output']>;
  fEngineTorque?: Maybe<Scalars['Float']['output']>;
  fExtraTorqueFactor?: Maybe<Scalars['Float']['output']>;
  fFrontTireFriction?: Maybe<Scalars['Float']['output']>;
  fFrontTireFrictionSlide?: Maybe<Scalars['Float']['output']>;
  fFrontTireSlipAngle?: Maybe<Scalars['Float']['output']>;
  fFwdBias?: Maybe<Scalars['Float']['output']>;
  fGravityScale?: Maybe<Scalars['Float']['output']>;
  fImaginationTankSize?: Maybe<Scalars['Float']['output']>;
  fInertiaPitch?: Maybe<Scalars['Float']['output']>;
  fInertiaRoll?: Maybe<Scalars['Float']['output']>;
  fInertiaYaw?: Maybe<Scalars['Float']['output']>;
  fInputAccelSpeed?: Maybe<Scalars['Float']['output']>;
  fInputDeadAccelDownSpeed?: Maybe<Scalars['Float']['output']>;
  fInputDeadDecelDownSpeed?: Maybe<Scalars['Float']['output']>;
  fInputDeadTurnBackSpeed?: Maybe<Scalars['Float']['output']>;
  fInputDeadZone?: Maybe<Scalars['Float']['output']>;
  fInputDecelSpeed?: Maybe<Scalars['Float']['output']>;
  fInputInitialSlope?: Maybe<Scalars['Float']['output']>;
  fInputSlopeChangePointX?: Maybe<Scalars['Float']['output']>;
  fInputTurnSpeed?: Maybe<Scalars['Float']['output']>;
  fMass?: Maybe<Scalars['Float']['output']>;
  fMaxSpeed?: Maybe<Scalars['Float']['output']>;
  fNormalSpinDamping?: Maybe<Scalars['Float']['output']>;
  fPowerslideNeutralAngle?: Maybe<Scalars['Float']['output']>;
  fPowerslideTorqueStrength?: Maybe<Scalars['Float']['output']>;
  fRearTireFriction?: Maybe<Scalars['Float']['output']>;
  fRearTireFrictionSlide?: Maybe<Scalars['Float']['output']>;
  fRearTireSlipAngle?: Maybe<Scalars['Float']['output']>;
  fReorientPitchStrength?: Maybe<Scalars['Float']['output']>;
  fReorientRollStrength?: Maybe<Scalars['Float']['output']>;
  fSkillCost?: Maybe<Scalars['Float']['output']>;
  fSteeringMaxAngle?: Maybe<Scalars['Float']['output']>;
  fSteeringMinAngle?: Maybe<Scalars['Float']['output']>;
  fSteeringSpeedLimitForMaxAngle?: Maybe<Scalars['Float']['output']>;
  fSuspensionDampingCompression?: Maybe<Scalars['Float']['output']>;
  fSuspensionDampingRelaxation?: Maybe<Scalars['Float']['output']>;
  fSuspensionLength?: Maybe<Scalars['Float']['output']>;
  fSuspensionStrength?: Maybe<Scalars['Float']['output']>;
  fTorquePitchFactor?: Maybe<Scalars['Float']['output']>;
  fTorqueRollFactor?: Maybe<Scalars['Float']['output']>;
  fTorqueYawFactor?: Maybe<Scalars['Float']['output']>;
  fWheelHardpointFrontFwd?: Maybe<Scalars['Float']['output']>;
  fWheelHardpointFrontRight?: Maybe<Scalars['Float']['output']>;
  fWheelHardpointFrontUp?: Maybe<Scalars['Float']['output']>;
  fWheelHardpointRearFwd?: Maybe<Scalars['Float']['output']>;
  fWheelHardpointRearRight?: Maybe<Scalars['Float']['output']>;
  fWheelHardpointRearUp?: Maybe<Scalars['Float']['output']>;
  fWheelMass?: Maybe<Scalars['Float']['output']>;
  fWheelRadius?: Maybe<Scalars['Float']['output']>;
  fWheelWidth?: Maybe<Scalars['Float']['output']>;
  fWreckMinAngle?: Maybe<Scalars['Float']['output']>;
  fWreckSpeedBase?: Maybe<Scalars['Float']['output']>;
  fWreckSpeedPercent?: Maybe<Scalars['Float']['output']>;
  hkxFilename?: Maybe<Scalars['String']['output']>;
  iChassisCollisionGroup?: Maybe<Scalars['Int']['output']>;
  iPowerslideNumTorqueApplications?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type VehicleStatMap = {
  __typename?: 'VehicleStatMap';
  HavokChangePerModuleStat?: Maybe<Scalars['Float']['output']>;
  HavokStat?: Maybe<Scalars['String']['output']>;
  ModuleStat?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type VendorComponent = {
  __typename?: 'VendorComponent';
  LootMatrixIndex?: Maybe<LootMatrix>;
  buyScalar?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  refreshTimeSeconds?: Maybe<Scalars['Float']['output']>;
  sellScalar?: Maybe<Scalars['Float']['output']>;
};

export type WhatsCoolItemSpotlight = {
  __typename?: 'WhatsCoolItemSpotlight';
  description_de_DE?: Maybe<Scalars['String']['output']>;
  description_en_GB?: Maybe<Scalars['String']['output']>;
  description_en_US?: Maybe<Scalars['String']['output']>;
  description_loc?: Maybe<Scalars['String']['output']>;
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  itemID?: Maybe<Objects>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
};

export type WhatsCoolNewsAndTips = {
  __typename?: 'WhatsCoolNewsAndTips';
  gate_version?: Maybe<FeatureGating>;
  iconID?: Maybe<Icons>;
  id?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  storyTitle_de_DE?: Maybe<Scalars['String']['output']>;
  storyTitle_en_GB?: Maybe<Scalars['String']['output']>;
  storyTitle_en_US?: Maybe<Scalars['String']['output']>;
  storyTitle_loc?: Maybe<Scalars['String']['output']>;
  text_de_DE?: Maybe<Scalars['String']['output']>;
  text_en_GB?: Maybe<Scalars['String']['output']>;
  text_en_US?: Maybe<Scalars['String']['output']>;
  text_loc?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

export type WorldConfig = {
  __typename?: 'WorldConfig';
  CharacterVersion?: Maybe<Scalars['Int']['output']>;
  LevelCap?: Maybe<Scalars['Int']['output']>;
  LevelCapCurrencyConversion?: Maybe<Scalars['Int']['output']>;
  LevelUpBehaviorEffect?: Maybe<Scalars['String']['output']>;
  WorldConfigID?: Maybe<Scalars['Int']['output']>;
  characterGroundedSpeed?: Maybe<Scalars['Float']['output']>;
  characterGroundedTime?: Maybe<Scalars['Float']['output']>;
  character_eye_height?: Maybe<Scalars['Float']['output']>;
  character_max_slope?: Maybe<Scalars['Float']['output']>;
  character_rotation_speed?: Maybe<Scalars['Float']['output']>;
  character_run_backward_speed?: Maybe<Scalars['Float']['output']>;
  character_run_strafe_backward_speed?: Maybe<Scalars['Float']['output']>;
  character_run_strafe_forward_speed?: Maybe<Scalars['Float']['output']>;
  character_run_strafe_speed?: Maybe<Scalars['Float']['output']>;
  character_votes_per_day?: Maybe<Scalars['Int']['output']>;
  character_walk_backward_speed?: Maybe<Scalars['Float']['output']>;
  character_walk_forward_speed?: Maybe<Scalars['Float']['output']>;
  character_walk_strafe_backward_speed?: Maybe<Scalars['Float']['output']>;
  character_walk_strafe_forward_speed?: Maybe<Scalars['Float']['output']>;
  character_walk_strafe_speed?: Maybe<Scalars['Float']['output']>;
  coins_lost_on_death_max?: Maybe<Scalars['Int']['output']>;
  coins_lost_on_death_max_timeout?: Maybe<Scalars['Float']['output']>;
  coins_lost_on_death_min?: Maybe<Scalars['Int']['output']>;
  coins_lost_on_death_min_timeout?: Maybe<Scalars['Float']['output']>;
  coins_lost_on_death_percent?: Maybe<Scalars['Float']['output']>;
  defaultHomespaceTemplate?: Maybe<Scalars['Int']['output']>;
  defaultPropertyMaxHeight?: Maybe<Scalars['Float']['output']>;
  defaultrespawntime?: Maybe<Scalars['Float']['output']>;
  fReputationPerVote?: Maybe<Scalars['Float']['output']>;
  flight_airspeed?: Maybe<Scalars['Float']['output']>;
  flight_fuel_ratio?: Maybe<Scalars['Float']['output']>;
  flight_max_airspeed?: Maybe<Scalars['Float']['output']>;
  flight_vertical_velocity?: Maybe<Scalars['Float']['output']>;
  globalImmunityTime?: Maybe<Scalars['Float']['output']>;
  global_cooldown?: Maybe<Scalars['Float']['output']>;
  mail_base_fee?: Maybe<Scalars['Int']['output']>;
  mail_percent_attachment_fee?: Maybe<Scalars['Float']['output']>;
  mission_tooltip_timeout?: Maybe<Scalars['Float']['output']>;
  modelModerateOnCreate?: Maybe<Scalars['Int']['output']>;
  nPropertyCloneLimit?: Maybe<Scalars['Int']['output']>;
  pebroadphaseworldsize?: Maybe<Scalars['Float']['output']>;
  pegameobjscalefactor?: Maybe<Scalars['Float']['output']>;
  pegravityvalue?: Maybe<Scalars['Float']['output']>;
  pet_follow_radius?: Maybe<Scalars['Float']['output']>;
  propertyModRequestsAllowedInterval?: Maybe<Scalars['Int']['output']>;
  propertyModRequestsAllowedSpike?: Maybe<Scalars['Int']['output']>;
  propertyModRequestsAllowedTotal?: Maybe<Scalars['Int']['output']>;
  propertyModRequestsIntervalDuration?: Maybe<Scalars['Int']['output']>;
  propertyModRequestsSpikeDuration?: Maybe<Scalars['Int']['output']>;
  propertyReputationDelay?: Maybe<Scalars['Int']['output']>;
  property_moderation_request_approval_cost?: Maybe<Scalars['Int']['output']>;
  property_moderation_request_review_cost?: Maybe<Scalars['Int']['output']>;
  reputationPerBattlePromotion?: Maybe<Scalars['Float']['output']>;
  reputationPerVoteCast?: Maybe<Scalars['Float']['output']>;
  reputationPerVoteReceived?: Maybe<Scalars['Float']['output']>;
  showcaseTopModelConsiderationBattles?: Maybe<Scalars['Int']['output']>;
  vendor_buy_multiplier?: Maybe<Scalars['Float']['output']>;
};

export type ZoneLoadingTips = {
  __typename?: 'ZoneLoadingTips';
  gate_version?: Maybe<FeatureGating>;
  id?: Maybe<Scalars['Int']['output']>;
  imagelocation?: Maybe<Scalars['String']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  targetVersion?: Maybe<FeatureGating>;
  tip1_de_DE?: Maybe<Scalars['String']['output']>;
  tip1_en_GB?: Maybe<Scalars['String']['output']>;
  tip1_en_US?: Maybe<Scalars['String']['output']>;
  tip1_loc?: Maybe<Scalars['String']['output']>;
  tip2_de_DE?: Maybe<Scalars['String']['output']>;
  tip2_en_GB?: Maybe<Scalars['String']['output']>;
  tip2_en_US?: Maybe<Scalars['String']['output']>;
  tip2_loc?: Maybe<Scalars['String']['output']>;
  title_de_DE?: Maybe<Scalars['String']['output']>;
  title_en_GB?: Maybe<Scalars['String']['output']>;
  title_en_US?: Maybe<Scalars['String']['output']>;
  title_loc?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
  zoneid?: Maybe<ZoneTable>;
};

export type ZoneSummary = {
  __typename?: 'ZoneSummary';
  _uniqueID?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
  zoneID?: Maybe<ZoneTable>;
};

export type ZoneTable = {
  __typename?: 'ZoneTable';
  Activities: Array<Activities>;
  Activities_instanceMapID: Array<Activities>;
  DisplayDescription?: Maybe<Scalars['String']['output']>;
  DisplayDescription_de_DE?: Maybe<Scalars['String']['output']>;
  DisplayDescription_en_GB?: Maybe<Scalars['String']['output']>;
  DisplayDescription_en_US?: Maybe<Scalars['String']['output']>;
  DisplayDescription_loc?: Maybe<Scalars['String']['output']>;
  LUPZoneIDs: Array<LupZoneIDs>;
  LUPZoneIDs_zoneID: Array<LupZoneIDs>;
  PlayerLoseCoinsOnDeath?: Maybe<Scalars['Int']['output']>;
  PropertyEntranceComponent: Array<PropertyEntranceComponent>;
  PropertyEntranceComponent_mapID: Array<PropertyEntranceComponent>;
  PropertyTemplate_mapID: Array<PropertyTemplate>;
  PropertyTemplate_vendorMapID: Array<PropertyTemplate>;
  RocketLaunchpadControlComponent_defaultZoneID: Array<RocketLaunchpadControlComponent>;
  RocketLaunchpadControlComponent_targetZone: Array<RocketLaunchpadControlComponent>;
  ZoneLoadingTips: Array<ZoneLoadingTips>;
  ZoneLoadingTips_zoneid: Array<ZoneLoadingTips>;
  ZoneSummary: Array<ZoneSummary>;
  ZoneSummary_zoneID: Array<ZoneSummary>;
  clientPhysicsFramerate?: Maybe<Scalars['String']['output']>;
  disableSaveLoc?: Maybe<Scalars['Int']['output']>;
  fZoneWeight?: Maybe<Scalars['Float']['output']>;
  gate_version?: Maybe<FeatureGating>;
  ghostdistance?: Maybe<Scalars['Float']['output']>;
  ghostdistance_min?: Maybe<Scalars['Float']['output']>;
  heightInChunks?: Maybe<Scalars['Int']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  localize?: Maybe<Scalars['Int']['output']>;
  mapFolder?: Maybe<Scalars['String']['output']>;
  mixerProgram?: Maybe<Scalars['String']['output']>;
  mountsAllowed?: Maybe<Scalars['Int']['output']>;
  petsAllowed?: Maybe<Scalars['Int']['output']>;
  population_hard_cap?: Maybe<Scalars['Int']['output']>;
  population_soft_cap?: Maybe<Scalars['Int']['output']>;
  scriptID?: Maybe<Scalars['Int']['output']>;
  serverPhysicsFramerate?: Maybe<Scalars['String']['output']>;
  smashableMaxDistance?: Maybe<Scalars['Float']['output']>;
  smashableMinDistance?: Maybe<Scalars['Float']['output']>;
  summary_de_DE?: Maybe<Scalars['String']['output']>;
  summary_en_GB?: Maybe<Scalars['String']['output']>;
  summary_en_US?: Maybe<Scalars['String']['output']>;
  summary_loc?: Maybe<Scalars['String']['output']>;
  teamRadius?: Maybe<Scalars['Float']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  widthInChunks?: Maybe<Scalars['Int']['output']>;
  zoneControlTemplate?: Maybe<Scalars['Int']['output']>;
  zoneID?: Maybe<Scalars['Int']['output']>;
  zoneName?: Maybe<Scalars['String']['output']>;
};

export type BrickAttributes = {
  __typename?: 'brickAttributes';
  ID?: Maybe<Scalars['Int']['output']>;
  display_order?: Maybe<Scalars['Int']['output']>;
  icon_asset?: Maybe<Scalars['String']['output']>;
  locStatus?: Maybe<Scalars['Int']['output']>;
  name_de_DE?: Maybe<Scalars['String']['output']>;
  name_en_GB?: Maybe<Scalars['String']['output']>;
  name_en_US?: Maybe<Scalars['String']['output']>;
  name_loc?: Maybe<Scalars['String']['output']>;
};

export type Dtproperties = {
  __typename?: 'dtproperties';
  id?: Maybe<Scalars['Int']['output']>;
  lvalue?: Maybe<Scalars['String']['output']>;
  objectid?: Maybe<Scalars['Int']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  uvalue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type MapAnimationPriorities = {
  __typename?: 'mapAnimationPriorities';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
};

export type MapAssetType = {
  __typename?: 'mapAssetType';
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  pathdir?: Maybe<Scalars['String']['output']>;
  typelabel?: Maybe<Scalars['String']['output']>;
};

export type MapIcon = {
  __typename?: 'mapIcon';
  LOT?: Maybe<Objects>;
  iconID?: Maybe<Icons>;
  iconState?: Maybe<Scalars['Int']['output']>;
};

export type MapItemTypes = {
  __typename?: 'mapItemTypes';
  ItemComponent: Array<ItemComponent>;
  ItemComponent_itemType: Array<ItemComponent>;
  description?: Maybe<Scalars['String']['output']>;
  equipLocation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type MapRenderEffects = {
  __typename?: 'mapRenderEffects';
  description?: Maybe<Scalars['String']['output']>;
  gameID?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type MapShaders = {
  __typename?: 'mapShaders';
  gameValue?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
};

export type MapTextureResource = {
  __typename?: 'mapTextureResource';
  SurfaceType?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  texturepath?: Maybe<Scalars['String']['output']>;
};

export type Map_BlueprintCategory = {
  __typename?: 'map_BlueprintCategory';
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Sysdiagrams = {
  __typename?: 'sysdiagrams';
  definition?: Maybe<Scalars['String']['output']>;
  diagram_id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  principal_id?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type IconFragment = { __typename?: 'Icons', IconName?: string | null, IconPath?: string | null };

export type ItemFragment = { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null };

export type MissionFragment = { __typename?: 'Missions', id?: number | null, isMission?: number | null, UISortOrder?: number | null, name_loc?: string | null, MissionText: Array<{ __typename?: 'MissionText', in_progress_loc?: string | null, description_loc?: string | null }>, MissionTasks: Array<{ __typename?: 'MissionTasks', largeTaskIconID?: { __typename?: 'Icons', IconPath?: string | null } | null }>, missionIconID?: { __typename?: 'Icons', IconPath?: string | null } | null };

export type ObjectFragment = { __typename?: 'Objects', id?: number | null, displayName?: string | null, name?: string | null, description?: string | null, _internalNotes?: string | null };

export type MissionDetailQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MissionDetailQuery = { __typename?: 'Query', Missions?: Array<{ __typename?: 'Missions', name_loc?: string | null, defined_type?: string | null, defined_subtype?: string | null, locStatus?: number | null, isMission?: number | null, repeatable?: number | null, isRandom?: number | null, isChoiceReward?: number | null, inMOTD?: number | null, LegoScore?: number | null, UISortOrder?: number | null, reward_currency?: number | null, reward_currency_repeatable?: number | null, reward_item1_count?: number | null, reward_item2_count?: number | null, reward_item3_count?: number | null, reward_item4_count?: number | null, reward_item1_repeat_count?: number | null, reward_item2_repeat_count?: number | null, reward_item3_repeat_count?: number | null, reward_item4_repeat_count?: number | null, reward_maxhealth?: number | null, reward_maximagination?: number | null, reward_maxinventory?: number | null, reward_maxmodel?: number | null, reward_maxwidget?: number | null, reward_maxwallet?: number | null, reward_reputation?: number | null, reward_bankinventory?: number | null, gate_version?: { __typename?: 'FeatureGating', featureName?: string | null } | null, offer_objectID?: { __typename?: 'Objects', id?: number | null, displayName?: string | null, name?: string | null, description?: string | null, _internalNotes?: string | null } | null, target_objectID?: { __typename?: 'Objects', id?: number | null, displayName?: string | null, name?: string | null, description?: string | null, _internalNotes?: string | null } | null, reward_item1?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_item2?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_item3?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_item4?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_item1_repeatable?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_item2_repeatable?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_item3_repeatable?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_item4_repeatable?: { __typename?: 'Objects', id?: number | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } | null, reward_emote?: { __typename?: 'Emotes', id?: number | null } | null, reward_emote2?: { __typename?: 'Emotes', id?: number | null } | null, reward_emote3?: { __typename?: 'Emotes', id?: number | null } | null, reward_emote4?: { __typename?: 'Emotes', id?: number | null } | null, missionIconID?: { __typename?: 'Icons', IconName?: string | null, IconPath?: string | null } | null, MissionTasks: Array<{ __typename?: 'MissionTasks', taskType?: number | null, target?: number | null, targetGroup?: string | null, targetValue?: number | null, taskParam1?: string | null, uid?: number | null, description_loc?: string | null, gate_version?: { __typename?: 'FeatureGating', featureName?: string | null } | null, IconID?: { __typename?: 'Icons', IconName?: string | null, IconPath?: string | null } | null, MissionTaskObjects: Array<{ __typename?: 'MissionTaskObjects', object: { __typename?: 'Objects', id?: number | null, displayName?: string | null, name?: string | null, description?: string | null, _internalNotes?: string | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } }>, MissionTaskMissions: Array<{ __typename?: 'MissionTaskMissions', mission: { __typename?: 'Missions', id?: number | null, isMission?: number | null, UISortOrder?: number | null, name_loc?: string | null, MissionText: Array<{ __typename?: 'MissionText', in_progress_loc?: string | null, description_loc?: string | null }>, MissionTasks: Array<{ __typename?: 'MissionTasks', largeTaskIconID?: { __typename?: 'Icons', IconPath?: string | null } | null }>, missionIconID?: { __typename?: 'Icons', IconPath?: string | null } | null } }> }>, MissionPrereqs_mission: Array<{ __typename?: 'MissionPrereqs', andGroup: number, prereqMissionState?: number | null, prereqMission: { __typename?: 'Missions', id?: number | null, isMission?: number | null, UISortOrder?: number | null, name_loc?: string | null, MissionText: Array<{ __typename?: 'MissionText', in_progress_loc?: string | null, description_loc?: string | null }>, MissionTasks: Array<{ __typename?: 'MissionTasks', largeTaskIconID?: { __typename?: 'Icons', IconPath?: string | null } | null }>, missionIconID?: { __typename?: 'Icons', IconPath?: string | null } | null } }>, MissionPrereqs_prereqMission: Array<{ __typename?: 'MissionPrereqs', mission: { __typename?: 'Missions', id?: number | null, isMission?: number | null, UISortOrder?: number | null, name_loc?: string | null, MissionText: Array<{ __typename?: 'MissionText', in_progress_loc?: string | null, description_loc?: string | null }>, MissionTasks: Array<{ __typename?: 'MissionTasks', largeTaskIconID?: { __typename?: 'Icons', IconPath?: string | null } | null }>, missionIconID?: { __typename?: 'Icons', IconPath?: string | null } | null } }> } | null> | null, MissionText?: Array<{ __typename?: 'MissionText', accept_chat_bubble_loc?: string | null, chat_state_1_loc?: string | null, chat_state_2_loc?: string | null, chat_state_3_loc?: string | null, chat_state_3_turnin_loc?: string | null, chat_state_4_loc?: string | null, chat_state_4_turnin_loc?: string | null, completion_succeed_tip_loc?: string | null, description_loc?: string | null, in_progress_loc?: string | null, offer_loc?: string | null, offer_repeatable_loc?: string | null, ready_to_complete_loc?: string | null, turnInIconID?: { __typename?: 'Icons', IconName?: string | null, IconPath?: string | null } | null } | null> | null };

export type MissionPrereqFragment = { __typename?: 'MissionPrereqs', andGroup: number, prereqMissionState?: number | null, prereqMission: { __typename?: 'Missions', id?: number | null, isMission?: number | null, UISortOrder?: number | null, name_loc?: string | null, MissionText: Array<{ __typename?: 'MissionText', in_progress_loc?: string | null, description_loc?: string | null }>, MissionTasks: Array<{ __typename?: 'MissionTasks', largeTaskIconID?: { __typename?: 'Icons', IconPath?: string | null } | null }>, missionIconID?: { __typename?: 'Icons', IconPath?: string | null } | null } };

export type MissionTaskFragment = { __typename?: 'MissionTasks', taskType?: number | null, target?: number | null, targetGroup?: string | null, targetValue?: number | null, taskParam1?: string | null, uid?: number | null, description_loc?: string | null, gate_version?: { __typename?: 'FeatureGating', featureName?: string | null } | null, IconID?: { __typename?: 'Icons', IconName?: string | null, IconPath?: string | null } | null, MissionTaskObjects: Array<{ __typename?: 'MissionTaskObjects', object: { __typename?: 'Objects', id?: number | null, displayName?: string | null, name?: string | null, description?: string | null, _internalNotes?: string | null, renderComponent?: { __typename?: 'RenderComponent', icon_asset?: string | null } | null } }>, MissionTaskMissions: Array<{ __typename?: 'MissionTaskMissions', mission: { __typename?: 'Missions', id?: number | null, isMission?: number | null, UISortOrder?: number | null, name_loc?: string | null, MissionText: Array<{ __typename?: 'MissionText', in_progress_loc?: string | null, description_loc?: string | null }>, MissionTasks: Array<{ __typename?: 'MissionTasks', largeTaskIconID?: { __typename?: 'Icons', IconPath?: string | null } | null }>, missionIconID?: { __typename?: 'Icons', IconPath?: string | null } | null } }> };

export const ItemFragmentDoc = gql`
    fragment item on Objects {
  id
  renderComponent {
    icon_asset
  }
}
    `;
export const ObjectFragmentDoc = gql`
    fragment object on Objects {
  id
  displayName
  name
  description
  _internalNotes
}
    `;
export const MissionFragmentDoc = gql`
    fragment mission on Missions {
  id
  isMission
  UISortOrder
  name_loc
  MissionText {
    in_progress_loc
    description_loc
  }
  MissionTasks {
    largeTaskIconID {
      IconPath
    }
  }
  missionIconID {
    IconPath
  }
}
    `;
export const MissionPrereqFragmentDoc = gql`
    fragment missionPrereq on MissionPrereqs {
  andGroup
  prereqMissionState
  prereqMission {
    ...mission
  }
}
    ${MissionFragmentDoc}`;
export const IconFragmentDoc = gql`
    fragment icon on Icons {
  IconName
  IconPath
}
    `;
export const MissionTaskFragmentDoc = gql`
    fragment missionTask on MissionTasks {
  taskType
  target
  targetGroup
  targetValue
  taskParam1
  uid
  gate_version {
    featureName
  }
  description_loc
  IconID {
    ...icon
  }
  MissionTaskObjects {
    object {
      id
      displayName
      name
      description
      _internalNotes
      renderComponent {
        icon_asset
      }
    }
  }
  MissionTaskMissions {
    mission {
      ...mission
    }
  }
}
    ${IconFragmentDoc}
${MissionFragmentDoc}`;
export const MissionDetailDocument = gql`
    query MissionDetail($id: Int) {
  Missions(id: $id) {
    name_loc
    defined_type
    defined_subtype
    locStatus
    isMission
    gate_version {
      featureName
    }
    repeatable
    isRandom
    isChoiceReward
    inMOTD
    LegoScore
    UISortOrder
    offer_objectID {
      ...object
    }
    target_objectID {
      ...object
    }
    repeatable
    reward_currency
    reward_currency_repeatable
    reward_item1 {
      ...item
    }
    reward_item2 {
      ...item
    }
    reward_item3 {
      ...item
    }
    reward_item4 {
      ...item
    }
    reward_item1_repeatable {
      ...item
    }
    reward_item2_repeatable {
      ...item
    }
    reward_item3_repeatable {
      ...item
    }
    reward_item4_repeatable {
      ...item
    }
    reward_item1_count
    reward_item2_count
    reward_item3_count
    reward_item4_count
    reward_item1_repeat_count
    reward_item2_repeat_count
    reward_item3_repeat_count
    reward_item4_repeat_count
    reward_emote {
      id
    }
    reward_emote2 {
      id
    }
    reward_emote3 {
      id
    }
    reward_emote4 {
      id
    }
    reward_maxhealth
    reward_maximagination
    reward_maxinventory
    reward_maxmodel
    reward_maxwidget
    reward_maxwallet
    reward_reputation
    reward_bankinventory
    missionIconID {
      ...icon
    }
    MissionTasks {
      ...missionTask
    }
    MissionPrereqs_mission {
      ...missionPrereq
    }
    MissionPrereqs_prereqMission {
      mission {
        ...mission
      }
    }
  }
  MissionText(id: $id) {
    accept_chat_bubble_loc
    chat_state_1_loc
    chat_state_2_loc
    chat_state_3_loc
    chat_state_3_turnin_loc
    chat_state_4_loc
    chat_state_4_turnin_loc
    completion_succeed_tip_loc
    description_loc
    in_progress_loc
    offer_loc
    offer_repeatable_loc
    ready_to_complete_loc
    turnInIconID {
      ...icon
    }
  }
}
    ${ObjectFragmentDoc}
${ItemFragmentDoc}
${IconFragmentDoc}
${MissionTaskFragmentDoc}
${MissionPrereqFragmentDoc}
${MissionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MissionDetailGQL extends Apollo.Query<MissionDetailQuery, MissionDetailQueryVariables> {
    document = MissionDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }