import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {

    user: any;

    constructor(private db: AngularFirestore) { }

    // // get data
    // getPosts() {
    //     return this.db.collection('posts').doc('ppLRmzdtblNMHoRJlGPv').snapshotChanges();
    // }

    // // get conditional data 
    // searchPost() {
    //     return this.db.collection('posts', ref => ref.where('views', '==', 3)
    //         .where('title', '==', 'three'))
    //         .snapshotChanges();

    // }

    // // update data
    // updatePost() {
    //     let value = {};
    //     value["views"] = 3;

    //     return this.db.collection('posts').doc('firstPost').update(value);
    //     // return this.db.collection('posts').doc('firstPost').set(value);
    // }

    // deletePost() {
    //     return this.db.collection('posts').doc('secondPost').delete();
    // }


    /////////////////////
    ///// Cloud Cafe
    /////////////////////

    // save data 
    saveCafe(cafeData) {
        return this.db.collection('cafes').add({
            name: cafeData.cafeName,
            city: cafeData.cafeCity
        });
    }

    // get data 
    getCafe() {
        // return this.db.collection("cafes", ref => ref.where('name', '==', "Danyal's Cafe")).get();
        return this.db.collection("cafes", ref => ref.orderBy("name")).get();

    }

    // delete cafe
    deleteCafe(id) {
        return this.db.collection('cafes').doc(id).delete();
    }

}  