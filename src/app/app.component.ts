import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

import {VERSION} from '@angular/flex-layout';
import { MatSidenav } from '../../node_modules/@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('sidebar') sidebar: MatSidenav;

  version = VERSION.full;

}
