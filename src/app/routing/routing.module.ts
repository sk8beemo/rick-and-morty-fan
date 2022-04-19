import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chars',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('../chars/chars.module').then((m) => m.CharsModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
