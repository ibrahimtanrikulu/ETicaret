import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrunComponent } from './urun/urun.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KullaniciComponent } from './kullanici/kullanici.component';



@NgModule({
  declarations: [
    UrunComponent,
    KategoriComponent,
    KullaniciComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
