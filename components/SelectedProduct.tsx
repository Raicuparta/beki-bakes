import Image from "next/image";
import {
  Card,
  CardContent,
  Stack,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Product } from "./products";
import { ProductId, productPhotos, ProductVariantId } from "./productPhotos";
import { QuantitySelect } from "./QuantitySelect";

type Props<TProductId extends ProductId> = {
  product: Product<TProductId>;
  variantId: ProductVariantId<TProductId>;
};

export const SelectedProduct = <TProductId extends ProductId>({
  product,
  variantId,
}: Props<TProductId>) => {
  if (!product) return null;

  const { id, name, variants, packages } = product;
  const variant = variants[variantId];

  if (!variant) return null;

  const fullName = `${variant} ${name}`;

  return (
    <Box>
      <Card>
        <Image
          title={name}
          alt={name}
          // @ts-ignore
          src={productPhotos[id][variantId]}
          layout="responsive"
          width={16}
          height={12}
          objectFit="cover"
          sizes="500px"
          priority
        />
        <CardContent sx={{ py: 1 }}>
          <Typography variant="h6" align="center">
            {fullName}
          </Typography>
        </CardContent>
        <span />
      </Card>
      <QuantitySelect packages={packages} fullName={fullName} />
    </Box>
  );
};
