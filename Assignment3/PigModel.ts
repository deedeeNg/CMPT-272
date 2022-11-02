enum categoriesEnum {
  Grey,
  Chestnut,
  White,
  Black,
}

export class Pig {
  static num = 0;
  name: string;
  breed: string;
  height: number;
  weight: number;
  personality: string;
  constructor(
    private Name: string,
    private Breed: string,
    private Height: number,
    private Weight: number,
    private Personality: string
  ) {
    this.name = Name;
    this.breed = Breed;
    this.height = Height;
    this.weight = Weight;
    this.personality = Personality;
    Pig.num++;
  }
}
