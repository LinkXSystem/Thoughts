import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListComponent } from './component/list/list.component';
import { ArticleItemCompoent } from './component/list/article-item.component';
import { ColumnItemCompoent } from './component/list/column-item.component';
import { EditorComponent } from './component/editor/editor.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

import { ListDirective } from './component/list/list.directive';

import { MarkdownPipe } from './pipe/markdown.pipe';

import { HomeComponent } from './page/home/home.component';
import { ColumnComponent } from './page/column/column.component';
import { WriterComponent } from './page/writer/writer.component';
import { ArticleComponent } from './page/article/article.component';
import { UserComponent } from './page/user/user.component';
import { GithubComponent } from './component/github/github.component';
import { SettingComponent } from './page/setting/setting.component';

import { AppStore, AppStoreProviders } from './app.store';
import { ArticleViewComponent } from './component/article-view/article-view.component';
import { LoginStatuComponent } from './component/login-statu/login-statu.component';
import { CertificateComponent } from './component/certificate/certificate.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: HomeComponent },
  { path: 'column', component: ColumnComponent },
  { path: 'article/:indentify', component: ArticleComponent },
  { path: 'user', component: UserComponent },
  { path: 'writer', component: WriterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    ArticleItemCompoent,
    ColumnItemCompoent,
    ListDirective,
    EditorComponent,
    MarkdownPipe,
    HomeComponent,
    ColumnComponent,
    WriterComponent,
    ArticleComponent,
    UserComponent,
    UserDetailComponent,
    GithubComponent,
    SettingComponent,
    ArticleViewComponent,
    LoginStatuComponent,
    CertificateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  entryComponents: [ArticleItemCompoent, ColumnItemCompoent],
  providers: [AppStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
