import {
  Container,
  Grid,
} from '@material-ui/core'

import { ListedProduct } from './ListedProduct'
import { products } from './products';

export const Products = () => (
  <Container maxWidth="sm">
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {Object.values(products).map((product) => (
        <ListedProduct
          key={product.id}
          product={product}
        />
      ))}
    </Grid>
  </Container>
);
