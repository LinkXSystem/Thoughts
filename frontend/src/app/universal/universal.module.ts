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
import { NoteItemComponent } from './component/list/note-item.component';

import { MarkdownPipe } from './pipe/markdown.pipe';
import { MarkdownDecodePipe } from './pipe/markdown-decode.pipe';
import { MomentPipe } from './pipe/moment.pipe';

import { ListDirective } from './component/list/list.directive';
import { LoadingComponent } from './component/loading/loading.component';
import { UserModifyComponent } from './component/user-modify/user-modify.component';
import { NoticeComponent } from './component/notice/notice.component';
import { FootnoteComponent } from './component/footnote/footnote.component';
import { PortraitComponent } from './component/portrait/portrait.component';

@NgModule({
  declarations: [
    ArticleViewComponent,
    CertificateComponent,
    EditorComponent,
    GithubComponent,
    ListComponent,
    ArticleItemComponent,
    ColumnItemComponent,
    NoteItemComponent,
    LoginStatusComponent,
    NavbarComponent,
    SearchComponent,
    UserDetailComponent,
    LoadingComponent,
    UserModifyComponent,

    MomentPipe,
    MarkdownPipe,
    MarkdownDecodePipe,
    ListDirective,
    NoticeComponent,
    FootnoteComponent,
    PortraitComponent,
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
    UserModifyComponent,
    NoticeComponent,
    FootnoteComponent,

    MomentPipe,
    MarkdownPipe,
    MarkdownDecodePipe,
  ],
  entryComponents: [
    ArticleItemComponent,
    ColumnItemComponent,
    NoteItemComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, NgZorroAntdModule],
})
export class UniversalModule {}
