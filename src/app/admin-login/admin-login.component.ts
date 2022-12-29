import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CarwashServiceService } from '../carwash-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminlogin: CarwashServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  login(registerForm: NgForm){
    this.adminlogin.AdminLogin(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);

      }
    );
    alert("Admin successfully logged in")
    this.router.navigate(['/', 'admin-dashboard']);

  }
}


