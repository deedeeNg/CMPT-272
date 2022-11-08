import { categoriesEnum, Pig } from './PigModel';

export class BlackPig extends Pig {
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
    this.category = categoriesEnum.Black;
  }
}
