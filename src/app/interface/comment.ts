import { Base } from './Base/base';

export interface Comment extends Base {
  userId: number;
  productId: number;
  comment: string;
  star: number;
  header: string;
}
