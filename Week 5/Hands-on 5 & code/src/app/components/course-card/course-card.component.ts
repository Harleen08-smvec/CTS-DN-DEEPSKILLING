import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    CreditLabelPipe
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
    enrolled: boolean;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  // Getters keep templates clean by moving class logic out of the HTML.
  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderColor() {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      default:
        return 'gray';
    }
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

}