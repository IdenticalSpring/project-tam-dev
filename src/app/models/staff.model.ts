import { Owner } from './owner.model';

export interface Staff {
  staffId: number;
  email: string;
  password: string;
  fullname: string;
  image?: string;
  phone: string;
  ownerId: number;
  owner: Owner;
}
