import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { PersonService } from './person.service';
import 'rxjs/Rx'; // For methods for Observables
import { Person } from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello Angular!';
  name: String = '';
  obj: any = {
    type: 'Identifier',
    name: 'Chris',
    id: 0
  };

  people: Person[] = new Array<Person>();
  predicate = '';
  reverse: Boolean = true;

  constructor( private personService: PersonService) {
  }

  ngOnInit() {
    let i: any = 0;
    for (i = 0; i < 10; i++) {
      console.log(i);
    }
    // i becomes 10
    console.log('After for ' + i);


    // destructoring
    // zndg.tl/typescriptes6
    const {type, name} = this.obj;
    console.log(type, name);
    this.name = name;

  }

checkSearch(term) {
 if (term.length < 1) {
   this.people = [];
 } else {
   this.personService.getPeople(term)
     .subscribe(people => this.people = people);
 }
}

  toggleSortOrder(column) {
    if (column !== this.predicate) {
      this.predicate = column;
      this.people.sort((itemOne, itemTwo) =>
        (itemOne[column] < itemTwo[column]) ? -1 :
          (itemOne[column] > itemTwo[column]) ? 1 : 0
      );
     } else {
        this.people.reverse();
        this.reverse = !this.reverse;
    }
  }
  arrow(column: string) {
    if (this.predicate === column) {
      return this.reverse ? '▼' : '▲';
    }
  }
}
