import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
 private person: any;
 constructor(private personService: PersonService,
 private route: ActivatedRoute) {}

 ngOnInit() {
  this.route.params.subscribe(params => {
    let id = +params['id']; // (+) converts string 'id' to a number
      this.personService.getPerson(id)
        .subscribe((person) => {
        this.person = person;
        });
      });
    }
 }
