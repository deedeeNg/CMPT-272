import { categoriesEnum, Pig } from './PigModel';

export class GreyPig extends Pig {
  constructor(
    n: string,
    b: string,
    h: number,
    w: number,
    s: number,
    p: string
  ) {
    super(n, b, h, w, p); // constructor for Pig
    this.swimming = s;
    this.category = categoriesEnum.Grey;
  }
}
