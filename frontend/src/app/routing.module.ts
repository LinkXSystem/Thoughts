import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ColumnComponent } from './pages/column/column.component';
import { ArticleComponent } from './pages/article/article.component';
import { UserComponent } from './pages/user/user.component';
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
    path: 'user-detail',
    component: UserComponent,
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
