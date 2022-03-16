import NextLink from "next/link";
import React from "react";
import { Box, Stack, Button, Typography, AppBar } from "@mui/material";
import Image from "next/image";
import { PageContainer } from "./PageContainer";
import { SocialIcons } from ".";

const snailSize = 70;

type Props = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  title: string;
};

export const MenuPageContainer = ({ children, footer, title }: Props) => (
  <Box component="main" sx={{ position: "relative" }}>
    <PageContainer>
      <NextLink passHref href="/">
        <Button size="small" variant="contained">
          Back
        </Button>
      </NextLink>
      <Stack
        sx={{
          margin: "auto",
          mt: 2,
          borderRadius: (theme) => theme.shape.borderRadius,
          overflow: "hidden",
          boxShadow: (theme) => theme.shadows[2],
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            p: 2,
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
            bgcolor: "background.paper",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 30,
              lineHeight: 1,
            }}
          >
            {title}
          </Typography>
        </Stack>
        <Box
          sx={{
            background: "white",
            px: 2,
            pt: 5,
            color: "text.secondary",
            flex: 1,
            position: "relative",
          }}
        >
          <Stack spacing={6} sx={{ mb: 5 }}>
            {children}
          </Stack>
          {footer && <Box sx={{ mb: 2 }}>{footer}</Box>}
        </Box>
      </Stack>
    </PageContainer>
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        p: 1,
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography align="center" variant="h6">
        Place your order
      </Typography>
      <SocialIcons horizontal />
    </Box>
  </Box>
);
