import { Description } from './description.model';
import { Product } from './product.model';

export interface Image {
  imageId: number;
  linkImage: string;
  isdelete: boolean;
  productId?: number;
  descriptionId?: number;
  description?: Description;
  product?: Product;
}
