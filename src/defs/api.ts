import { DB_BehaviorTemplate } from "./cdclient";

export interface Behavior {
    template: DB_BehaviorTemplate,
    parameters: { [key: string]: number },
}

export interface Rev_Behavior {
    uses: number[],
    used_by: number[],
    skill: number[],
    _embedded: { [key: string]: Behavior }
}

export interface Rev_Objects_ItemComponent {
    currency_lot: number[];
}

export interface Rev_Objects_Missions {
    reward_items?: number[];
}
export interface Rev_Objects {
    item_sets: number[];
    item_component: Rev_Objects_ItemComponent;
    inventory_component: number[];
    missions?: Rev_Objects_Missions;
}

export interface Rev_FactionById {
    destructible_ids: number[],
    destructible_list_ids: number[],
    _embedded: Rev_FactionById_Embedded,
}


export interface Rev_FactionById_Embedded {
    destructible_components: Rev_ByComponentId;
}

export interface Rev_CooldownGroup {
    skills: number[]
}

export interface ComponentTypeSingle {
    lots: number[]
}

export type Rev_ByComponentId = Record<number, ComponentTypeSingle>;
export type ObjectsRefDict = Record<number, { name: string }>;

export interface Rev_ComponentType {
    components: Rev_ByComponentId;
    _embedded: { objects: ObjectsRefDict };
}

export interface Rev_ComponentTypes {
    components: number[];
}

export interface Rev_MissionById {
    collectible_components: {
        requirement_for: number[];
    };
    item_components: {
        requirement_for: number[];
    };
    missions: {
        prereq_for: number[];
    };
    _embedded: {
        ItemComponent: Rev_ByComponentId;
        CollectibleComponent: Rev_ByComponentId;
    };
}

export interface Rev_GateVersion {
    activities: number[];
    deletion_restrictions: number[];
    emotes: number[];
    loot_matrix: number[];
    item_sets: number[];
    missions: number[];
    mission_tasks: number[];
    objects: number[];
    player_statistics: number[];
    preconditions: number[];
    property_template: number[];
    reward_codes: string[];
    speedchat_menu: number[];
    skills: number[];
    ug_behavior_sounds: number[];
    whats_cool_item_spotlight: number[];
    whats_cool_news_and_tips: number[];
    zone_loading_tips: number[];
    zones: number[];
}
