import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopMonitoringComponent } from './sop-monitoring.component';

describe('SopMonitoringComponent', () => {
  let component: SopMonitoringComponent;
  let fixture: ComponentFixture<SopMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SopMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
