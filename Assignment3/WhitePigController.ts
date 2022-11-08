import { WhitePig } from './WhitePigModel';

interface WhitePigControllerInterface {
  add(p: WhitePig): void;
  getAll(): WhitePig[];
  get(index: number): WhitePig;
  remove(index: number): void;
}

export class WhitePigController implements WhitePigControllerInterface {
  pig: WhitePig[];

  constructor() {
    this.pig = [];
  }

  add(p: WhitePig): void {
    this.pig.push(p);
    localStorage.pigArray = JSON.stringify(this.pig);
  }

  getAll(): WhitePig[] {
    return JSON.parse(localStorage.pigArray);
  }

  get(index: number): WhitePig {
    return this.pig[index];
  }

  remove(index: number): void {
    this.pig.splice(index, 1);
    localStorage.pigArray = JSON.stringify(this.pig);
  }
}
