import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public toastrService: ToastrService) { }

  ngOnInit() {
  }
  getToast(){
     this.toastrService.success('Welcome to toaster page!', 'Toastr fun!');
  }
}
