import { GuestConsultation } from './guest-consultation.model';

export interface GuestStatus {
  statusGuestId: number;
  name: string;
  guestConsultations: GuestConsultation[];
}
