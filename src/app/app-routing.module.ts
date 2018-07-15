import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SidebarDirective } from './sidebar.directive';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes
   ],
   declarations: [
      SidebarDirective
   ]
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
