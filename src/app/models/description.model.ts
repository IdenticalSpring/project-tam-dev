import { Image } from './image.model';
import { Product } from './product.model';

export interface Description {
  descriptionId: number;
  title: string;
  content: string;
  isdelete: boolean;
  images: Image[];
  products: Product[];
}
