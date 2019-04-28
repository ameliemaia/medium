import { mat4, quat, vec3 } from 'gl-matrix';
import Vector2 from '../math/Vector2';
import Vector3 from '../math/Vector3';

export function degToRad(degrees: number) {
  return degrees * (Math.PI / 180);
}

export function radToDeg(radians: number) {
  return radians * (180 / Math.PI);
}

export function clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min);
}

export function lerp(min: number, max: number, alpha: number) {
  return min + (max - min) * alpha;
}

export function barycoordFromPoint(point: vec3, a: vec3, b: vec3, c: vec3) {
  const v0 = vec3.create();
  const v1 = vec3.create();
  const v2 = vec3.create();

  vec3.sub(v0, c, a);
  vec3.sub(v1, b, a);
  vec3.sub(v2, point, a);

  const dot00 = vec3.dot(v0, v0);
  const dot01 = vec3.dot(v0, v1);
  const dot02 = vec3.dot(v0, v2);
  const dot11 = vec3.dot(v1, v1);
  const dot12 = vec3.dot(v1, v2);

  const denom = dot00 * dot11 - dot01 * dot01;

  const result = new Vector3();

  // collinear or singular triangle
  if (denom === 0) {
    // arbitrary location outside of triangle?
    // not sure if this is the best idea, maybe should be returning undefined
    return result.set(-2, -1, -1);
  }

  const invDenom = 1 / denom;
  const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
  const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

  // barycentric coordinates must always sum to 1
  return result.set(1 - u - v, v, u);
}

/*
http://stackoverflow.com/questions/5531827/random-point-on-a-given-sphere
	*/
export function randomSpherePoint(
  x0: number,
  y0: number,
  z0: number,
  radius: number
) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = x0 + radius * Math.sin(phi) * Math.cos(theta);
  const y = y0 + radius * Math.sin(phi) * Math.sin(theta);
  const z = z0 + radius * Math.cos(phi);
  return [x, y, z];
}

// https://github.com/hughsk/from-3d-to-2d/blob/master/index.js
export function from3DTo2D(position: Vector3, pVMatrix: mat4) {
  const ix = position.x;
  const iy = position.y;
  const iz = position.z;

  const ox =
    pVMatrix[0] * ix + pVMatrix[4] * iy + pVMatrix[8] * iz + pVMatrix[12];
  const oy =
    pVMatrix[1] * ix + pVMatrix[5] * iy + pVMatrix[9] * iz + pVMatrix[13];
  const ow =
    pVMatrix[3] * ix + pVMatrix[7] * iy + pVMatrix[11] * iz + pVMatrix[15];

  const screenPosition = new Vector2();
  screenPosition.x = (ox / ow + 1) / 2;
  screenPosition.y = 1 - (oy / ow + 1) / 2;

  return screenPosition;
}

// https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L324
export function lookAt(eye: vec3, target: vec3, up: vec3) {
  const quatOut = quat.create();
  const x = vec3.create();
  const y = vec3.create();
  const z = vec3.create();

  vec3.sub(z, eye, target);

  if (vec3.squaredLength(z) === 0) {
    // eye and target are in the same position
    z[2] = 1;
  }

  vec3.normalize(z, z);
  vec3.cross(x, up, z);

  if (vec3.squaredLength(x) === 0) {
    // eye and target are in the same vertical
    z[2] += 0.0001;
    vec3.cross(x, up, z);
  }

  vec3.normalize(x, x);
  vec3.cross(y, z, x);

  quat.setAxes(quatOut, z, x, y);
  quat.invert(quatOut, quatOut);

  return quatOut;
}

// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
export function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}

// https://bocoup.com/blog/find-the-closest-power-of-2-with-javascript
export function nearestPowerOf2(size) {
  return Math.pow(2, Math.round(Math.log(size) / Math.log(2)));
}

export function addLineNumbers(text: string) {
  let result = '';
  text.split('\n').forEach((line: string, index: number) => {
    result += `${index < 10 ? `0${index}` : index}| ${line}\n`;
  });
  return result;
}
