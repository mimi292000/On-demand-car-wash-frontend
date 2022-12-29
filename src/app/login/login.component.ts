
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustLoginServiceService } from '../cust-login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private custlogin: CustLoginServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(registerForm: NgForm){
    this.custlogin.customerLogin(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);

      }
    );
    alert("Customer successfully logged in");
    this.router.navigate(['/', 'customer-dashboard']);

  }
}
