import {ColorObject, RGBObject, HSLObject, HexObject} from "./interfaces";

export class Color implements ColorObject {
  public readonly color: number;
  public alpha: number;

  public constructor(obj: ColorObject) {
    this.color = obj.color;
    this.alpha = obj.alpha;
  }

  public get rgb(): RGBObject {
    return {
      color: this.color,
      r: this.red,
      g: this.green,
      b: this.blue
    };
  }

  public get red(): number {
    return (this.color & 0xFF0000) >> 16;
  }

  public get green(): number {
    return (this.color & 0xFF00) >> 8;
  }

  public get blue(): number {
    return this.color & 0xFF;
  }

  public get hsl(): HSLObject {
    let h: number = 0;
    let s: number = 0;
    let l: number = 0;

    // TODO: RGB to HSL Conversion

    return {
      color: this.color,
      h: h,
      s: s,
      l: l
    }
  }

  public get hex(): HexObject {
    return {
      color: this.color,
      hex: `#${this.color.toString(16)}${this.alpha.toString(16)}`
    };
  }

  public get hue(): number {
    return this.hsl.h;
  }

  public get saturation(): number {
    return this.hsl.s;
  }

  public get lightness(): number {
    return this.hsl.l;
  }

  public static fromRGB(r: number, g: number, b: number, a: number = 255): Color {
    return new Color({color: r << 16 | g << 8 | b, alpha: a});
  }

  public static fromHSL(h: number, s: number = 50, l: number = 50, a: number = 100) {
    // TODO: HSL to RGB Conversion
    return new Color({color: 0, alpha: a});
  }

  public static fromHex(hex: string) {
    hex = hex.replace("#", "");
    let len = hex.length;
    if (len == 3 || len == 4) {
      let arr = hex.split("");
      if (len == 3) {
        arr.push("f");
      }
      arr = arr.map(v => `${v}${v}`);
      hex = arr.join("");
    } else if (len == 6) {
      hex += "ff";
    }

    return new Color({
      color: parseInt(`0x${hex.slice(0, -2)}`),
      alpha: parseInt(`0x${hex.slice(-2)}`)
    });
  }
}
