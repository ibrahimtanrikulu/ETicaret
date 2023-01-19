import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Category } from '../interface/categori';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  firabase_url: string =
    'https://eticaret-370207-default-rtdb.europe-west1.firebasedatabase.app/';
  jsonAd: string = 'categori.json';
  private categoryTablo: any[] = [];

  constructor(private htttpService: HttpClientService) {}

  getAll(): Observable<Category[]> {
    return this.htttpService
      .get<Category[]>(this.firabase_url, this.jsonAd)
      .pipe(
        map((res) => {
          this.categoryTablo = res;
          const categories: Category[] = [];
          for (const key in res) {
            categories.push({ ...res[key], id: key });
          }
          return categories;
        })
      );
  }

  Add(category: Category) {
    return this.htttpService.post(this.firabase_url, this.jsonAd, category);
  }

  Delete(category: Category) {
    return this.htttpService.delete(
      this.firabase_url,
      'categori',
      category.id!
    );
  }

  update(category: Category) {
    return this.Delete(category).subscribe((s) => {
      return this.Add(category).subscribe((s) => {
        return this.getAll();
      });
    });
  }
}
