import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SepetComponent } from './sepet/sepet.component';
import { ProfileComponent } from './profile/profile.component';
import { SatinAlmaComponent } from './sepet/satin-alma/satin-alma.component';
import { UrunlerComponent } from './urunler/urunler.component';
import { DetayComponent } from './urunler/detay/detay.component';
import { UiRoutingModule } from './ui-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AnasayfaComponent } from './layout/anasayfa/anasayfa.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SepetComponent,
    ProfileComponent,
    SatinAlmaComponent,
    UrunlerComponent,
    DetayComponent,
    NavbarComponent,
    AnasayfaComponent,
    FooterComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, UiRoutingModule],
  exports: [UiRoutingModule],
})
export class UiModule {}
