import { Typography, Stack, Box, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import { SocialIcons } from ".";

const size = 75;

export const PageHeader = () => {
  return (
    <Box
      component="a"
      sx={{
        all: "unset",
        backgroundColor: "background.paper",
        display: "block",
        mb: 2,
        width: "100%",
        top: 0,
        zIndex: 1,
      }}
    >
      <Container maxWidth="sm" sx={{ position: "relative" }}>
        <Stack
          direction={"column"}
          sx={{
            pt: 2,
            pb: 1,
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
              fontSize: 30,
            }}
          >
            bekibakes
          </Typography>
        </Stack>
        <SocialIcons />
      </Container>
    </Box>
  );
};
