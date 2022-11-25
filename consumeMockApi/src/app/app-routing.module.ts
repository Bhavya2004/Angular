import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
 
  {path:"",component:HomeComponent},
  {path:"faculty",component:FacultyComponent},
  {path:"product",component:ProductComponent},
  {path:"student",component:StudentComponent},
  {path:"faculty/add",component:AddFacultyComponent},
  {path:"product/add",component:AddProductComponent},
  {path:"student/add",component:AddStudentComponent},
  {path:"faculty/edit/:id",component:AddFacultyComponent},
  {path:"product/edit/:id",component:AddProductComponent},
  {path:"student/edit/:id",component:AddStudentComponent},
  {path:"student/:id",component:DetailStudentComponent},
  {path:"faculty/:id",component:DetailFacultyComponent},
  {path:"product/:id",component:DetailProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
