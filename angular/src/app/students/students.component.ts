import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { DetailsstudentComponent } from './detailsstudent/detailsstudent.component';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, FormsModule,AddstudentComponent,EditstudentComponent,DeletestudentComponent,DetailsstudentComponent,FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  httpclint = inject(HttpClient);

  allStudents: Student[] = [];
  searchtext: string = '';

  getAllProducts() {
    return this.httpclint.get<Student[]>('http://localhost:3000/students');
  }


  ngOnInit() {
    this.getAllProducts().subscribe((data) => { 
      this.allStudents = data; 
      console.log(this.allStudents[0]._id); 
    });
  }

  search() {
    if (this.searchtext && this.searchtext.trim() !== '') {
      this.httpclint.get<Student[]>('http://localhost:3000/students/search?fullName=&email=' + this.searchtext).subscribe((data) => {
        this.allStudents = data;
      });
    } else {
      this.getAllProducts().subscribe((data) => {
        this.allStudents = data;
      });
    }
  }
  

}
