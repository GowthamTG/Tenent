import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/visitor/visitor.module').then((m) => m.VisitorModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./layouts/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AdminGuard, AuthGuard],
})
export class AppRoutingModule {}
