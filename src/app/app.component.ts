import {Component, ViewEncapsulation} from '@angular/core';

import {VERSION} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  version = VERSION.full;
}
