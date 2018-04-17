import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ControlerComponent } from './controler/controler.component';
import { SettingComponent } from './setting/setting.component';
import { WritingComponent } from './writing/writing.component';
import { TypeEditorComponent } from './type-editor/type-editor.component';

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
        component: WritingComponent,
      },
      {
        path: 'type/:type',
        component: TypeEditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
