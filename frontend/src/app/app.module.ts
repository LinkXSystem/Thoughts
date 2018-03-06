import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarItemComponent } from './component/navbar/navbar-item.component';
import { NavbarDirective } from './component/navbar/navbar.directive';
import { ListComponent } from './component/list/list.component';
import { EditorComponent } from './component/editor/editor.component';

import { HomeComponent } from './page/home/home.component';
import { ColumnComponent } from './page/column/column.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'blog', component: HomeComponent },
  { path: 'column', component: ColumnComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    NavbarDirective,
    ListComponent,
    EditorComponent,
    HomeComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  entryComponents: [NavbarItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
