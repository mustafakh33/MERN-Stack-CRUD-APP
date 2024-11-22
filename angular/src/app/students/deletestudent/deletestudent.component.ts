import { Component, inject } from '@angular/core';
import { Student } from '../../../../models/student';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-deletestudent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './deletestudent.component.html',
  styleUrl: './deletestudent.component.css'
})
export class DeletestudentComponent {
  studentId: any;
  student: Student = {} as Student;

  httpClient = inject(HttpClient)
  activatedRoute = inject(ActivatedRoute)
  router=inject(Router)

  getproduct() {
    this.studentId = this.activatedRoute.snapshot.params['id'];
    return this.httpClient.get<Student>("http://localhost:3000/students/" + this.studentId);
  }

  ngOnInit() {
    this.getproduct().subscribe((data) => {
      this.student = data;
    });
  }
  delete() {
    this.httpClient.delete<Student>("http://localhost:3000/students/" + this.studentId).subscribe(() => {
      this.router.navigate(['']); 
    });
  }
}
