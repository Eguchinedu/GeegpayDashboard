import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFourComponent } from './card-four.component';

describe('CardFourComponent', () => {
  let component: CardFourComponent;
  let fixture: ComponentFixture<CardFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFourComponent]
    });
    fixture = TestBed.createComponent(CardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
