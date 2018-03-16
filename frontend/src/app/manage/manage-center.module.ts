import { Routes, RouterModule } from '@angular/router';
import { ControlerComponent } from './controler/controler.component';
import { SettingComponent } from './setting/setting.component';
import { WriterComponent } from './writer/writer.component';
import { NgModule } from '@angular/core';
import { ManageRoutingModule } from './manage-routing.module';
import { UniversalModule } from '../universal/universal.module';

@NgModule({
  declarations: [SettingComponent, WriterComponent, ControlerComponent],
  imports: [ManageRoutingModule, UniversalModule]
})
export class ManageCenterModule {}
