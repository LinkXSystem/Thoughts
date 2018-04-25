import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// import { EditorComponent } from './component/editor/editor.component';

import { HomeComponent } from './pages/home/home.component';
import { ColumnComponent } from './pages/column/column.component';
import { ArticleComponent } from './pages/article/article.component';
import { UserComponent } from './pages/user/user.component';

import { AppStore, AppStoreProviders } from './app.store';

import { SystemRoutingModule } from './routing.module';
import { UnderfinedComponent } from './pages/underfined/underfined.component';
import { UniversalModule } from './universal/universal.module';
import { ProjectComponent } from './pages/project/project.component';

import { LoginService } from './services/login.service';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColumnComponent,
    ArticleComponent,
    UserComponent,
    UnderfinedComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    UniversalModule,
    SystemRoutingModule,
  ],
  providers: [AppStoreProviders, LoginService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
