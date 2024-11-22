import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { DetailsstudentComponent } from './students/detailsstudent/detailsstudent.component';
import { AddstudentComponent } from './students/addstudent/addstudent.component';
import { EditstudentComponent } from './students/editstudent/editstudent.component';
import { DeletestudentComponent } from './students/deletestudent/deletestudent.component';

export const routes: Routes = [
  { path: '', component: StudentsComponent },
   {path: "details/:id" , component:DetailsstudentComponent},
   {path: "add" , component:AddstudentComponent},
   { path: "update/:id", component: EditstudentComponent },
   { path: "delete/:id", component: DeletestudentComponent },
  { path: '**', component: PageNotFoundComponent },
];
