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
