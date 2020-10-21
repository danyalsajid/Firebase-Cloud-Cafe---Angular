import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
// import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fbService: FirebaseService) { }

  ngOnInit() { }

  // // get data
  // getPosts() {
  //   this.fbService.getPosts().subscribe(item => {
  //     console.log(item.payload.data());
  //   });
  // }

  // //get conditional data
  // searchPosts() {
  //   this.fbService.searchPost().subscribe(items => {
  //     items.forEach(element => {
  //       console.log(element.payload.doc.data());
  //     });
  //   })
  // }

  // // update data 
  // updatePosts() {
  //   this.fbService.updatePost().then(res => {
  //     console.log(res);
  //   });
  // }

  // // delete data
  // deletePosts() {
  //   this.fbService.deletePost().then(res => {
  //     console.log(res);
  //   }).catch(error => console.error(error));
  // }
}
