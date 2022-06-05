import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboxComponent } from './taskbox.component';

describe('TaskboxComponent', () => {
  let component: TaskboxComponent;
  let fixture: ComponentFixture<TaskboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
