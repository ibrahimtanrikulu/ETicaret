import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sideBarCheck = new EventEmitter<boolean>();
  check: boolean = true;
  checkFunc() {
    this.check === true ? (this.check = false) : (this.check = true);
    this.sideBarCheck.emit(this.check);
  }
}
