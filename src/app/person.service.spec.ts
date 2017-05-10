import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { PersonService } from './person.service';

describe('PersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonService],
      imports: [
        HttpModule
      ],
    });
  });

  it('should test api', inject([PersonService], (service: PersonService) => {
    // expect(service).toBeTruthy();
    // todo: use a mock service
    // http://stackoverflow.com/questions/40319045/mock-custom-service-in-angular2-during-unit-test
       //service.getPeople('testerman')
        //.subscribe(people => expect(people.gender).toBe('Female'));

  }));


});
