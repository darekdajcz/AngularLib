import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieFormComponent } from './create-movie-form.component';

describe('CreateMovieFormComponent', () => {
  let component: CreateMovieFormComponent;
  let fixture: ComponentFixture<CreateMovieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMovieFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
