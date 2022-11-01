import { Pig } from './PigModel';

export class WhitePig extends Pig {
  strength: number;
  personality: string;
  constructor(
    n: string,
    b: string,
    h: string,
    w: string,
    s: number,
    p: string
  ) {
    super(n, b, h, w); // constructor for Pig
    this.strength = s;
    this.personality = p;
  }
}
