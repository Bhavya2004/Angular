import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  data:Student[]=[];

  constructor(private api:ApiStudentService){}

  ngOnInit(){
    this.api.getAllStudent().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
    })
  }
}
