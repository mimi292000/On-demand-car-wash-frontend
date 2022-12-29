import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAddorderComponent } from './cust-addorder.component';

describe('CustAddorderComponent', () => {
  let component: CustAddorderComponent;
  let fixture: ComponentFixture<CustAddorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustAddorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustAddorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
