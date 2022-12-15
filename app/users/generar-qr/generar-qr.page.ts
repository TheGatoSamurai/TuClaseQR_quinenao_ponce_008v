import { Component, OnInit, NgModule} from '@angular/core';
import { MenuController,NavController,AlertController,IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    NavController,
    AlertController
  ],
  declarations: [GenerarQRPage]
})

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  qrCodeString= 'Bienvenido a tu clase QR';
  usuario={
    asign:'',};

  fecha={
    asign:'',};


  constructor(private menuController: MenuController) {}

  

  generaScan(){
    this.qrCodeString= this.usuario.asign;
    this.qrCodeString= this.fecha.asign;
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}