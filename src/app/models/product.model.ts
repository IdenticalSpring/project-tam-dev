import { Brand } from "./brand.model";
import { Category } from "./category.model";
import { Description } from "./description.model";
import { Image } from "./image.model";
import { Owner } from "./owner.model";
import { ProductSize } from "./product-size.model";

export interface Product {
  productId: number;
  name: string;
  shortDescription: string;
  price: number;
  quantitySold: number;
  ratePoint: number;
  rateCount: number;
  isdelete: boolean;
  isban: boolean;
  descriptionId: number;
  categoryId: number;
  brandId?: number;
  ownerId: number;
  brand?: Brand;
  category: Category;
  comments: Comment[];
  description: Description;
  images: Image[];
  owner: Owner;
  productSizes: ProductSize[];
}
