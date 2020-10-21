import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailController = new FormControl("", Validators.minLength(3));
  passwordController = new FormControl("", Validators.minLength(3));

  @Output() cancelEvent = new EventEmitter<boolean>();

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.signInWithEmailAndPassword(this.emailController.value, this.passwordController.value).then(() => {
      this.cancel();
    });
  }

  cancel() {
    this.cancelEvent.emit();
  }

}
