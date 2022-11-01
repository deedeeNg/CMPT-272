enum categoriesEnum {
  Grey,
  Chestnut,
  White,
  Black
}


export class Pig {
  static num = 0;
  name: string;
  breed: string;
  height: string;
  weight: string;
  constructor(
    private Name: string,
    private Breed: string,
    private Height: string,
    private Weight: string
  ) {
    this.name = Name;
    this.breed = Breed;
    this.height = Height;
    this.weight = Weight;
    Pig.num++;
  }
}



