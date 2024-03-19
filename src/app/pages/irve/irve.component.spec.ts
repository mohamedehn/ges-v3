import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrveComponent } from './irve.component';

describe('IrveComponent', () => {
  let component: IrveComponent;
  let fixture: ComponentFixture<IrveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrveComponent]
    });
    fixture = TestBed.createComponent(IrveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
