import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ColumnComponent } from './page/column/column.component';
import { ArticleComponent } from './page/article/article.component';
import { UserComponent } from './page/user/user.component';
import { NgModule } from '@angular/core';
import { UnderfinedComponent } from './page/underfined/underfined.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: HomeComponent },
  { path: 'column', component: ColumnComponent },
  { path: 'article/:indentify', component: ArticleComponent },
  { path: 'user', component: UserComponent },
  {
    path: 'control',
    loadChildren: 'app/manage/manage-center.module#ManageCenterModule'
  },
  { path: '**', component: UnderfinedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
