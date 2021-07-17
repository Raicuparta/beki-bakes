import {
  Card,
  CardContent,
  Stack,
  Container,
  Fab,
} from '@material-ui/core';
import { ArrowLeft as ArrowLeftIcon } from '@material-ui/icons';
import { motion } from "framer-motion";
import Link from 'next/link';
import { ListedProduct } from './ListedProduct';
import {
  MotionCardMedia,
  MotionTypography,
  MotionContainer,
} from './Motion';

import { Product } from "./Products";

type Props = {
  product: Product;
};

export const SelectedProduct = ({ product }: Props) => {
  const { id, name, price } = product;
  return (
    <>
      <MotionContainer
        maxWidth="sm"
        disableGutters
        layoutId={"card-" + id}
        sx={{
          position: 'fixed',
          top: 0,
          zIndex: 1,
        }}
      >
        <Card sx={{ height: '100vh' }}>
          <MotionCardMedia
            title={name}
            image={`/photos/${id}.jpg`}
            layoutId={"photo-" + id}
            sx={{ height: 350 }}
          >
            <Link
              href="/"
              scroll={false}
              passHref
            >
              <Fab color="primary" sx={{ m: 2 }}>
                <ArrowLeftIcon fontSize="large" />
              </Fab>
            </Link>
          </MotionCardMedia>
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
      </MotionContainer>
    </>
  );
};
