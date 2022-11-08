import { GreyPig } from './GreyPigModel';

interface GreyPigControllerInterface {
  add(p: GreyPig): void;
  getAll(): GreyPig[];
  get(index: number): GreyPig;
  remove(index: number): void;
}

export class GreyPigController implements GreyPigControllerInterface {
  pig: GreyPig[];

  constructor() {
    this.pig = [];
  }

  add(p: GreyPig): void {
    this.pig.push(p);
    localStorage.GreypigArray = JSON.stringify(this.pig);
  }

  getAll(): GreyPig[] {
    return JSON.parse(localStorage.GreypigArray);
  }

  get(index: number): GreyPig {
    return this.pig[index];
  }

  remove(index: number): void {
    this.pig.splice(index, 1);
    localStorage.GreypigArray = JSON.stringify(this.pig);
  }
}
