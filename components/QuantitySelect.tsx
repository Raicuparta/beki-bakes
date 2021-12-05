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

import { Package, Product } from "./products";
import { ProductId, productPhotos, ProductVariantId } from "./productPhotos";
import { QuantityButton } from "./QuantityButton";
import { SocialIcons } from ".";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

type Props = {
  packages: Package[];
  fullName: string;
};

export const QuantitySelect = (props: Props) => {
  const [quantity, setQuantity] = useState(0);

  const selectedPackage = props.packages.find(
    (pkg) => pkg.quantity === quantity
  );

  return (
    <>
      <Box sx={{ display: "flex", my: 2 }}>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          {props.packages.map((pkg) => (
            <QuantityButton
              key={pkg.quantity}
              package={pkg}
              isSelected={quantity === pkg.quantity}
              onClick={() => setQuantity(pkg.quantity)}
            />
          ))}
        </Stack>
      </Box>
      {selectedPackage && (
        <Card
          sx={{ mb: 2, bgcolor: "background.light", color: "text.secondary" }}
        >
          <CardContent>
            <Typography>
              Please send your request of {selectedPackage.quantity}{" "}
              {props.fullName} (€{selectedPackage.price}) via one of these
              channels:
            </Typography>
            <Stack spacing={1} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                startIcon={<Instagram />}
                href="https://www.instagram.com/bekibakes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Button>
              <Button
                variant="contained"
                startIcon={<WhatsApp />}
                href="https://woops.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </Button>
              <Button
                variant="contained"
                startIcon={<Facebook />}
                href="https://www.facebook.com/bekibakeshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Button>
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
};
