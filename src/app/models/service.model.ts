import { Advertisement } from './advertisement.model';

export interface Service {
  serviceId: number;
  name: string;
  isdelete: boolean;
  advertisements: Advertisement[];
}
