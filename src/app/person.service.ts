import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PersonService {
  server = 'http://localhost:8081';

  constructor(private http: Http) { }

  getPeople(term: string) {
 return this.http.get(this.server + '/people/' + term)
   .map((res) => res.json())
   .map((response) => {
     response.people.forEach((person) => {
       person.birthDate = new Date(person.birthDate);
     });
     return response.people;
   });
}
}
