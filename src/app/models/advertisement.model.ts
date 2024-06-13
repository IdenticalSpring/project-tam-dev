import { GuestConsultation } from './guest-consultation.model';
import { Owner } from './owner.model';
import { Service } from './service.model';
import { PostStatus } from './post-status.model';

export interface Advertisement {
  adId: number;
  title: string;
  content: string;
  image: string;
  statusPostId: number;
  serviceId: number;
  ownerId: number;
  guestConsultations: GuestConsultation[];
  owner: Owner;
  service: Service;
  statusPost: PostStatus;
}
