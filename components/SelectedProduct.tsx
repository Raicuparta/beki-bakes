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
import React from 'react';
import {
  MotionCardMedia,
  MotionTypography,
  MotionContainer,
} from './Motion';

import { Product } from "./Products";

type Props = {
  product: Product;
};

const variants = ['Variant A', 'Variant B', 'Variant C'];

export const SelectedProduct = ({ product }: Props) => {
  const { id, name, price } = product;
  return (
    <>
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
              image={`/photos/${id}.jpg`}
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
            <span />
          </Card>
          <Box>
            <List sx={{ py: 0 }}>
              {variants.map(variant => (
                <ListItem
                  key={variant}
                  button
                  sx={{
                    borderBottom: 'solid 2px',
                    borderBottomColor: 'background.paper',
                  }}
                >
                  <Stack width="100%" direction="row" justifyContent="space-between">
                    <Typography>
                      {variant}
                    </Typography>
                  </Stack>
                </ListItem>

              ))}
            </List>
          </Box>
        </Box>
      </MotionContainer>
    </>
  );
};
