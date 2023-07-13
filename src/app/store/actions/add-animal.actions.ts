export class AddAnimalAction {
  static readonly type = '[Zoo] Add Animal';
  constructor(public name: string, public animalType: string) {}
}
