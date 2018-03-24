import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBookComponent } from './recipe-book.component';

describe('RecipeBookComponent', () => {
  let component: RecipeBookComponent;
  let fixture: ComponentFixture<RecipeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
