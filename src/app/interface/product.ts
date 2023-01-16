import { Base } from './Base/base';

export interface Product extends Base {
  name: string;
  description: string;
  fiyat: number;
  stock: number;

  brandId: number;
  categoriId: number;
}
