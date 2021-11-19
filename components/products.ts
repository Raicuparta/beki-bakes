import { ProductId, ProductVariantId } from "./productPhotos";

type Package = {
  quantity: number;
  price: number;
};

export type Product<TProductId extends ProductId> = {
  name: string;
  price: number;
  id: TProductId;
  variants: Record<ProductVariantId<TProductId>, string>;
  packages: Package[];
};

const macarons: Product<"macarons"> = {
  name: "Macarons",
  price: 2.0,
  id: "macarons",
  variants: {
    raspberry: "Raspberry",
    chocolate: "Chocolate",
    pistachio: "Pistachio",
    yuzu: "Yuzu",
  },
  packages: [
    {
      quantity: 12,
      price: 18,
    },
    {
      quantity: 24,
      price: 35,
    },
    {
      quantity: 48,
      price: 50,
    },
  ],
};

const poundCake: Product<"poundCake"> = {
  name: "Pound Cake",
  price: 3.0,
  id: "poundCake",
  variants: {
    lemon: "Lemon",
    redVelvet: "Red Velvet",
    matcha: "Matcha",
  },
  packages: [
    {
      quantity: 12,
      price: 18,
    },
    {
      quantity: 24,
      price: 35,
    },
    {
      quantity: 48,
      price: 50,
    },
  ],
};

const rollCake: Product<"rollCake"> = {
  name: "Roll cake",
  price: 10.0,
  id: "rollCake",
  variants: {
    chestnut: "Chestnut Mousse",
    caramel: "Salted Caramel",
    matcha: "Matcha Adzuki",
  },
  packages: [
    {
      quantity: 1,
      price: 10,
    },
  ],
};

const cookies: Product<"cookies"> = {
  name: "Cookies",
  price: 1.5,
  id: "cookies",
  variants: {
    walnut: "Walnut",
  },
  packages: [
    {
      quantity: 6,
      price: 8,
    },
    {
      quantity: 12,
      price: 12,
    },
    {
      quantity: 24,
      price: 20,
    },
  ],
};

export const products = {
  macarons,
  poundCake,
  rollCake,
  cookies,
} as const;
