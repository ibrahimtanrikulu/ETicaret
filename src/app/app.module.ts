import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './service/services.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Base
import { DialogReusableComponent } from './base/material/dialog-reusable-component/dialog-reusable.component';

//Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, DialogReusableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //Material
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
