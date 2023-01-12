import { base } from './Base/base';

export interface Product extends base {
  name: string;
  fiyat: number;
  stock: number;
  categoriId: number;
}
