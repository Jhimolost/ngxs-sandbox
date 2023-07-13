
import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { AddAnimalAction } from 'src/app/store/actions/add-animal.actions';
import { AnimalsSelector } from 'src/app/store/selectors/animals.selector';
​
@Component({
  selector: 'ui-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
 })
export class ZooComponent {
  @Select(AnimalsSelector.Animals)
  animals$!: Observable<any>;
  types = ['kangaroo', 'koala', 'peacock', 'gorilla'];

  constructor(private store: Store) {}
​
  addAnimal(name: string, type: string) {
    this.store.dispatch(new AddAnimalAction(name, type))
    .pipe(withLatestFrom(this.animals$))
    .subscribe(([_, animals]) => {
      console.log(animals)
      // do something with animals
      //this.form.reset();
    });
  }
}
