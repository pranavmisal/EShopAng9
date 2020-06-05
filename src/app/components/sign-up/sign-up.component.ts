import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  errorMsg: string = '';
  constructor(private as: AuthService) {}

  ngOnInit(): void {}

  signup(form) {
    console.log(form.value.email);
    console.log(form.value.password);

    this.as
      .signup(form.value.email, form.value.password)
      .then((data) => console.log(data))
      .catch((err) => (this.errorMsg = err));
  }
}
