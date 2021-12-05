import { Card, CardContent, Stack, Button, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";

import { Package } from "./products";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

type Props = {
  selectedPackage: Package;
  fullName: string;
};

export const SelectedQuantityCard = (props: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!wrapperRef.current || !props.selectedPackage) return;
    wrapperRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.selectedPackage]);

  return (
    <Card
      ref={wrapperRef}
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
  );
};
