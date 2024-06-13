import { Account } from './account.model';
import { Owner } from './owner.model';
import { OrderStatus } from './order-status.model';
import { Voucher } from './voucher.model';

export interface Order {
  orderId: number;
  codeOrder: string;
  orderDate: Date;
  shippedDate: Date;
  requiredDate: Date;
  totalAmount: number;
  accountId: number;
  ownerId: number;
  statusId: number;
  voucherId?: string;
  account: Account;
  owner: Owner;
  status: OrderStatus;
  voucher?: Voucher;
}
