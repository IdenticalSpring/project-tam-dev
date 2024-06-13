import { Product } from './product.model';
import { Size } from './size.model';

export interface ProductSize {
  productSizeId: string;
  sizeId: number;
  productId: number;
  quantity: number;
  isdelete: boolean;
  product: Product;
  size: Size;
}
