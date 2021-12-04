import { Stack, IconButton } from "@mui/material";
import React from "react";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

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
      size="large"
    >
      <InstagramIcon fontSize="large" />
    </IconButton>
    <IconButton
      component="a"
      href="https://www.facebook.com/bekibakeshop"
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      size="large"
    >
      <FacebookIcon fontSize="large" />
    </IconButton>
  </Stack>
);
