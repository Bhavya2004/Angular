import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css']
})
export class DetailFacultyComponent {
  id=0;
  data:Faculty=new Faculty();

  constructor(private actRoute:ActivatedRoute,private api:ApiFacultyService){
    
  }

  ngOnInit(){
    this.id=this.actRoute.snapshot.params['id'];
    this.api.getStudentById(this.id).subscribe((res:any)=>{
      this.data=res;
    })
  }
}
