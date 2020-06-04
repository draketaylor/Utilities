import {Point} from "./interfaces";

/** A class representing a {@link Vector} */
export class Vector implements Point {
  public x: number;
  public y: number;
  public z: number;

  /**
   * Creates a Vector
   * @param x - The X value of the {@link Vector}
   * @param y - The Y value of the {@link Vector}
   * @param z - The Z value of the {@link Vector}
   */
  public constructor(x: number, y: number, z?: number) {
    this.x = x;
    this.y = y;
    this.z = z ? z : 0;
  }

  /** The point of the {@link Vector} */
  public get point(): Point {
    return {x: this.x, y: this.y, z: this.z};
  }

  /** The length of the {@link Vector} */
  public get magnitude(): number {
    return Math.sqrt(this.sqrMagnitude);
  }

  /** The length of the {@link Vector} squared */
  public get sqrMagnitude(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  /** The normalized {@link Vector} of the {@link Vector} */
  public get normalized(): Vector {
    return Vector.fromVector(this).normalize();
  }

  /** Normalizes the {@link Vector} */
  public normalize(): this {
    return this.div(this.magnitude);
  }

  /**
   * Performs addition
   * @param a - Either a number or {@link Vector} representing the XYZ value
   * @param b - A number representing the Y value
   * @param c - A number representing the Z value
   */
  public add(a: number|Vector, b?: number, c?: number): this {
    let {x, y, z} = Vector.getPoint(a, b, c);
    this.x += x;
    this.y += y;
    this.z += z;
    return this;
  }

  /**
   * Performs subtraction
   * @param a - Either a number or {@link Vector} representing the XYZ value
   * @param b - A number representing the Y value
   * @param c - A number representing the Z value
   */
  public sub(a: number|Vector, b?: number, c?: number): this {
    let {x, y, z} = Vector.getPoint(a, b, c);
    this.x -= x;
    this.y -= y;
    this.z -= z;
    return this;
  }

  /**
   * Performs multiplication
   * @param a - Either a number or {@link Vector} representing the XYZ value
   * @param b - A number representing the Y value
   * @param c - A number representing the Z value
   */
  public mult(a: number|Vector, b?: number, c?: number): this {
    let {x, y, z} = Vector.getPoint(a, b, c);
    this.x *= x;
    this.y *= y;
    this.z *= z;
    return this;
  }

  /**
   * Performs division
   * @param a - Either a number or {@link Vector} representing the XYZ value
   * @param b - A number representing the Y value
   * @param c - A number representing the Z value
   */
  public div(a: number|Vector, b?: number, c?: number): this {
    let {x, y, z} = Vector.getPoint(a, b, c);
    this.x /= x;
    this.y /= y;
    this.z /= z;
    return this;
  }

  /**
   * Creates a new {@link Vector} from another {@link Vector}
   * @param v - A {@link Vector}
   */
  public static fromVector(v: Vector): Vector {
    return new Vector(v.x, v.y, v.z);
  }

  /**
   * Finds the sum of two {@link Vector}s
   * @param a - A {@link Vector}
   * @param b - A {@link Vector}
   */
  public static add(a: Vector, b: Vector): Vector {
    return Vector.fromVector(a).add(b);
  }

  /**
   * Finds the difference of two {@link Vector}s
   * @param a - A {@link Vector}
   * @param b - A {@link Vector}
   */
  public static sub(a: Vector, b: Vector): Vector {
    return Vector.fromVector(a).sub(b);
  }

  /**
   * Finds the product of two {@link Vector}s
   * @param a - A {@link Vector}
   * @param b - A {@link Vector}
   */
  public static mult(a: Vector, b: Vector): Vector {
    return Vector.fromVector(a).mult(b);
  }

  /**
   * Finds the quotient of two {@link Vector}s
   * @param a - A {@link Vector}
   * @param b - A {@link Vector}
   */
  public static div(a: Vector, b: Vector): Vector {
    return Vector.fromVector(a).div(b);
  }

  /**
   * Finds the distance between two {@link Vector}s squared
   * @param a - A {@link Vector}
   * @param b - A {@link Vector}
   */
  public static sqrDist(a: Vector, b: Vector): number {
    let x = (b.x - a.x);
    x *= x;
    let y = (b.y - a.y);
    y *= y;
    let z = ((b.z ? b.z : 0) - (a.z ? a.z : 0));
    z *= z;
    return x + y + z;
  }

  /**
   * Finds the distance between two {@link Vector}s
   * @param a - A {@link Vector}
   * @param b - A {@link Vector}
   */
  public static dist(a: Vector, b: Vector): number {
    return Math.sqrt(Vector.sqrDist(a, b));
  }

  /**
   * Creates a {@link Point} from given parameters
   * @param a - Either a number or {@link Vector} representing the XYZ value
   * @param b - A number representing the Y value
   * @param c - A number representing the Z value
   */
  private static getPoint(a: number|Vector, b?: number, c?: number): Point {
    let x: number = a instanceof Vector ? a.x : a;
    let y: number = a instanceof Vector ? a.y : b ? b : a;
    let z: number = a instanceof Vector ? a.z : c ? c : a;

    return {x: x, y: y, z: z};
  }
}
