import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOPRepositoryComponent } from './sop-repository.component';

describe('SOPRepositoryComponent', () => {
  let component: SOPRepositoryComponent;
  let fixture: ComponentFixture<SOPRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SOPRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SOPRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
