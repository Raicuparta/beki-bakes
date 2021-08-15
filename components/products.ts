type Package = {
  quantity: number;
  price: number;
};

export type Product = {
  name: string;
  price: number;
  id: string;
  variants: Record<string, string>;
  packages: Package[];
}

export type ProductId = 'rollCake' | 'macarons' | 'cookies' | 'poundCake';

export const products: Record<ProductId, Product> = {
  macarons: {
    name: 'Macarons',
    price: 2.00,
    id: 'macarons',
    variants: {
      raspberry: 'Raspberry',
      chocolate: 'Chocolate',
      pistachio: 'Pistachio',
      yuzu: 'Yuzu',
      macarons: 'Caramel',
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
  },
  poundCake: {
    name: 'Pound Cake',
    price: 3.00,
    id: 'poundCake',
    variants: {
      lemon: 'Lemon',
      redVelvet: 'Red Velvet',
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
  },
  rollCake: {
    name: 'Roll cake',
    price: 10.00,
    id: 'rollCake',
    variants: {
      chestnut: 'Chestnut Mousse',
      caramel: 'Salted Caramel',
      matcha: 'Matcha Adzuki',
    },
    packages: [
      {
        quantity: 1,
        price: 10,
      },
    ],
  },
  cookies: {
    name: 'Cookies',
    price: 1.50,
    id: 'cookies',
    variants: {
      walnut: 'Walnut',
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
  },
};
