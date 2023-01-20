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
import { CommentComponent } from './comment/comment.component';
import { BrandComponent } from './brand/brand.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material-shared.module';

@NgModule({
  declarations: [
    UrunComponent,
    KategoriComponent,
    KullaniciComponent,
    AnasayfaComponent,
    SideBarComponent,
    NavbarComponent,
    FooterComponent,
    CommentComponent,
    BrandComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [AdminRoutingModule],
})
export class AdminModule {}
