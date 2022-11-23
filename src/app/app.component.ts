import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  
  componentes : Componente[] = [
    {
      icon: 'home-sharp',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'images-sharp',
      name: 'Sobre Nosotros',
      redirecTo:'/card'
    },
    {
      icon: 'person-circle-sharp', 
      name: 'Usuario',
      redirecTo: '/avatar'
    }, 
    {
      icon: 'notifications-sharp',
      name: 'Notificaciones',
      redirecTo: '/alert'
    },  
    {
      icon: 'settings-sharp',
      name: 'Configuracion',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/generar-qr'
    },
  
  ];



}


