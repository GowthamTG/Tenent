
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   loadChildren: () =>
  //     import('./modules/pages/pages.module').then((m) => m.PagesModule),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   loadChildren: () =>
  //     import('./modules/admin/admin.module').then((m) => m.AdminModule),
  //   canActivate: [AdminGuard, AuthGuard],
  // },
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import('./modules/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'verification/verify-account/:email/:token',
  //   component: MailVerificationComponent,
  // },
  // {
  //   path: 'verification/verify-email/:email/:token',
  //   component: MailVerificationComponent,
  // },
  { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AdminGuard, AuthGuard],
})

export class HomeRoutingModule {}