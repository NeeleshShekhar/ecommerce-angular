import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategriesComponent } from './categries.component';

describe('CategriesComponent', () => {
  let component: CategriesComponent;
  let fixture: ComponentFixture<CategriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
