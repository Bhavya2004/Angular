import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  id=-1;
  btnName="Add Student";
  headingName="Add New Student";

  constructor(private api:ApiStudentService,private router:Router,private actRou:ActivatedRoute){

  }

  myForm= new FormGroup(
  {
    name: new FormControl(''),
    avatar: new FormControl(''),
    description: new FormControl(''),
    department: new FormControl('')
  }
);

ngOnInit(){
  if(this.actRou.snapshot.params['id']!=null){
    this.btnName="Edit Student";
    this.headingName="Edit Student";
    this.id=this.actRou.snapshot.params['id'];
    this.api.getStudentById(this.id).subscribe((res:any)=>{
      this.myForm.controls.avatar.setValue(res.avatar);
      this.myForm.controls.department.setValue(res.department);
      this.myForm.controls.description.setValue(res.description);
      this.myForm.controls.name.setValue(res.name);
    })
  }
}

insert(){
  if(this.id>0){
    this.api.update(this.id,this.myForm.value).subscribe((res)=>{
      this.router.navigate(['/student']);
    });
  }
  else{
    this.api.insert(this.myForm.value).subscribe((res)=>{
      this.router.navigate(['/student']);
    });
  }
  
}
}
