import Image from "next/image";
import {
  Card,
  CardContent,
  Stack,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import { Product } from "./products";
import { ProductId, ProductVariantId } from "./productPhotos";

type Props<TProductId extends ProductId> = {
  product: Product<TProductId>;
  variantId: ProductVariantId<TProductId>;
};

export const SelectedProduct = <TProductId extends ProductId>({
  product,
  variantId,
}: Props<TProductId>) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const { id, name, price, variants, packages } = product;
  const variant = variants[variantId];

  if (!variant) return null;

  return (
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
          priority
        />
        <CardContent sx={{ py: 1 }}>
          <Typography variant="h6" align="center">
            {variant} {name}
          </Typography>
        </CardContent>
        <span />
      </Card>
      <Box sx={{ display: "flex", my: 2 }}>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          {packages.map((pkg) => (
            <Button
              key={pkg.quantity}
              variant="contained"
              fullWidth
              sx={{
                fontFamily: "serif",
                fontSize: "1em",
                lineHeight: "1em",
                textTransform: "none",
              }}
            >
              <Stack spacing={1}>
                <Box fontWeight="bold">{pkg.quantity} pcs</Box>
                <Box>€{pkg.price}</Box>
              </Stack>
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
