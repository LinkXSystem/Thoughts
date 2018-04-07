import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ColumnComponent } from './pages/column/column.component';
import { ArticleComponent } from './pages/article/article.component';
import { UserComponent } from './pages/user/user.component';
import { NgModule } from '@angular/core';
import { UnderfinedComponent } from './pages/underfined/underfined.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: HomeComponent },
  { path: 'column', component: ColumnComponent },
  { path: 'article/:indentify', component: ArticleComponent },
  { path: 'user-detail', component: UserComponent },
  {
    path: 'control',
    loadChildren: 'app/manage/manage-center.module#ManageCenterModule',
  },
  { path: '**', component: UnderfinedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
