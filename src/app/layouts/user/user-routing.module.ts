import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    loadChildren: () =>
      import('../../modules/dash/dash.module').then((m) => m.DashModule),
  },
  {
    path: '',
    component: UserComponent,
    loadChildren: () =>
      import('../../modules/home/home.module').then((m) => m.HomeModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AdminGuard, AuthGuard],
})
export class UserRoutingModule {}
