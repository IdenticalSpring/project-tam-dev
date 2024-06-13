import { Owner } from './owner.model';
import { ProductSize } from './product-size.model';

export interface Size {
  sizeId: number;
  name: string;
  ownerId: number;
  isdelete: boolean;
  owner: Owner;
  productSizes: ProductSize[];
}
