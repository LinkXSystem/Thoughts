import { Routes, RouterModule } from '@angular/router';
import { ControlerComponent } from './controler/controler.component';
import { SettingComponent } from './setting/setting.component';
import { WriterComponent } from './writer/writer.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ControlerComponent,
    children: [
      {
        path: '',
        redirectTo: 'setting',
        pathMatch: 'full',
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'writing',
        component: WriterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
