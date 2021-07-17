import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Grid,
} from '@material-ui/core';
import { motion } from "framer-motion";
import Link from 'next/link';

import { Product } from "./Products";

type Props = {
  product: Product;
};

export const ListedProduct = ({ product: {
  id,
  name,
  price,
} }: Props) => (
  <Grid
    key={id}
    item
    xs={12}
    sm={6}
  >
    <motion.div layoutId={"card-" + name}>
      <Card>
        <Link href={`/${id}`} passHref>
          <CardActionArea component="a">
            <CardMedia
              component="img"
              alt={name}
              title={name}
              image={`/photos/${id}.jpg`}
              height={230}
            />
            <CardContent sx={{ py: 1 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6">
                  {name}
                </Typography>
                <Typography variant="h6">
                  €{price}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </motion.div>
  </Grid>
);
