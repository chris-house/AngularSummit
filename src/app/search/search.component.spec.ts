import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
});
