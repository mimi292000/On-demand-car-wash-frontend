import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cust-addorder',
  templateUrl: './cust-addorder.component.html',
  styleUrls: ['./cust-addorder.component.css']
})
export class CustAddorderComponent implements OnInit {
  constructor(private userservice: UserService, private router: Router
    ) { }

  ngOnInit(): void {
  }

  addorder(registerForm: NgForm){
    this.userservice.UserService(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
    alert("Your order has been successfully placed");
    this.router.navigate(['/', 'customer-dashboard']);

  }
}

