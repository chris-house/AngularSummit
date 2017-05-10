import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowComponent } from './show.component';
import { PersonService } from '../person.service';
import { HttpModule } from '@angular/http';
describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComponent ],
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        PersonService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
