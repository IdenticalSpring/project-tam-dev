import { Account } from './account.model';
import { Owner } from './owner.model';
import { Product } from './product.model';

export interface Comment {
  commentId: number;
  accountId: number;
  productId: number;
  ownerId?: number;
  content: string;
  timestamp: Date;
  reply?: string;
  replyTimestamp?: Date;
  account: Account;
  owner?: Owner;
  product: Product;
}
