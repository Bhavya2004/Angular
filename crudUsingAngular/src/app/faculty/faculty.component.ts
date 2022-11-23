import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Faculty } from '../faculty';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {

  idToEdit=-1;

  myForm = new FormGroup({
    FacultyID: new FormControl(''),
    FacultyName: new FormControl(''),
    FacultyExperience:new FormControl(''),
    FacultyImage: new FormControl('')
  });

  insert(){
    if(this.idToEdit<0){
      this.faculties.push(<Faculty>this.myForm.value);
    }
    else{
      this.faculties[this.idToEdit]=<Faculty>this.myForm.value;
    }
    this.myForm.controls. FacultyID.setValue('');
    this.myForm.controls.FacultyName.setValue('');
    this.myForm.controls.FacultyExperience.setValue('');
    this.myForm.controls.FacultyImage.setValue('');
    this.idToEdit=-1;
  }

  delete(i:any){
    this.faculties.splice(i,1);
  }

  edit(i:any){
    this.idToEdit=i;
    this.myForm.controls.FacultyID.setValue(this.faculties[i].FacultyID);
    this.myForm.controls.FacultyName.setValue(this.faculties[i].FacultyName);
    this.myForm.controls.FacultyExperience.setValue(this.faculties[i].FacultyExperience);
    this.myForm.controls.FacultyImage.setValue(this.faculties[i].FacultyImage);
  }
  faculties:Faculty[]= [];
}
