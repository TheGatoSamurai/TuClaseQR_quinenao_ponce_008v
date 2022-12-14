import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarQRPageModule } from './generar-qr-routing.module';

import { GenerarQRPage } from './generar-qr.page';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    GenerarQRPageModule
  ],
  declarations: [GenerarQRPage]
})
export class GenerarQrPageModule {
  qrCodeString= 'qr code';
  constructor() {}
}
