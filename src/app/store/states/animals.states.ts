import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddAnimalAction } from '../actions/add-animal.actions';
import { patch } from '@ngxs/store/operators';

export interface Animal {
  name: string;
  animalType: string;
}
export interface AnimalsStateModel {
  newAnimals: Animal[];
}
@State<AnimalsStateModel>({
  name: 'animals',
  defaults: {
    newAnimals: []
  }
})
@Injectable()
export class AnimalsState {

  @Action(AddAnimalAction)
  addAnimal(ctx: StateContext<AnimalsStateModel>, action: AddAnimalAction): void {
    const state = ctx.getState();

    console.log('state', state)
    console.log(action)

    const {name, animalType} = action;
    if(!name) {
      return;
    }

    ctx.setState(
      patch<AnimalsStateModel>({
        newAnimals: [...state.newAnimals, {name, animalType}]
      })
  );

    console.log('ctx', ctx.getState())
  }
}
