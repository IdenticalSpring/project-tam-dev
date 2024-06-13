import { Advertisement } from './advertisement.model';

export interface PostStatus {
  statusPostId: number;
  name: string;
  advertisements: Advertisement[];
}
