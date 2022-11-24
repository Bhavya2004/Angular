import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"faculty",component:FacultyComponent},
  {path:"",component:HomeComponent},
  {path:"faculty/:id",component:DetailFacultyComponent},
  {path:"product",component:ProductComponent},
  {path:"product/:id",component:DetailProductComponent},
  {path:"student",component:StudentComponent},
  {path:"student/:id",component:DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
