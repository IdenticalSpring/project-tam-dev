import { ImportProduct } from './import-product.model';
import { ProductSize } from './product-size.model';

export interface ImportProductDetail {
  importId: number;
  productSizeId: string;
  quantityReceived: number;
  unitPrice: number;
  import: ImportProduct;
  productSize: ProductSize;
}
