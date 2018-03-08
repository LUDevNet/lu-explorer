export class ZoneDetail
{
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