import { cookies } from "./cookies";
import { macarons } from "./macarons";
import { poundCake } from "./poundCake";
import { rollCake } from "./rollCake";

export { default as placeHolder } from "./placeHolder.png";

export const productPhotos = {
  cookies,
  macarons,
  poundCake,
  rollCake,
} as const;

export type ProductId = keyof typeof productPhotos;
export type ProductVariantId<TProductCategory extends ProductId> = Exclude<
  keyof typeof productPhotos[TProductCategory],
  "main"
>;
