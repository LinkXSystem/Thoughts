import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// import { EditorComponent } from './component/editor/editor.component';

import { HomeComponent } from './page/home/home.component';
import { ColumnComponent } from './page/column/column.component';
import { ArticleComponent } from './page/article/article.component';
import { UserComponent } from './page/user/user.component';

import { AppStore, AppStoreProviders } from './app.store';

import { SystemRoutingModule } from './routing.module';
import { UnderfinedComponent } from './page/underfined/underfined.component';
import { UniversalModule } from './universal/universal.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColumnComponent,
    ArticleComponent,
    UserComponent,
    UnderfinedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    UniversalModule,
    SystemRoutingModule
  ],
  providers: [AppStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
