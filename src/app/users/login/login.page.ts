import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(private menuController: MenuController) { }

  ngOnInit() {
   
  }
  usuario = {
    user:'',
    password:''
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
