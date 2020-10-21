import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cloud-cafe',
  templateUrl: './cloud-cafe.component.html',
  styleUrls: ['./cloud-cafe.component.css']
})
export class CloudCafeComponent implements OnInit {

  showLogin = false;
  showSignup = false;
  loggedIn = false;

  cafeData = [];

  cafeNameController = new FormControl("", Validators.minLength(3));
  cafeCityController = new FormControl("", Validators.minLength(3));

  constructor(private fbService: FirebaseService, private auth: AngularFireAuth) { }

  ngOnInit(): void {
    // listen for auth status changes
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.getCafe();
        this.loggedIn = true;
        this.fbService.user = user;
      } else {
        this.cafeData = [];
        this.loggedIn = false;
        this.fbService.user = {};
      }
    });

  }

  getCafe() {
    this.cafeData = [];
    this.fbService.getCafe().subscribe((snapshot) => {

      snapshot.docs.forEach(doc => {
        this.cafeData.push({
          name: doc.data().name,
          city: doc.data().city,
          id: doc.id
        });
      });

    }, error => console.log(error));
  }

  addCafe() {
    let cafeData = {
      cafeName: this.cafeNameController.value,
      cafeCity: this.cafeCityController.value
    }

    this.fbService.saveCafe(cafeData).then((data) => {
      this.getCafe();
    }, error => { console.log(error) });
  }

  deleteCafe(id) {
    this.fbService.deleteCafe(id).then((res) => {
      this.getCafe();
    }, (error) => { console.log(error) });
  }

  logOut() {
    this.auth.signOut();
  }
}
