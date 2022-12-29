import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetallwashersComponent } from './admin-getallwashers.component';

describe('AdminGetallwashersComponent', () => {
  let component: AdminGetallwashersComponent;
  let fixture: ComponentFixture<AdminGetallwashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetallwashersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGetallwashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
