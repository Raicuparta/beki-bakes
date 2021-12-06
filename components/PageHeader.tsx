import { Typography, Stack, Box, Container, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { SocialIcons } from ".";
import Link from "next/link";

const size = 60;

export const PageHeader = () => (
  <Box
    sx={{
      bgcolor: "background.paper",
      mb: 2,
      width: "100%",
    }}
  >
    <Container maxWidth="sm" sx={{ position: "relative" }}>
      <Link passHref href="/">
        <Stack
          component={Button}
          direction={"column"}
          sx={{
            pt: 2,
            pb: 1,
            color: "text.primary",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            src="/snail-halfwhite.svg"
            alt="beki bakes"
            width={size}
            height={size}
            priority
          />
          <Typography
            component="h1"
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            bekibakes
          </Typography>
        </Stack>
      </Link>
      <SocialIcons />
    </Container>
  </Box>
);
