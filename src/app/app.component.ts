import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';
import 'rxjs/Rx'; // For methods for Observables
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

  server = 'http://localhost:8081';
  people = [];

  constructor(private http: Http) {
  }

  checkSearch(term) {
    if (term.length < 1) {
      this.people = [];
    } else {
      this.http.get(this.server + '/people/' + term)
        .map((res) => res.json())
        .subscribe((response) => {
          this.people = response.people;
        });
    }
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

}
