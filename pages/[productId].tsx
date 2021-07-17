import { useRouter } from 'next/dist/client/router'

import { ProductId, Products } from '../components'

const Test = () => {
  const { query } = useRouter();
  const productId = query.productId as ProductId;

  return (
    <Products selectedProductId={productId} />
  );
};

export default Test;
