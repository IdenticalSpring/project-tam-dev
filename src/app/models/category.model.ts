import { Brand } from "./brand.model";
import { Product } from "./product.model";

export interface Category {
  categoryId: number;
  name: string;
  image: string;
  isdelete: boolean;
  brands: Brand[];
  products: Product[];
}
