import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustWpComponent } from './cust-wp.component';

describe('CustWpComponent', () => {
  let component: CustWpComponent;
  let fixture: ComponentFixture<CustWpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustWpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustWpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
