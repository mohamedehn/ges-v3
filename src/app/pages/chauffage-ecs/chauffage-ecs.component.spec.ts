import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffageEcsComponent } from './chauffage-ecs.component';

describe('ChauffageEcsComponent', () => {
  let component: ChauffageEcsComponent;
  let fixture: ComponentFixture<ChauffageEcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChauffageEcsComponent]
    });
    fixture = TestBed.createComponent(ChauffageEcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
