import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { PageContainer } from "./PageContainer";

const snailSize = 70;

type Props = {
  children: React.ReactNode;
};

export const MenuPageContainer = ({ children }: Props) => (
  <main>
    <PageContainer>
      <NextLink passHref href="/">
        <Button size="small" variant="contained">
          Back
        </Button>
      </NextLink>
      <Stack
        sx={{
          width: 540,
          height: 960,
          margin: "auto",
          mt: 2,
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
            py: 5,
            color: "text.secondary",
            flex: 1,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: (theme) => theme.spacing(2),
              bottom: (theme) => theme.spacing(2),
            }}
          >
            <Image
              src="/snail-halfwhite.svg"
              alt="beki bakes"
              width={snailSize}
              height={snailSize}
              priority
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: (theme) => theme.spacing(2),
              bottom: (theme) => theme.spacing(2),
            }}
          >
            <Typography>Full-size roll: 21 x 9 x 7 cm</Typography>
            <Typography>Half-size roll: 10.5 x 9 x 7 cm</Typography>
          </Box>
          <Stack spacing={6}>{children}</Stack>
        </Box>
      </Stack>
    </PageContainer>
  </main>
);
