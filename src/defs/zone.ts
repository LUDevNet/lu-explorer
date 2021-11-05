export class Vector3f {
  x: number;
  y: number;
  z: number;
}

export class Quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export class Position {
  pos: Vector3f;
  rot: Quaternion;
};
