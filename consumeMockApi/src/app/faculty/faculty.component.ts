import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  data:Faculty[]=[];

  constructor(private api:ApiFacultyService){}

  ngOnInit(){
    this.api.getAllFaculty().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
    })
  }

  delete(id:any){
    this.api.deleteStudentById(id).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }
}
