import {
  Card,
  CardContent,
  Stack,
  Fab,
  Box,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
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
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
    return null;
  }

  const { id, name, price, variants } = product;
  const variant = variants[selectedVariant];

  return (
    <MotionContainer
      maxWidth="sm"
      disableGutters
      layoutId={"card-" + id}
    >
      <Box sx={{
        color: 'text.secondary',
        bgcolor: 'background.default',
      }}>
        <Card>
          <MotionCardMedia
            title={name}
            image={`/photos/${id}/${variant.picture}.jpg`}
            layoutId={"photo-" + id}
            sx={{ height: 350 }}
          >
          </MotionCardMedia>
          <CardContent sx={{ py: 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <MotionTypography
                variant="h6"
                layoutId={"name-" + id}
              >
                {name} ({variant.name})
              </MotionTypography>
              <MotionTypography
                variant="h6"
                layoutId={"price-" + id}
              >
                €{price}
              </MotionTypography>
            </Stack>
          </CardContent>
          <span />
        </Card>
        <Box>
          <List sx={{ py: 0 }}>
            {product.variants.map((variant, index) => (
              <ListItem
                key={variant.name}
                button
                onClick={() => setSelectedVariant(index)}
                sx={{
                  borderBottom: 'solid 2px',
                  borderBottomColor: 'background.paper',
                }}
              >
                <Stack width="100%" direction="row" justifyContent="space-between">
                  <Typography>
                    {variant.name}
                  </Typography>
                </Stack>
              </ListItem>

            ))}
          </List>
        </Box>
      </Box>
    </MotionContainer>
  );
};
