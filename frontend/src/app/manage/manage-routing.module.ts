import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ControlerComponent } from './controler/controler.component';
import { SettingComponent } from './setting/setting.component';
import { WritingComponent } from './writing/writing.component';
import { TypeEditorComponent } from './type-editor/type-editor.component';
import { ColumnEditorComponent } from './column-editor/column-editor.component';

import { ArticleEditorComponent } from './article-editor/article-editor.component';

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
      {
        path: 'article-editor/:identify',
        component: ArticleEditorComponent,
      },
      {
        path: 'column-editor/:identify',
        component: ColumnEditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
