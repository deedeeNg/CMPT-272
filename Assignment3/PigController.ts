import { Pig } from './PigModel';
import { BlackPig } from './BlackPigModel';
import { WhitePig } from './WhitePigModel';
import { GreyPig } from './GreyPigModel';
import { ChestnutPig } from './ChestnutPigModel';

interface PigControllerInterface {
  add(p: Pig): void;
  getAll(): Pig[];
  get(index: number): Pig;
  remove(index: number): void;
}

export class PigController implements PigControllerInterface {
  pig: Pig[];

  constructor() {
    this.pig = [];
  }

  add(p: Pig): void {
    this.pig.push(p);
    localStorage.pigArray = JSON.stringify(this.pig);
  }

  getAll(): Pig[] {
    return JSON.parse(localStorage.pigArray);
  }

  get(index: number): Pig {
    return this.pig[index];
  }

  remove(index: number): void {
    this.pig.splice(index, 1);
    localStorage.pigArray = JSON.stringify(this.pig);
  }
}
