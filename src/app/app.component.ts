import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor( private fb: FormBuilder){
  }

  testForm = this.fb.group({
    external: ['5to9']
  });
  title = 'vladTupit';
  private optional = false; 
  visible = true;
  logTime(){
    let now = new Date();
    console.log(now);
  }
  onInit(){
  }
}
