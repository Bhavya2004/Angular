import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  idToEdit=-1;

  myForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    department:new FormControl(''),
    avatar: new FormControl('')
  });

  insert(){
    if(this.idToEdit<0){
      this.students.push(<Student>this.myForm.value);
    }
    else{
      this.students[this.idToEdit]=<Student>this.myForm.value;
    }
    this.myForm.controls.id.setValue('');
    this.myForm.controls.name.setValue('');
    this.myForm.controls.department.setValue('');
    this.myForm.controls.avatar.setValue('');
    this.idToEdit=-1;
  }

  delete(i:any){
    this.students.splice(i,1);
  }

  edit(i:any){
    this.idToEdit=i;
    this.myForm.controls.id.setValue(this.students[i].id);
    this.myForm.controls.name.setValue(this.students[i].name);
    this.myForm.controls.department.setValue(this.students[i].department);
    this.myForm.controls.avatar.setValue(this.students[i].avatar);
  }
  students:Student[]= [];
}
