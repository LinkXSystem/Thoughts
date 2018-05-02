import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ArticleViewComponent } from './component/article-view/article-view.component';
import { CertificateComponent } from './component/certificate/certificate.component';
import { EditorComponent } from './component/editor/editor.component';
import { GithubComponent } from './component/github/github.component';
import { ListComponent } from './component/list/list.component';
import { LoginStatusComponent } from './component/login-status/login-status.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

import { ArticleItemComponent } from './component/list/article-item.component';
import { ColumnItemComponent } from './component/list/column-item.component';

import { MarkdownPipe } from './pipe/markdown.pipe';

import { ListDirective } from './component/list/list.directive';
import { LoadingComponent } from './component/loading/loading.component';

@NgModule({
  declarations: [
    ArticleViewComponent,
    CertificateComponent,
    EditorComponent,
    GithubComponent,
    ListComponent,
    ArticleItemComponent,
    ColumnItemComponent,
    LoginStatusComponent,
    NavbarComponent,
    SearchComponent,
    UserDetailComponent,
    MarkdownPipe,
    ListDirective,
    LoadingComponent,
  ],
  exports: [
    ArticleViewComponent,
    CertificateComponent,
    EditorComponent,
    GithubComponent,
    ListComponent,
    LoginStatusComponent,
    NavbarComponent,
    SearchComponent,
    UserDetailComponent,
    LoadingComponent,
    MarkdownPipe,
  ],
  entryComponents: [ArticleItemComponent, ColumnItemComponent],
  imports: [CommonModule, FormsModule, RouterModule, NgZorroAntdModule],
})
export class UniversalModule {}
