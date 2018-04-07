import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { ControlerComponent } from './controler/controler.component';
import { SettingComponent } from './setting/setting.component';
import { WriterComponent } from './writer/writer.component';
import { ManageRoutingModule } from './manage-routing.module';
import { UniversalModule } from '../universal/universal.module';
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    SettingComponent,
    WriterComponent,
    ControlerComponent,
    FavouriteComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HttpClientModule,
    ManageRoutingModule,
    UniversalModule,
  ],
})
export class ManageCenterModule {}
