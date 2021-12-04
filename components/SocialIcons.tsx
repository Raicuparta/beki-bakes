import { Stack, IconButton } from "@mui/material";
import React from "react";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

export const SocialIcons = () => (
  <Stack spacing={4} direction="row" justifyContent="center" sx={{ my: 2 }}>
    <IconButton
      component="a"
      href="https://www.instagram.com/bekibakes"
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
      size="large"
    >
      <InstagramIcon fontSize="large" />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.facebook.com/bekibakeshop"
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
      size="large"
    >
      <FacebookIcon fontSize="large" />
    </IconButton>
  </Stack>
);
