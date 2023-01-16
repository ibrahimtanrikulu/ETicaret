import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/categori';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss'],
})
export class KategoriComponent implements OnInit {
  tablo: any;
  constructor(private categoriService: CategoryService) {}
  ngOnInit(): void {
    let cate: Category;
    cate = <Category>{
      id: '',
      name: 'elektironik',
    };
    //this.categoriService.Add(cate)
    
    this.categoriService.getAll().subscribe((s) => (this.tablo = s));
    setTimeout(() => {
      
      console.log(this.tablo);
    }, 1000);
  }
}
