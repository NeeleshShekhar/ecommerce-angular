import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateAddressComponent } from './addupdate-address.component';

describe('AddupdateAddressComponent', () => {
  let component: AddupdateAddressComponent;
  let fixture: ComponentFixture<AddupdateAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddupdateAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddupdateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
