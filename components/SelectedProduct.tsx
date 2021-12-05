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
import { ExpandMore, InfoOutlined } from "@mui/icons-material";

type Props<TProductId extends ProductId> = {
  product: Product<TProductId>;
  variantId: ProductVariantId<TProductId>;
};

export const SelectedProduct = <TProductId extends ProductId>({
  product,
  variantId,
}: Props<TProductId>) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
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
          <Stack
            onClick={() =>
              setIsDescriptionExpanded((isExpanded) => !isExpanded)
            }
            direction="row"
            sx={{ justifyContent: "space-between" }}
          >
            <Typography variant="h6" align="center">
              {fullName}
            </Typography>
            {product.description && (
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <InfoOutlined />
                <ExpandMore fontSize="small" />
              </Stack>
            )}
          </Stack>
        </CardContent>
        {product.description && isDescriptionExpanded && (
          <CardContent
            sx={{ bgcolor: "background.light", color: "text.secondary" }}
          >
            {product.description}
          </CardContent>
        )}
        <span />
      </Card>
      <QuantitySelect packages={packages} fullName={fullName} />
    </Box>
  );
};
