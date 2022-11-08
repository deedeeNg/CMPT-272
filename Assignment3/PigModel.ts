export enum categoriesEnum {
  Grey,
  Chestnut,
  White,
  Black,
}

export class Pig {
  static num = 0;
  category?: categoriesEnum;
  name: string;
  breed: string;
  height: number;
  weight: number;
  personality: string;
  constructor(
    Name: string,
    Breed: string,
    Height: number,
    Weight: number,
    Personality: string
  ) {
    this.name = Name;
    this.breed = Breed;
    this.height = Height;
    this.weight = Weight;
    this.personality = Personality;
    Pig.num++;
  }
}
