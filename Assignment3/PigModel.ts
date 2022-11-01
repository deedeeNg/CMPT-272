export class Pig {
  static num = 0;
  name: string;
  breed: string;
  height: string;
  weight: string;
  constructor(
    public Name: string,
    public Breed: string,
    public Height: string,
    public Weight: string
  ) {
    this.name = Name;
    this.breed = Breed;
    this.height = Height;
    this.weight = Weight;
    Pig.num++;
  }
}
