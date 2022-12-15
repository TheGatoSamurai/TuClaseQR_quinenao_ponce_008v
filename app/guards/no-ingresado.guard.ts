import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular'; 
@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(private navController: NavController){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('ingresadoA')){
        this.navController.navigateRoot('login');
        return false;
    
     }
     else if (localStorage.getItem('ingresadoP')){
      this.navController.navigateRoot('login');
      return false;
  
   }
     else{
        return true;
      }
    }
    
  
}
