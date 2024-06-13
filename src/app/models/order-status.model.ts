import { Order } from './order.model';

export interface OrderStatus {
  statusId: number;
  name: string;
  orders: Order[];
}
