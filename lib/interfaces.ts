/** A {@link Point} represented by an XYZ value */
export interface Point {
  /** The X value of the {@link Point} */
  x: number;
  /** The Y value of the {@link Point} */
  y: number;
  /** The Z value of the {@link Point} */
  z: number;
}

/** An {@link HSLObject} represented by an HSL value */
export interface HSLObject {
  /** The color this {@link HSLObject} was built from */
  readonly color?: number;
  /** The hue value of the {@link HSLObject} */
  h: number;
  /** The saturation value of the {@link HSLObject} */
  s: number;
  /** The lightness value of the {@link HSLObject} */
  l: number;
}

/** An {@link RGBObject} represented by an RGB value */
export interface RGBObject {
  /** The color this {@link RGBObject} was built from */
  readonly color?: number;
  /** The red value of the {@link RGBObject} */
  r: number;
  /** The green value of the {@link RGBObject} */
  g: number;
  /** The blue value of the {@link RGBObject} */
  b: number;
}

/** A {@link ColorObject} represented by a Color and Alpha value */
export interface ColorObject {
  /** The color value of the {@link ColorObject} */
  color: number;
  /** The alpha value of the {@link ColorObject} */
  alpha: number;
}

/** An {@link HexObject} represented by a hex value */
export interface HexObject {
  /** The color this {@link HexObject} was built from */
  readonly color?: number;
  /** The hex value of the {@link HexObject} */
  hex: string;
}
