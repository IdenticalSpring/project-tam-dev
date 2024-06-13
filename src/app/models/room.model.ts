import { Account } from './account.model';
import { Message } from './message.model';
import { Owner } from './owner.model';

export interface Room {
  roomId: number;
  accountId: number;
  ownerId: number;
  content: string;
  timestamp: Date;
  account: Account;
  messages: Message[];
  owner: Owner;
}
