import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherRegisterComponent } from './washer-register.component';

describe('WasherRegisterComponent', () => {
  let component: WasherRegisterComponent;
  let fixture: ComponentFixture<WasherRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
