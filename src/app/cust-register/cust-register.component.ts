import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-cust-register',
  templateUrl: './cust-register.component.html',
  styleUrls: ['./cust-register.component.css']
})
export class CustRegisterComponent implements OnInit {

  constructor(private customerservice: CustomerServiceService, private router: Router
    ) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm){
    this.customerservice.registerCustomer(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        
      },
      (err) => {
        console.log(err);
      }
      
    );
    alert("Customer successfully registered");
    this.router.navigate(['/', 'customer-login']);

  }
}


