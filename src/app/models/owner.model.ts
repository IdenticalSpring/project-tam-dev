import { Advertisement } from './advertisement.model';
import { Comment } from './comment.model';
import { GuestConsultation } from './guest-consultation.model';
import { Notification } from './notification.model';
import { Order } from './order.model';
import { Product } from './product.model';
import { Room } from './room.model';
import { Size } from './size.model';
import { Staff } from './staff.model';
import { Voucher } from './voucher.model';
import { Warehouse } from './warehouse.model';

export interface Owner {
  ownerId: number;
  email: string;
  password: string;
  fullname: string;
  image?: string;
  phone: string;
  address: string;
  isBan: boolean;
  advertisements: Advertisement[];
  comments: Comment[];
  guestConsultations: GuestConsultation[];
  notifications: Notification[];
  orders: Order[];
  products: Product[];
  rooms: Room[];
  sizes: Size[];
  staff: Staff[];
  vouchers: Voucher[];
  warehouses: Warehouse[];
}
