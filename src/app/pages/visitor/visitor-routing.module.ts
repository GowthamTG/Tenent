import { VisitorComponent } from './visitor/visitor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: VisitorComponent,
  //   loadChildren: () =>
  //     import('../../modules/home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: '',
  //   component: VisitorComponent,
  //   loadChildren: () =>
  //     import('../../modules/dash/dash.module').then((m) => m.DashModule),
  // },
  {
    path: '',
    component: VisitorComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/dash/dash.module').then((m) => m.DashModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AdminGuard, AuthGuard],
})
export class VisitorRoutingModule {}
