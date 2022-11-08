import { BlackPig } from './BlackPigModel';

interface BlackPigControllerInterface {
  add(p: BlackPig): void;
  getAll(): BlackPig[];
  get(index: number): BlackPig;
  remove(index: number): void;
}

export class BlackPigController implements BlackPigControllerInterface {
  pig: BlackPig[];

  constructor() {
    this.pig = [];
  }

  add(p: BlackPig): void {
    this.pig.push(p);
    localStorage.pigArray = JSON.stringify(this.pig);
  }

  getAll(): BlackPig[] {
    return JSON.parse(localStorage.pigArray);
  }

  get(index: number): BlackPig {
    return this.pig[index];
  }

  remove(index: number): void {
    this.pig.splice(index, 1);
    localStorage.pigArray = JSON.stringify(this.pig);
  }
}
