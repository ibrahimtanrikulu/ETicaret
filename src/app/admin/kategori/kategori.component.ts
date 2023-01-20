import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/interface/categori';
import { CategoryService } from 'src/app/service/category.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogReusableComponent } from 'src/app/base/admin/components/dialog-reusable-component/dialog-reusable.component';
import { IDialogModel } from 'src/app/model/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { CdkColumnDef } from '@angular/cdk/table';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss'],
  providers: [CdkColumnDef],
})
export class KategoriComponent implements OnInit {
  kategoriTablo: Category[] = [];
  kategori: Category = new Category();
  name = new FormControl('');
  isNew: boolean = false;
  dialogModelCheck: boolean = false;

  displayedColumns: string[] = ['name', 'action'];
  dataSource = new MatTableDataSource(this.kategoriTablo);

  constructor(
    private categoriService: CategoryService,
    public dialog: MatDialog
  ) {}

   ngOnInit(): void {
    this.getAll();
    setTimeout(() => {
      console.log(this.kategoriTablo);
      
    }, 200);  
  }

  getAll() {
    this.categoriService.getAll().subscribe((s) => (this.kategoriTablo = s));
  }

  dialogModelCheckMethod(item?: Category) {
    this.dialogModelCheck = true;
    if (item) {
      this.kategori = item;
      this.isNew = true;
    } else {
      this.isNew = false;
    }
  }

  save() {
    if (!this.isNew) {
      this.name.value ? (this.kategori.name = this.name.value) : '';
      this.categoriService.Add(this.kategori).subscribe((s) => {
        this.getAll();
        this.kategori = new Category();
      });
    } else {
      this.name.value ? (this.kategori.name = this.name.value) : '';
      this.categoriService.update(this.kategori);
    }
    this.kategori = new Category();
    this.dialogModelCheck = false;
  }

  confirmDialogData: IDialogModel = {
    baslik: 'Silinsin mi',
    aciklama: 'bu kategoriyi silicekmisin',
    hayir: 'Hayır',
    evet: 'Evet',
  };
  openDeleteDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    category: Category
  ): void {
    const result = this.dialog.open(DialogReusableComponent, {
      width: '350px',
      disableClose: true,
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.confirmDialogData,
    });

    result.afterClosed().subscribe((s) => {
      if (s) {
        this.categoriService.Delete(category).subscribe((s) => {
          this.getAll();
        });
      }
    });
  }
}
