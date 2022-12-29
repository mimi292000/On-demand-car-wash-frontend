import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustMyprofileComponent } from './cust-myprofile.component';

describe('CustMyprofileComponent', () => {
  let component: CustMyprofileComponent;
  let fixture: ComponentFixture<CustMyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustMyprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
