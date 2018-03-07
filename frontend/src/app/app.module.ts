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
import { WriterComponent } from './page/writer/writer.component';
import { ArticleComponent } from './page/article/article.component';
import { UserComponent } from './page/user/user.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { GithubComponent } from './component/github/github.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: HomeComponent },
  { path: 'column', component: ColumnComponent },
  { path: 'writer', component: WriterComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'user', component: UserComponent }
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
    ColumnComponent,
    WriterComponent,
    ArticleComponent,
    UserComponent,
    UserDetailComponent,
    GithubComponent
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
