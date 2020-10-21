import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailController = new FormControl("", Validators.minLength(3));
  passwordController = new FormControl("", Validators.minLength(3));
  bioController = new FormControl("", Validators.minLength(3));

  @Output() cancelEvent = new EventEmitter<boolean>();

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  signup() {
    this.auth.createUserWithEmailAndPassword(this.emailController.value, this.passwordController.value).then(cred => {
      return this.db.collection('users').doc(cred.user.uid).set({
        bio: this.bioController.value
      });
    }).then(() => {
      this.cancel();
    });
  }

  cancel() {
    this.cancelEvent.emit();
  }

}
