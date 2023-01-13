import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CommentComponent } from './comment/comment.component';
import { KategoriComponent } from './kategori/kategori.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { AnasayfaComponent } from './layout/anasayfa/anasayfa.component';
import { UrunComponent } from './urun/urun.component';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaComponent,
    children: [
      { path: 'kategori', component: KategoriComponent },
      { path: 'kullanici', component: KullaniciComponent },
      { path: 'urunler', component: UrunComponent },
      { path: 'markalar', component: BrandComponent },
      { path: 'yorumlar', component: CommentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
