import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Student } from '../../../../models/student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailsstudent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detailsstudent.component.html',
  styleUrl: './detailsstudent.component.css'
})
export class DetailsstudentComponent {
  studentId: any;  
  student: Student | null = null; 
  
  httpClient = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);

  getproduct() {
    this.studentId = this.activatedRoute.snapshot.params['id'];
    return this.httpClient.get<Student>("http://localhost:3000/students/" + this.studentId);
    
  }

  ngOnInit() {
    this.getproduct().subscribe((data) => {
      this.student = data; 
    });
  }
}
