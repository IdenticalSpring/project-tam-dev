import { Advertisement } from './advertisement.model';
import { Owner } from './owner.model';
import { GuestStatus } from './guest-status.model';

export interface GuestConsultation {
  guestId: number;
  fullname: string;
  phone: string;
  content: string;
  statusGuestId: number;
  adId: number;
  ownerId: number;
  ad: Advertisement;
  owner: Owner;
  statusGuest: GuestStatus;
}
