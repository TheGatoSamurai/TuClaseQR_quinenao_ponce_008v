import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path:'',
    component: TabsPage,
    children: [
      {
        path:'account',
        loadChildren:()=> import('../avatar/avatar-routing.module').then(m=> m.AvatarPageRoutingModule)
      },
      {
        path:'contact',
        loadChildren:()=> import('../card/card-routing.module').then(m=> m.CardPageRoutingModule)
      },
      {
        path:'settings',
        loadChildren:()=> import('../action-sheet/action-sheet-routing.module').then(m=> m.ActionSheetPageRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
