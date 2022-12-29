import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddwashpackComponent } from './admin-addwashpack.component';

describe('AdminAddwashpackComponent', () => {
  let component: AdminAddwashpackComponent;
  let fixture: ComponentFixture<AdminAddwashpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddwashpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddwashpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
