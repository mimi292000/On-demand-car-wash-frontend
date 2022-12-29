import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetallusersComponent } from './admin-getallusers.component';

describe('AdminGetallusersComponent', () => {
  let component: AdminGetallusersComponent;
  let fixture: ComponentFixture<AdminGetallusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetallusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGetallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
