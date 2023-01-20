import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './service/services.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Base
import { DialogReusableComponent } from './base/admin/components/dialog-reusable-component/dialog-reusable.component';
import { MaterialModule } from './material/material-shared.module';
import { MatTableModule } from '@angular/material/table';
import { DialogFormComponent } from './base/admin/components/dialog-form/dialog-form.component';

@NgModule({
  declarations: [AppComponent, DialogReusableComponent, DialogFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
