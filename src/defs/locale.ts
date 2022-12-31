export interface Locale_ActivityRewards {
    description?: string;
}

export interface Locale_Missions {
    name?: string;
};

export interface Locale_Objects {
    name?: string;
    description?: string,
}

export interface Locale_Preconditions {
    FailureReason?: string,
}

export interface Locale_DeletionRestrictions {
    failureReason?: String,
}

export interface Locale_RewardCodes {
    subjectText: string,
    bodyText: string,
}

export interface Locale_WhatsCoolNewsAndTips {
    storyTitle?: string,
    text?: string,
};

export interface Locale_WhatsCoolItemSpotlight {
    description: string,
};

export interface Locale_ZoneTable {
    DisplayDescription?: string;
}

export interface Locale_MissionTasks {
    description?: string;
}

export interface Locale_SkillBehavior {
    name?: string;
}

export interface Locale_ZoneLoadingTips {
    title?: string,
    tip1?: string,
    tip2?: string,
}

export interface Locale_ItemSets {
    kitName?: string,
}

export interface Locale_PropertyTemplate {
    name?: string,
    description?: string,
}

export interface Locale {
    ItemSets: Record<number, Locale_ItemSets>,
    Missions: Record<number, Locale_Missions>,
    Preconditions: Record<number, Locale_Preconditions>,
    PropertyTemplate: Record<number, Locale_PropertyTemplate>,
    SkillBehavior: Record<number, Locale_SkillBehavior>,
    WhatsCoolItemSpotlight: Record<number, Locale_WhatsCoolItemSpotlight>,
    WhatsCoolNewsAndTips: Record<number, Locale_WhatsCoolNewsAndTips>,
    ZoneLoadingTips: Record<number, Locale_ZoneLoadingTips>,
    ZoneTable: Record<number, Locale_ZoneTable>,
}

export type LocaleKeys = keyof Locale;
export type LocaleRecord<K> = Locale[K & keyof Locale]
export type LocaleType<K> = LocaleRecord<K> extends Record<any, infer L> ? L : never;
export type LocaleIndex<K> = LocaleRecord<K> extends Record<infer I, any> ? I & (string | number) : never;
export type LocalePartial<K> = Partial<LocaleType<K>>;
export type LocalePartialRecord<K> = Record<LocaleIndex<K>, LocalePartial<K>>;
export type PartialRecord<R> = R extends Record<infer I, infer L> ? Record<I, Partial<L>> : never;
export type LocaleTypePick<Key, Fields> = Pick<LocaleType<Key>, F<Key, Fields>>;
export type LocaleRecordPick<Key, Fields> = Record<LocaleIndex<Key>, LocaleTypePick<Key, Fields>>;
export type LocaleField<K> = string & keyof LocaleType<K>;
type F<Key, F> = keyof LocaleType<Key> extends F ? F & keyof LocaleType<Key> : never;
