import { useRouter } from 'next/dist/client/router'

import { ProductId, Products, products } from '../components'

const Test = () => {
  const { query } = useRouter();
  const productId = query.productId as ProductId;

  return (
    <Products selectedProductId={productId} />
  );
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => Object.keys(products).map(productId => ({
  params: { productId },
  fallback: false,
}));

export default Test;
