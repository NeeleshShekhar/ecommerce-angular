import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNComponent } from './footer-n.component';

describe('FooterNComponent', () => {
  let component: FooterNComponent;
  let fixture: ComponentFixture<FooterNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
