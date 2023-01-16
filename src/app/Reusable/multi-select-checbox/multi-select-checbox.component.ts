import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-select-checbox',
  templateUrl: './multi-select-checbox.component.html',
  styleUrls: ['./multi-select-checbox.component.scss'],
})
export class MultiSelectChecboxComponent implements OnInit {
  @Input() header = 'deneme';
  @Input() form!: FormGroup;
  @Input() data: any[] = [];
  @Output() SecilenDiziler = new EventEmitter<number[]>();
  IdDizi: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  change(id: any) {
    if (!this.IdDizi.includes(id)) {
      this.IdDizi.push(id);
    } else {
      const idIndex = this.IdDizi.indexOf(id);
      this.IdDizi.splice(idIndex, 1);
    }
    this.SecilenDiziler.emit(this.IdDizi);
  }
}
