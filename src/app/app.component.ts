import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My app Angular';
  version:Number = 1.0;
  disabled:Boolean = true;

  changetitle(event){
    console.log(event.target.value);
    this.title = event.target.value;
    //this.title = event.key;
  }
}

