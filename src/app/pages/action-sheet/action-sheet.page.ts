import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Data } from 'src/app/interfaces/interfaces';
import { CalendarioService } from 'src/app/service/calendario.service';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
    calendario: Data[] = [];

  constructor(private menuController: MenuController,
    private calendarioService: CalendarioService) {}
    
  
  ngOnInit() {
    this.calendarioService.getTopHeadLines().subscribe(resp => {
      console.log('calendarios',resp);
      this.calendario.push(...resp.data);
    });
  }

  

  mostrarMenu(){
    this.menuController.open('first');
  }
}
