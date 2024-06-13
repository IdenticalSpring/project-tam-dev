import { Warehouse } from './warehouse.model';

export interface ImportProduct {
  importId: number;
  warehouseId: number;
  importDate: Date;
  origin: string;
  quantity: number;
  totalPrice: number;
  warehouse: Warehouse;
}
