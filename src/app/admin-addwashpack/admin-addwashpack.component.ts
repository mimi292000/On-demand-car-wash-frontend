import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CarwashServiceService } from '../carwash-service.service';

@Component({
  selector: 'app-admin-addwashpack',
  templateUrl: './admin-addwashpack.component.html',
  styleUrls: ['./admin-addwashpack.component.css']
})
export class AdminAddwashpackComponent implements OnInit {
  

  constructor(private admin: CarwashServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  addwashpacks(registerForm: NgForm){
    this.admin.WashpackAdmin(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);
        
      }
    );
    alert("Washpack successfully added");
    this.router.navigate(['/', 'admin-dashboard']);
  }

}
