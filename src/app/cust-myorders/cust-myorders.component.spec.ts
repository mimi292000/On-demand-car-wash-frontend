import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustMyordersComponent } from './cust-myorders.component';

describe('CustMyordersComponent', () => {
  let component: CustMyordersComponent;
  let fixture: ComponentFixture<CustMyordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustMyordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustMyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
