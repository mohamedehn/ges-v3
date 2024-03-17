import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilationComponent } from './ventilation.component';

describe('VentilationComponent', () => {
  let component: VentilationComponent;
  let fixture: ComponentFixture<VentilationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentilationComponent]
    });
    fixture = TestBed.createComponent(VentilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
