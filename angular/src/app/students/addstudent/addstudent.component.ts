import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Student } from './../../../../models/student';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterLink],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css',
})
export class AddstudentComponent {
  student: Student = {} as Student;
  errorMessage: string | null = null;
  httpClint = inject(HttpClient);
  router = inject(Router);

  onSubmit() {
    if (
      !this.student.fullName ||
      !this.student.age ||
      !this.student.email ||
      !this.student.class
    ) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
  
    this.errorMessage = null;
    console.log(this.student);
    this.httpClint
      .post<Student>('http://localhost:3000/students/add', this.student)
      .subscribe(
        (response) => {
          console.log('Student added successfully', response);
          this.router.navigate(['/']);
        },
        (error) => {
          if (error.status === 400) {
            this.errorMessage = error.error.message;  
          } else {
            console.error('An error occurred.', error);
          }
        }
      );
  }
  
}
