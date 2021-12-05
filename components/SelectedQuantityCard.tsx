import { Card, CardContent, Stack, Button, Typography } from "@mui/material";
import React from "react";

import { Package } from "./products";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { ScrollToOnMount } from "./ScrollToOnMount";

type Props = {
  selectedPackage: Package;
  fullName: string;
};

export const SelectedQuantityCard = (props: Props) => (
  <ScrollToOnMount
    component={Card}
    key={props.selectedPackage.quantity}
    sx={{ mb: 2, bgcolor: "background.light", color: "text.secondary" }}
  >
    <CardContent>
      <Typography>
        Please send your request of {props.selectedPackage.quantity}{" "}
        {props.fullName} (€{props.selectedPackage.price}) via one of these
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
          href="https://wa.me/623006482"
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
  </ScrollToOnMount>
);
