import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrunComponent } from './urun/urun.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { AnasayfaComponent } from './layout/anasayfa/anasayfa.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    UrunComponent,
    KategoriComponent,
    KullaniciComponent,
    AnasayfaComponent,
    SideBarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AnasayfaComponent],
})
export class AdminModule {}
