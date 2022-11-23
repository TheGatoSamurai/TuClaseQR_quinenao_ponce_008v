import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from 'src/app/users/login/login.page';
import { AvatarPageRoutingModule } from './avatar-routing.module';

import { AvatarPage } from './avatar.page';


@NgModule({
  imports: [LoginPage,
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule
  ],
  declarations: [AvatarPage]
})
export class AvatarPageModule {}
