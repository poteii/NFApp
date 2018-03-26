import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginResult;

  constructor(public navCtrl: NavController) {

  }

  //method
  signIn(_username, _password) {
    // alert('OK ' + _username + ', ' + _password);
    //ส่งไป web api เพื่อตรวจสอบ
    if (_password == '1234') {
      //pass!
      this.loginResult = "ผ่าน!";
    } else {
      //fail!
      this.loginResult = "โปรดตรวจสอบข้อมูลและลองอีกครั้ง";
    }

  }

}
