import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  // Loading flag
  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA102',
      credits: 3,
      gradeStatus: 'failed',
      enrolled: false
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SB103',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: false
    },
    {
      id: 4,
      name: 'SQL',
      code: 'SQL104',
      credits: 2,
      gradeStatus: 'passed',
      enrolled: false
    },
    {
      id: 5,
      name: 'Data Structures',
      code: 'DS105',
      credits: 5,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course: ' + courseId);

    this.selectedCourseId = courseId;

    const course = this.courses.find(c => c.id === courseId);

    if (course) {
      course.enrolled = true;
    }
  }

  // trackBy improves performance by reusing DOM elements
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}