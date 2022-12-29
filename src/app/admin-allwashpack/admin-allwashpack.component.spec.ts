import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllwashpackComponent } from './admin-allwashpack.component';

describe('AdminAllwashpackComponent', () => {
  let component: AdminAllwashpackComponent;
  let fixture: ComponentFixture<AdminAllwashpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllwashpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllwashpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
