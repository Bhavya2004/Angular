import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  name='Bhavya';
  myimg='https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg';
  name2='bhavya';

  randomFunction(){
    this.name='Angular';
  }
}
