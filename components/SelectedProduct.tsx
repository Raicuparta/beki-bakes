import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Grid,
  Box,
  IconButton,
} from '@material-ui/core';
import { ArrowLeft as ArrowLeftIcon } from '@material-ui/icons';
import { motion } from "framer-motion";
import Link from 'next/link';
import { ListedProduct } from './ListedProduct';
import {
  MotionCardMedia,
  MotionTypography,
  MotionStack,
} from './Motion';

import { Product } from "./Products";

type Props = {
  product: Product;
};

export const SelectedProduct = ({ product }: Props) => {
  const { id, name, price } = product;
  return (
    <>
      <ListedProduct product={product} selected />
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
      }}>
        <motion.div layoutId={"card-" + id}>
          <Card sx={{ height: '100vh', width: '100vw' }}>
            <CardContent>
              <Link href="/" passHref>
                <IconButton
                  component="a"
                  color="inherit"
                  size="small"
                >
                  <ArrowLeftIcon fontSize="large" />
                </IconButton>
              </Link>
            </CardContent>
            <MotionCardMedia
              component="img"
              alt={name}
              title={name}
              image={`/photos/${id}.jpg`}
              height={350}
              layoutId={"photo-" + id}
            />
            <CardContent sx={{ py: 1 }}>
              <Stack direction="row" justifyContent="space-between">
                <MotionTypography
                  variant="h6"
                  layoutId={"name-" + id}
                >
                  {name}
                </MotionTypography>
                <MotionTypography
                  variant="h6"
                  layoutId={"price-" + id}
                >
                  €{price}
                </MotionTypography>
              </Stack>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </>
  );
};
