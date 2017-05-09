import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello Angular!';
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
    const {type, name} = this.obj;
    console.log(type, name);

  }

}
