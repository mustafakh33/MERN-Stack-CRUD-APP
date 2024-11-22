import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../../models/student';

@Component({
  selector: 'app-editstudent',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
  studentId: string;
  student: Student = {} as Student;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.studentId = this.route.snapshot.paramMap.get('id') || '';
    this.getStudentDetails();
  }

  getStudentDetails() {
    this.http.get(`http://localhost:3000/students/${this.studentId}`).subscribe({
      next: (data: any) => {
        this.student = data;
        console.log('Student data loaded:', this.student); 
      },
      error: (error) => {
        console.error('Error fetching student data', error); 
      }
    });
  }
  
  updateStudent() {
    this.http.put(`http://localhost:3000/students/${this.studentId}`, this.student).subscribe({
      next: (response) => {
        console.log('Student updated successfully', response);
        this.router.navigate(['/']); 
      },
      error: (error) => {
        console.error('Error updating student', error); 
      }
    });
  }
}
