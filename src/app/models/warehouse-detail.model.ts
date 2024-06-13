import { ProductSize } from './product-size.model';
import { Warehouse } from './warehouse.model';

export interface WarehouseDetail {
  warehouseId: number;
  productSizeId: string;
  quantityInStock: number;
  location: string;
  unitPrice: number;
  productSize: ProductSize;
  warehouse: Warehouse;
}
