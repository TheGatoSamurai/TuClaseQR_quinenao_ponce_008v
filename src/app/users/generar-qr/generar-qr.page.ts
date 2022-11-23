import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  qrCodeString= 'Bienvenido a tu clase QR';
  scannedResult: any;
  constructor(private menuController: MenuController) {}

  usuario={
    nom:'',
  }

  GenerarQr(){
    this.qrCodeString=this.usuario.nom;
  }

  VerQr(){
    this.scannedResult = this.qrCodeString;
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}