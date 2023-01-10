import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { SepetComponent } from './sepet/sepet.component';
import { ProfileComponent } from './profile/profile.component';
import { SatinAlmaComponent } from './satin-alma/satin-alma.component';
import { UrunlerComponent } from './urunler/urunler.component';
import { DetayComponent } from './urunler/detay/detay.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContextComponent } from './context/context.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AnasayfaComponent,
    SepetComponent,
    ProfileComponent,
    SatinAlmaComponent,
    UrunlerComponent,
    DetayComponent,
    NavbarComponent,
    ContextComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports:[AnasayfaComponent]
})
export class UiModule {}
