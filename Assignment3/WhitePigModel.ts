import { categoriesEnum, Pig } from './PigModel';

export class WhitePig extends Pig {
  running: number;
  constructor(
    n: string,
    b: string,
    h: number,
    w: number,
    s: number,
    p: string
  ) {
    super(n, b, h, w, p); // constructor for Pig
    this.running = s;
    this.category = categoriesEnum.White;
  }
}
