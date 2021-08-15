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
};

export const SelectedProduct = ({ product }: Props) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const { id, name, price, variants, packages } = product;
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
          <Image
            title={name}
            alt={name}
            src={`/photos/${id}/${id}.jpg`}
            layout="responsive"
            width={16}
            height={12}
            objectFit="cover"
            sizes="500px"
          />
          <CardContent sx={{ py: 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <MotionTypography
                variant="h6"
                layoutId={"name-" + id}
              >
                {name} ({variant})
              </MotionTypography>
              <MotionTypography
                variant="h6"
                layoutId={"price-" + id}
              >
                €{price * quantity}
              </MotionTypography>
            </Stack>
          </CardContent>
          <span />
        </Card>
        <Box sx={{ display: 'flex', m: 2 }}>
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
              >
                {pkg.quantity} (€{pkg.price})
              </Button>
            ))}
          </Stack>
        </Box>
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
