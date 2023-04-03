import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateOfferComponent } from './add-update-offer.component';

describe('AddUpdateOfferComponent', () => {
  let component: AddUpdateOfferComponent;
  let fixture: ComponentFixture<AddUpdateOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
