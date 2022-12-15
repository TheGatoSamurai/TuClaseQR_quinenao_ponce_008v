import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresoAGuard } from './guards/ingresoAlum.guard';
import { IngresoPGuard } from './guards/ingresoProf.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresoAGuard]
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule),
    canActivate: [IngresoAGuard]
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    canActivate: [IngresoAGuard ]
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule),
    canActivate: [IngresoAGuard ]
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule),
    canActivate: [IngresoAGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./users/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./users/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule),
    canActivate: [IngresoPGuard]
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./users/lector-qr/lector-qr.module').then( m => m.LectorQRPageModule),
    canActivate: [IngresoAGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./users/logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [IngresoPGuard ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
