import { Account } from './account.model';
import { Owner } from './owner.model';

export interface Notification {
  notificationId: number;
  accountId?: number;
  ownerId?: number;
  content: string;
  isRead: boolean;
  url?: string;
  createDate: Date;
  account?: Account;
  owner?: Owner;
}
