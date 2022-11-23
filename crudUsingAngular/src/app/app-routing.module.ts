import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"student",component:StudentComponent},
  {path:"faculty",component:FacultyComponent},
  {path:"product",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
