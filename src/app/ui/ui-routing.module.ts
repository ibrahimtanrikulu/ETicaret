import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './layout/anasayfa/anasayfa.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SatinAlmaComponent } from './sepet/satin-alma/satin-alma.component';
import { SepetComponent } from './sepet/sepet.component';
import { DetayComponent } from './urunler/detay/detay.component';
import { UrunlerComponent } from './urunler/urunler.component';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profil', component: ProfileComponent },
      { path: 'satinAlma', component: SatinAlmaComponent },
      { path: 'sepet', component: SepetComponent },
      { path: 'urunler', component: UrunlerComponent },
      { path: 'urun-detay', component: DetayComponent },
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
