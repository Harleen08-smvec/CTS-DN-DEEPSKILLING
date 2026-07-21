import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  availableCourses = 0;
  isPortalActive = true;

  message = '';

  // Property binding [property] sends data from the component to the DOM.
  // Two-way binding [(ngModel)] keeps the component and the DOM synchronized in both directions.
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
  ngOnInit(): void {
  this.availableCourses = 12;

  console.log('HomeComponent initialised — courses loaded');
}
ngOnDestroy(): void {
  console.log('HomeComponent destroyed');
}

}