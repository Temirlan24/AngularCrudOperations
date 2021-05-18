import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { DemoMaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import "@angular/compiler";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    AddItemComponent,
    EditListingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'shop'),
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
