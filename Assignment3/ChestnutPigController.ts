import { ChestnutPig } from './ChestnutPigModel';

interface ChestnutPigControllerInterface {
  add(p: ChestnutPig): void;
  getAll(): ChestnutPig[];
  get(index: number): ChestnutPig;
  remove(index: number): void;
}

export class ChestnutPigController implements ChestnutPigControllerInterface {
  pig: ChestnutPig[];

  constructor() {
    this.pig = [];
  }

  add(p: ChestnutPig): void {
    this.pig.push(p);
    localStorage.ChestnutpigArray = JSON.stringify(this.pig);
  }

  getAll(): ChestnutPig[] {
    return JSON.parse(localStorage.ChestnutpigArray);
  }

  get(index: number): ChestnutPig {
    return this.pig[index];
  }

  remove(index: number): void {
    this.pig.splice(index, 1);
    localStorage.ChestnutpigArray = JSON.stringify(this.pig);
  }
}
