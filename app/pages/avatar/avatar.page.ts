import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from 'src/app/users/login/login.page';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  LoginPage: LoginPage;
  
  constructor(private menuController: MenuController) { }

  ngOnInit( ) {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  
}
