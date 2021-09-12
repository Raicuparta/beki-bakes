import { Stack, IconButton } from "@material-ui/core";
import React from "react";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@material-ui/icons";
import { MotionStack } from "./Motion";
import { AnimatePresence } from "framer-motion";

export const SocialIcons = () => (
  <MotionStack
    spacing={4}
    direction="row"
    justifyContent="center"
    sx={{ my: 2 }}
  >
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
  </MotionStack>
);
