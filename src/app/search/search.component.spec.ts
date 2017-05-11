import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { GenderPipe } from '../gender.pipe';
import { PersonService } from '../person.service';
import { HttpModule } from '@angular/http';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, GenderPipe ],
      imports: [
        RouterModule,
        HttpModule
      ],
      providers: [PersonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(component.add(1, 2)).toBe(3);
    expect(component.add(0, 0)).not.toBeUndefined();
  });

  it('Should test Person Service',
    inject([PersonService], (personService) => {
    expect(personService).toBeDefined();
    personService.getPeople('test')
      .subscribe(people => {
        expect(people.length).toBe(2);
        expect(people).toContain(jasmine.objectContaining({
          last: 'Testerman'
        }));
      });

      // calling a function that returns a specific number
      expect(component.return1()).toBe(999);
      expect(component.return1()).toBeGreaterThan(-999);
  }));

});
