import { ImportProduct } from './import-product.model';
import { Owner } from './owner.model';

export interface Warehouse {
  warehouseId: number;
  ownerId: number;
  totalQuantity: number;
  totalPrice: number;
  importProducts: ImportProduct[];
  owner: Owner;
}
