import { Component, OnInit } from '@angular/core';
import { MenuController, NavController,AlertController} from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private menuController: MenuController,
    private NavController: NavController,
    private AlertController: AlertController) { }

  ngOnInit() {
   
  }


  mostrarMenu(){
    this.menuController.open('first');
  }

}