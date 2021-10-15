import { DB_BehaviorTemplate } from "../cdclient";

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
