import { ProductId, ProductVariantId } from "./productPhotos";

export type Package = {
  quantity: number;
  price: number;
};

export type Product<TProductId extends ProductId> = {
  name: string;
  id: TProductId;
  variants: Record<ProductVariantId<TProductId>, string>;
  packages: Package[];
  description?: string;
};

const macarons: Product<"macarons"> = {
  name: "Macarons",
  description: "This product has a lovely lovely description",
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
