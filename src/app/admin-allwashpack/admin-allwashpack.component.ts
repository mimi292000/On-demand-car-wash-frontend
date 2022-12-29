import { Component, OnInit } from '@angular/core';
import { CarwashServiceService } from '../carwash-service.service';

@Component({
  selector: 'app-admin-allwashpack',
  templateUrl: './admin-allwashpack.component.html',
  styleUrls: ['./admin-allwashpack.component.css']
})
export class AdminAllwashpackComponent implements OnInit {
  washpacks = null as any;
  constructor(private customerservice: CarwashServiceService) {this.getWashpackDetails()}

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
  