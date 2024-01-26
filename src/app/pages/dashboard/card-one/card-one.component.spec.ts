import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOneComponent } from './card-one.component';

describe('CardOneComponent', () => {
  let component: CardOneComponent;
  let fixture: ComponentFixture<CardOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOneComponent]
    });
    fixture = TestBed.createComponent(CardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
