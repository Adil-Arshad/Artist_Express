import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormGroup } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loading: boolean;
  constructor(private router:Router,private formBuilder: FormBuilder, private userService: UserService) {}
  loginForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }
  save() {
    const loginData = this.loginForm.value;
    console.log('loginData', loginData);
    // we need to send this data to our node.js server

    this.userService.userLogin(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        this.router.navigateByUrl('/movies');
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
}


