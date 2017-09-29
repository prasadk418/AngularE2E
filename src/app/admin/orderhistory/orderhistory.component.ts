import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../../apphttpclient.service';

@Component({
  selector: 'app-admin-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderHistoryComponent implements OnInit {
  OrderColumns;
  rows;
  filterObject;
  constructor(private _apphttpclientService:ApphttpclientService) { }

  ngOnInit() {
     this.OrderColumns = [
      { title: "Builder name", name: 'name',sort:true },
      { title: "Order date", name: 'orderDate' },
      { title: "Order No", name: 'orderNo' },
      { title: "Material", name: 'material' },
      { title: "UOM", name: 'uom' },
      { title: "Qty", name: 'qty' },
      { title: "Size", name: 'size' },
      { title: "Status", name: 'status' },
      { title: "Confirmation date", name: 'confirrmationDate' },
      { title: "Invoice no.", name: 'invoiceNo' },
      { title: "Invoice date", name: 'invoiceDate' },
      { title: "Delivery qty", name: 'deliveryQty' },
      { title: "Delivery date", name: 'deliveryDate' },
      { title: "Vendor no.", name: 'vendorNo' },
      { title: "Vendor name", name: 'vendorName' },
      { title: "Comments", name: 'comments' }
    ];
    this.rows=[{
      "material":"Sand",
      "name":"Vinod",
      "uom":"SS Constructions",
      "qty":"HHHHH",
      "size":1,
      "orderDate":"Vinod",
      "orderNo":"SS Constructions",
      "status":"HHHHH",
      "confirrmationDate":"Sand",
      "invoiceNo":"Vinod",
      "invoiceDate":"SS Constructions",
      "deliveryQty":"HHHHH",
      "vendorNo":1,
      "vendorName":"Vinod",
      "comments":"SS Constructions"
    },
    {
      "material":"Sand",
      "name":"Vinod",
      "uom":"SS Constructions",
      "qty":"HHHHH",
      "size":1,
      "orderDate":"Vinod",
      "orderNo":"SS Constructions",
      "status":"HHHHH",
      "confirrmationDate":"Sand",
      "invoiceNo":"Vinod",
      "invoiceDate":"SS Constructions",
      "deliveryQty":"HHHHH",
      "vendorNo":1,
      "vendorName":"Vinod",
      "comments":"SS Constructions"
    },
    {
      "material":"Sand",
      "name":"Vinod",
      "uom":"SS Constructions",
      "qty":"HHHHH",
      "size":1,
      "orderDate":"Vinod",
      "orderNo":"SS Constructions",
      "status":"HHHHH",
      "confirrmationDate":"Sand",
      "invoiceNo":"Vinod",
      "invoiceDate":"SS Constructions",
      "deliveryQty":"HHHHH",
      "vendorNo":1,
      "vendorName":"Vinod",
      "comments":"SS Constructions"
    },
    {
      "material":"Sand",
      "name":"Vinod",
      "uom":"SS Constructions",
      "qty":"HHHHH",
      "size":1,
      "orderDate":"Vinod",
      "orderNo":"SS Constructions",
      "status":"HHHHH",
      "confirrmationDate":"Sand",
      "invoiceNo":"Vinod",
      "invoiceDate":"SS Constructions",
      "deliveryQty":"HHHHH",
      "vendorNo":1,
      "vendorName":"Vinod",
      "comments":"SS Constructions"
    },
    {
      "material":"Sand",
      "name":"Vinod",
      "uom":"SS Constructions",
      "qty":"HHHHH",
      "size":1,
      "orderDate":"Vinod",
      "orderNo":"SS Constructions",
      "status":"HHHHH",
      "confirrmationDate":"Sand",
      "invoiceNo":"Vinod",
      "invoiceDate":"SS Constructions",
      "deliveryQty":"HHHHH",
      "vendorNo":1,
      "vendorName":"Vinod",
      "comments":"SS Constructions"
    },
    {
      "material":"Sand",
      "name":"Vinod",
      "uom":"SS Constructions",
      "qty":"HHHHH",
      "size":1,
      "orderDate":"Vinod",
      "orderNo":"SS Constructions",
      "status":"HHHHH",
      "confirrmationDate":"Sand",
      "invoiceNo":"Vinod",
      "invoiceDate":"SS Constructions",
      "deliveryQty":"HHHHH",
      "vendorNo":1,
      "vendorName":"Vinod",
      "comments":"SS Constructions"
    }]
  }

}
