import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-cust-wp',
  templateUrl: './cust-wp.component.html',
  styleUrls: ['./cust-wp.component.css']
})
export class CustWpComponent implements OnInit {
  washpacks = null as any;
  constructor(private customerservice: CustomerServiceService) {this.getWashpackDetails()}

  ngOnInit(): void {
  }
  getWashpackDetails() {
    this.customerservice.getallwp().subscribe(
      (resp) => {
        console.log(resp);
        this.washpacks= resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
