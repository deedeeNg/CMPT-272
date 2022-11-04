import { Pig } from './PigModel';
import { BlackPig } from './BlackPigModel';
import { WhitePig } from './WhitePigModel';
import { GreyPig } from './GreyPigModel';
import { ChestnutPig } from './ChestnutPigModel';

interface PigControllerInterface {
  add(p: Pig): void;
  getAll(): Pig[];
  get(index: number): Pig;
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

  getAll() {
    return JSON.parse(localStorage.pigArray);
  }

  get(index: number) {
    return this.pig[index];
  }
}
