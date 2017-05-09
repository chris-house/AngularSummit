import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import 'rxjs/Rx'; // For methods for Observables
import { Person } from '../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // people: Person[] = new Array<Person>();
  people = [];
  predicate = '';
  reverse: Boolean = true;

  constructor( private personService: PersonService) {
  }

  ngOnInit() {
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
