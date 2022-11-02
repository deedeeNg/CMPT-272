import { Pig } from './PigModel';

export class GreyPig extends Pig {
  strength: number;
  constructor(
    n: string,
    b: string,
    h: number,
    w: number,
    s: number,
    p: string
  ) {
    super(n, b, h, w, p); // constructor for Pig
    this.strength = s;
  }
}
