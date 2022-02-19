import NextLink from "next/link";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { PageContainer } from "./PageContainer";

const snailSize = 70;

type Props = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export const MenuPageContainer = ({ children, footer }: Props) => (
  <main>
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
            menu
          </Typography>
        </Stack>
        <Box
          sx={{
            background: "white",
            p: 2,
            pt: 5,
            pb: 14,
            color: "text.secondary",
            flex: 1,
            position: "relative",
          }}
        >
          {footer && (
            <Box
              sx={{
                position: "absolute",
                left: (theme) => theme.spacing(2),
                bottom: (theme) => theme.spacing(2),
              }}
            >
              {footer}
            </Box>
          )}
          <Stack spacing={6}>{children}</Stack>
        </Box>
      </Stack>
    </PageContainer>
  </main>
);
