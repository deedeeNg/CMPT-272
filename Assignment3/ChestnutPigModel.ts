import { categoriesEnum, Pig } from './PigModel';

export class ChestnutPig extends Pig {
  constructor(
    n: string,
    b: string,
    h: number,
    w: number,
    s: string,
    p: string
  ) {
    super(n, b, h, w, p); // constructor for Pig
    this.language = s;
    this.category = categoriesEnum.Chestnut;
  }
}
