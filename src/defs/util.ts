import { Observable } from "rxjs";
import { DB_MissionTasks } from "./cdclient";
import { Locale_MissionTasks } from "./locale";

export interface MissionTasks extends DB_MissionTasks {
    $localizations?: Observable<Locale_MissionTasks>;
}
