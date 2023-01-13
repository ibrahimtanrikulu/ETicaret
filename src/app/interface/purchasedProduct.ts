import { Base } from './Base/base';

export interface purchasedProduct extends Base {
  userId: number;
  productId: number;
}
