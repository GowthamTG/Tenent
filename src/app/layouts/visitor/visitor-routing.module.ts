import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponent } from './ui/ui.component';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorComponent,
    loadChildren: () =>
      import('../../modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    component: VisitorComponent,
    loadChildren: () =>
      import('../../modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'ui',
    component: UiComponent,
  },
  // {
  //   path: '',
  //   component: VisitorComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('../../modules/home/home.module').then((m) => m.HomeModule),
  //     },
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('../../modules/dash/dash.module').then((m) => m.DashModule),
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AdminGuard, AuthGuard],
})
export class VisitorRoutingModule {}
