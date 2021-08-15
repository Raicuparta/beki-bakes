import Image from 'next/image';
import {
  Card,
  CardContent,
  Stack,
  Box,
  List,
  ListItem,
  Typography,
  Container,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';
import {
  MotionCardMedia,
  MotionTypography,
  MotionContainer,
} from './Motion';

import { Product } from "./products";

type Props = {
  product: Product;
  variantId: string;
};

export const SelectedProduct = ({ product, variantId }: Props) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;
  
  const { id, name, price, variants, packages } = product;
  const variant = variants[variantId];

  if (!variant) return null;

  return (
    <MotionContainer
      maxWidth="sm"
      layoutId={"card-" + id}
    >
      <Box>
        <Card>
          <Image
            title={name}
            alt={name}
            src={`/photos/${id}/${variantId}.jpg`}
            layout="responsive"
            width={16}
            height={12}
            objectFit="cover"
            sizes="500px"
            placeholder="blur"
            blurDataURL="/photos/placeholder.png"
          />
          <CardContent sx={{ py: 1 }}>
            <MotionTypography
              variant="h6"
              layoutId={"name-" + id}
              align="center"
            >
              {name} ({variant})
            </MotionTypography>
          </CardContent>
          <span />
        </Card>
        <Box sx={{ display: 'flex', my: 2 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: '100%' }}
          >
            {packages.map(pkg => (
              <Button
                key={pkg.quantity}
                variant="contained"
                fullWidth
                sx={{
                  fontFamily: 'serif',
                  fontSize: '1em',
                  lineHeight: '1em',
                  textTransform: 'none',
                }}
              >
                <Stack spacing={1}>
                  <Box fontWeight="bold">
                    {pkg.quantity} pcs
                  </Box>
                  <Box>
                    €{pkg.price}
                  </Box>
                </Stack>
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </MotionContainer>
  );
};
