import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetilsComponent } from './movie-detils.component';

describe('MovieDetilsComponent', () => {
  let component: MovieDetilsComponent;
  let fixture: ComponentFixture<MovieDetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
