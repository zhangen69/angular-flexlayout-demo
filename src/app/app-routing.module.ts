import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
