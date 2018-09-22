import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

import { HomePage } from '../home/home';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  loginForm: FormGroup;
  status: false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    console.log(this.status);
  }

  submitForm() {
    console.log(this.loginForm.value);
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
