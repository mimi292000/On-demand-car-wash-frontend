import { Component, OnInit } from '@angular/core';
import { CarwashServiceService } from '../carwash-service.service';

@Component({
  selector: 'app-admin-getallwashers',
  templateUrl: './admin-getallwashers.component.html',
  styleUrls: ['./admin-getallwashers.component.css']
})
export class AdminGetallwashersComponent implements OnInit {
  washers = null as any;
  constructor(private getallwashers: CarwashServiceService) {this.getWashersDetails()}

  ngOnInit(): void {
  }
  getWashersDetails() {
    this.getallwashers.getallwashers().subscribe(
      (resp) => {
        console.log(resp);
        this.washers= resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
