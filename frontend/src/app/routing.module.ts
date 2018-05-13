import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';

import { NoteComponent } from './pages/note/note.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';

import { ColumnComponent } from './pages/column/column.component';
import { ColumnDetailComponent } from './pages/column-detail/column-detail.component';

import { ProjectComponent } from './pages/project/project.component';
import { UndefinedComponent } from './pages/undefined/undefined.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    component: HomeComponent,
  },
  {
    path: 'column',
    component: ColumnComponent,
  },
  {
    path: 'article/:identify',
    component: ArticleComponent,
  },
  {
    path: 'column-detail/:identify',
    component: ColumnDetailComponent,
  },
  {
    path: 'note',
    component: NoteComponent,
  },
  {
    path: 'note-detail/:identify',
    component: NoteDetailComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'control',
    loadChildren: 'app/manage/manage-center.module#ManageCenterModule',
  },
  { path: '**', component: UndefinedComponent },
];

@NgModule({
  //{ enableTracing: true }
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
