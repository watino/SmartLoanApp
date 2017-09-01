import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddloanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addloan',
  templateUrl: 'addloan.html',
})
export class AddloanPage {
  name = "";
  phone = "";
  address = "";

  contact = 
  {name:'',phone:'',address:'',ico:''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddloanPage');
  }
  chooseImage() {

  }
  update() {

  }
  cancel () {

  }

}
