import { StudentService } from './../../core/service/student.service';
import { StudenId } from './../../core/models/class.model';
import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'app/admin/students/students.service';
import { CourseService } from '@core/service/course.service';
import { AppConstants } from '@shared/constants/app.constants';

@Component({
  selector: 'app-course-by-student',
  templateUrl: './course-by-student.component.html',
  styleUrls: ['./course-by-student.component.scss']
})
export class CourseByStudentComponent {
  StudenId: string = '';
  responseData:any;
  commonRoles: typeof AppConstants | undefined;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

    this.activatedRoute.params.subscribe((params: any) => {
      this.StudenId = params['id'];
    });
  }


  breadscrums = [
    {
      title: 'Users',
      items: ['Course'],
      active: 'User Details',
    },
  ];



  ngOnInit(): void {
    this.commonRoles = AppConstants
    if (this.StudenId) {
      this.getCourseByStudent();
    }
  }

  getCourseByStudent() {
    this.courseService.getStudentClassesByStudentId(this.StudenId).subscribe((res: any) => {
      this.responseData = res.data;
    });
  }




  getProgressClass(value: number): string {
  if (value === 0) {
    return 'zero';
  } else if (value <= 40) {
    return 'low';
  } else if (value <= 80) {
    return 'medium';
  } else {
    return 'high';
  }
}

getStatusLabel(status: string): string {
  if (status === 'enquiry') {
    return 'Not Registered';
  }

  if (status === 'registered' || status === 'approved') {
    return 'Not Yet Started';
  }

  return this.capitalizeFirstLetter(status);
}

capitalizeFirstLetter(value: string): string {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}
}


