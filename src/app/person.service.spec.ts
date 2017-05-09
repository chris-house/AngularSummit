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

  it('should ...', inject([PersonService], (service: PersonService) => {
    expect(service).toBeTruthy();
  }));
});
