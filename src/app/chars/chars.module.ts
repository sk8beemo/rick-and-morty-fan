import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CharListComponent } from './pages/char-list/char-list.component';

const pages = [CharListComponent];

const routes: Routes = [
  {
    path: '',
    component: CharListComponent,
  },
];

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CharsModule {}
