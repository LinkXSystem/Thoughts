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

import { SystemRoutingModule } from './routing.module';
import { UndefinedComponent } from './pages/undefined/undefined.component';
import { UniversalModule } from './universal/universal.module';
import { ProjectComponent } from './pages/project/project.component';
import { ColumnDetailComponent } from './pages/column-detail/column-detail.component';
import { NoteComponent } from './pages/note/note.component';

import { GetService } from './services/get.service';
import { StoreService } from './services/store.service';
import { AuthService } from './services/auth.service';
import { DeleteService } from './services/delete.service';
import { UpdateService } from './services/update.service';
import { UserService } from './services/user.service';
import { FunctionService } from './services/function.service';
import { SearchService } from './services/search.service';
import { CloudService } from './services/cloud.service';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './redux/auth/auth.reducer';
import { ArticleReducer } from './redux/article/article.reducer';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColumnComponent,
    ArticleComponent,
    UndefinedComponent,
    ProjectComponent,
    ColumnDetailComponent,
    NoteComponent,
    NoteDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    UniversalModule,
    SystemRoutingModule,
    StoreModule.forRoot({
      auth: AuthReducer,
      article: ArticleReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    FunctionService,
    AuthService,
    GetService,
    StoreService,
    DeleteService,
    UpdateService,
    UserService,
    SearchService,
    AuthGuardService,

    CloudService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
