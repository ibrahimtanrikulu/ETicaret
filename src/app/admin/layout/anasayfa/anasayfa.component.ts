import { Component } from '@angular/core';

@Component({
  selector: 'admin-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss'],
})
export class AnasayfaComponent {
  check: boolean = true;
  sideBarCheck(e: any) {
    this.check = e;
  }
}
