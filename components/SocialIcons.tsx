import { Instagram, WhatsApp, Facebook } from "@mui/icons-material";
import { Stack, IconButton } from "@mui/material";
import React from "react";

export const SocialIcons = () => (
  <Stack
    direction="column"
    sx={{
      justifyContent: "center",
      height: "100%",
      position: "absolute",
      right: (theme) => theme.spacing(2),
      top: 0,
    }}
  >
    <IconButton
      component="a"
      href="https://www.instagram.com/bekibakes"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="small"
    >
      <Instagram />
    </IconButton>
    <IconButton
      component="a"
      href="https://wa.me/623006482"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="small"
    >
      <WhatsApp />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.facebook.com/bekibakeshop"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="small"
    >
      <Facebook />
    </IconButton>
  </Stack>
);
