import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrunComponent } from './urun/urun.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    UrunComponent,
    KategoriComponent,
    KullaniciComponent,
    AnasayfaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
