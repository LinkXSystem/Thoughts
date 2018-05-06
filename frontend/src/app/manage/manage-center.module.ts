import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { ControlerComponent } from './controler/controler.component';
import { SettingComponent } from './setting/setting.component';
import { WritingComponent } from './writing/writing.component';
import { ManageRoutingModule } from './manage-routing.module';
import { UniversalModule } from '../universal/universal.module';
import { FavouriteComponent } from './favourite/favourite.component';
import { TypeEditorComponent } from './type-editor/type-editor.component';
import { AuthenticaComponent } from './authentica/authentica.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ColumnEditorComponent } from './column-editor/column-editor.component';

@NgModule({
  declarations: [
    SettingComponent,
    WritingComponent,
    ControlerComponent,
    FavouriteComponent,
    TypeEditorComponent,
    AuthenticaComponent,
    ArticleEditorComponent,
    ColumnEditorComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HttpClientModule,
    ManageRoutingModule,
    UniversalModule,
    FormsModule,
  ],
})
export class ManageCenterModule {}
