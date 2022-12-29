import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatewashpackComponent } from './admin-updatewashpack.component';

describe('AdminUpdatewashpackComponent', () => {
  let component: AdminUpdatewashpackComponent;
  let fixture: ComponentFixture<AdminUpdatewashpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdatewashpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdatewashpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
