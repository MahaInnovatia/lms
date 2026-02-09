import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseByStudentComponent } from './course-by-student.component';

describe('CourseByStudentComponent', () => {
  let component: CourseByStudentComponent;
  let fixture: ComponentFixture<CourseByStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseByStudentComponent]
    });
    fixture = TestBed.createComponent(CourseByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
