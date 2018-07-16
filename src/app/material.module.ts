import {NgModule} from '@angular/core';

import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatStepperModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatTableModule, MatTreeModule } from '@angular/material';
import { CdkTableModule } from '../../node_modules/@angular/cdk/table';
import { CdkTreeModule } from '../../node_modules/@angular/cdk/tree';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  // imports: [
    // tslint:disable-next-line:max-line-length
  //   MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatRippleModule
  // ],
  exports: [
    // tslint:disable-next-line:max-line-length
    // MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule, MatRippleModule, CdkTableModule,
    MatOptionModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ]
})
export class MaterialModule {}
