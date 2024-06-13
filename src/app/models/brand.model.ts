import { Category } from "./category.model";
import { Product } from "./product.model";

export interface Brand {
  brandId: number;
  name: string;
  image: string;
  isdelete: boolean;
  categoryId: number;
  category: Category;
  products: Product[];
}
