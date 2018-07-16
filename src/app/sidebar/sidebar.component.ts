import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // @ViewChild('sidebar') sidebar: MatSidenav;
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
