import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '../shared/services/authentication.model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  mydata;
  constructor(private authenticationModel:AuthenticationModel) { 
    this.mydata=authenticationModel.getUserData();
  }

  ngOnInit() {
  }

}
