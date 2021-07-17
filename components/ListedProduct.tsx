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
import {
  MotionCardMedia,
  MotionTypography,
} from './Motion';

import { Product } from "./Products";

type Props = {
  product: Product;
  selected?: boolean;
};

export const ListedProduct = ({ selected, product: {
  id,
  name,
  price,
} }: Props) => {
  const motionId = selected ? 'NOTHING' : id;
  return (
    <Grid
      key={id}
      item
      xs={12}
      sm={6}
    >
      <motion.div layoutId={"card-" + motionId}>
        <Card>
          <Link
            href={`/${id}`}
            passHref
            scroll={false}
          >
            <CardActionArea component="a">
              <MotionCardMedia
                title={name}
                image={`/photos/${id}.jpg`}
                layoutId={"photo-" + motionId}
                sx={{ height: 230 }}
              />
              <CardContent sx={{ py: 1 }}>
                <Stack direction="row" justifyContent="space-between">
                  <MotionTypography
                    variant="h6"
                    layoutId={"name-" + motionId}
                  >
                    {name}
                  </MotionTypography>
                  <MotionTypography
                    variant="h6"
                    layoutId={"price-" + motionId}
                  >
                    €{price}
                  </MotionTypography>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </motion.div>
    </Grid>
  );
};
