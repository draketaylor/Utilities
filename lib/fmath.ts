const {max, min, random, floor, PI} = Math;

/** Radians to Degrees Conversion Constant */
export const Rad2Deg: number = 360 / (PI * 2);
/** Degrees to Radians Conversion Constant */
export const Deg2Rad: number = (PI * 2) / 360;

/** A function used for rounding */
export type rFunc = (x: number) => number;

/**
 * Clamps a value between a min and max value
 * @param v - The number to clamp
 * @param a - A number representing the upper bound
 * @param b - A number representing the lower bound
 */
export function Clamp(v: number, a: number = 1, b: number = 0): number {
  let mn = min(a, b);
  let mx = max(a, b);
  return max(mn, min(v, mx));
}

/**
 * Rounds a given number to a divisor
 * @param v - The number to round
 * @param div - The number to round to
 * @param func - The rounding function to use
 */
export function RoundTo(v: number, div: number = 1, func: rFunc = floor): number {
  return func(v / div) * div;
}

/**
 * Rounds a given number to the given decimal place
 * @param v - The number to round
 * @param dec - The decimal place to round to
 * @param func - The rounding function to use
 */
export function RoundDec(v: number, dec: number = 2, func: rFunc = floor): number {
  dec = Math.pow(10, dec);
  return func(v * dec) / dec;
}

/**
 * Maps a given number from one bounds to another
 * @param v - The number to rebound
 * @param a1 - The upper bound of the first bounds
 * @param b1 - The lower bound of the first bounds
 * @param a2 - The upper bound of the second bounds
 * @param b2 - The lower bound of the second bounds
 */
export function Map(v: number, a1: number, b1: number, a2: number, b2: number): number {
  let mn1 = min(a1, b1);
  let mx1 = max(a1, b1);
  let mn2 = min(a2, b2);
  let mx2 = max(a2, b2);
  return Lerp(ILerp(v, mn1, mx1), mn2, mx2);
}

/**
 * Finds the linear value that produces the number provided within the range ab
 * @param v - The number to evaluate
 * @param a - The lower bound of the range
 * @param b - The upper bound of the range
 */
export function ILerp(v: number, a: number = 0, b: number = 1) {
  v = Clamp(v, a, b);
  let r = b - a;
  return (v - a) / r;
}

/**
 * Linearly interpolates within the range ab by t
 * @param t - The interpolation value
 * @param a - The lower bound of the range
 * @param b - The upper bound of the range
 */
export function Lerp(t: number, a: number = 0, b: number = 1) {
  t = Clamp(t);
  let r = b - a;
  return a + r * t;
}

/**
 * Finds a random integer within range ab
 * @param a - The lower bound of the range
 * @param b - The upper bound of the range
 * @param func - The rounding function to use
 */
export function RandInt(a: number = 1, b: number = 0, func: rFunc = floor) {
  return Random(a, b, 0, func);
}

/**
 * Finds a random value within range ab
 * @param a - The lower bound of the range
 * @param b - The upper bound of the range
 * @param dec - The decimal place to round to
 * @param func - The rounding function to use
 */
export function Random(a: number = 1, b: number = 0, dec: number = 2, func: rFunc = floor) {
  let mx = max(a, b);
  let mn = min(a, b);
  return RoundDec(random() * (mx - mn) + mn, dec, func);
}
