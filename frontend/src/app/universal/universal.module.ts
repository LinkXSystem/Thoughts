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
import { LoginStatuComponent } from './component/login-statu/login-statu.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

import { ArticleItemCompoent } from './component/list/article-item.component';
import { ColumnItemCompoent } from './component/list/column-item.component';

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
    ArticleItemCompoent,
    ColumnItemCompoent,
    LoginStatuComponent,
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
    LoginStatuComponent,
    NavbarComponent,
    SearchComponent,
    UserDetailComponent,
    LoadingComponent,
  ],
  entryComponents: [ArticleItemCompoent, ColumnItemCompoent],
  imports: [CommonModule, FormsModule, RouterModule, NgZorroAntdModule],
})
export class UniversalModule {}
