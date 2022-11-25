import { Component } from '@angular/core';
import { FormControl, FormGroup }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent {
    id=-1;
    btnName="Add Faculty";
    headingName="Add New Faculty";

    constructor(private api:ApiFacultyService,private router:Router,private actRou:ActivatedRoute){

    }
  
    myForm= new FormGroup(
    {
      FacultyName: new FormControl(''),
      FacultyImage: new FormControl(''),
      FacultyEmail: new FormControl(''),
      FacultyDesignation: new FormControl('')
    }
  );

  ngOnInit(){
    if(this.actRou.snapshot.params['id']!=null){
      this.btnName="Edit Faculty";
      this.headingName="Edit Faculty";
      this.id=this.actRou.snapshot.params['id'];
      this.api.getStudentById(this.id).subscribe((res:any)=>{
        this.myForm.controls.FacultyDesignation.setValue(res.FacultyDesignation);
        this.myForm.controls.FacultyEmail.setValue(res.FacultyEmail);
        this.myForm.controls.FacultyImage.setValue(res.FacultyImage);
        this.myForm.controls.FacultyName.setValue(res.FacultyName);
      })
    }
  }

  insert(){
    if(this.id>0){
      this.api.update(this.id,this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/faculty']);
      });
    }
    else{
      this.api.insert(this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/faculty']);
      });
    }
  }
}
