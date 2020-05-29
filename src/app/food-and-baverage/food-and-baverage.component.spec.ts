import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBaverageComponent } from './food-baverage.component';

describe('FoodBaverageComponent', () => {
  let component: FoodBaverageComponent;
  let fixture: ComponentFixture<FoodBaverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBaverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBaverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
