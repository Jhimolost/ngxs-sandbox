import { Selector } from "@ngxs/store";
import { Animal, AnimalsState, AnimalsStateModel } from "../states/animals.states";

export class AnimalsSelector {

  @Selector([AnimalsState])
  static Animals(state: AnimalsStateModel): Animal[] {
    return state.newAnimals;
  }
}
