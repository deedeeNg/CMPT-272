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
    localStorage.pigArray = JSON.stringify(this.pig);
  }

  getAll(): GreyPig[] {
    return JSON.parse(localStorage.pigArray);
  }

  get(index: number): GreyPig {
    return this.pig[index];
  }

  remove(index: number): void {
    this.pig.splice(index, 1);
    localStorage.pigArray = JSON.stringify(this.pig);
  }
}
