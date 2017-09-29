import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';

@Component({
  selector: 'app-builder-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderHistoryComponent implements OnInit {
  OrderColumns;
  constructor(private _apphttpclientService:ApphttpclientService) { }

  ngOnInit() {
    
  }

}
