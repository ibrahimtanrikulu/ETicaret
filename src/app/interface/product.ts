import { Base } from './Base/base';

export interface Product extends Base {
  name: string;
  brandId: number;
  description: string;
  fiyat: number;
  stock: number;
  categoriId: number;
}
