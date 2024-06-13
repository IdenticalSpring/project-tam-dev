import { Order } from './order.model';
import { Owner } from './owner.model';

export interface Voucher {
  voucherId: string;
  price: number;
  quantity: number;
  startDate: Date;
  endDate: Date;
  ownerId: number;
  isdelete: boolean;
  orders: Order[];
  owner: Owner;
}
