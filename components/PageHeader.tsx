/* eslint-disable @next/next/no-img-element */
import { Typography, Stack, Box, Container } from "@material-ui/core";
import { ArrowBackIos as ArrowLeftIcon } from "@material-ui/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  forceSmall?: boolean;
  href: string;
};

export const PageHeader = ({ forceSmall = false, href }: Props) => {
  const [isSmall, setIsSmall] = useState(false);

  const size = isSmall ? 40 : 75;

  useEffect(() => {
    if (forceSmall) {
      setIsSmall(forceSmall);
      return;
    }
    const onScroll = () => {
      setIsSmall(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSmall]);

  return (
    <>
      {!forceSmall && <Box height={140} />}
      <Box
        component="a"
        sx={{
          all: "unset",
          cursor: "pointer",
          backgroundColor: "background.paper",
          display: "block",
          mb: 2,
          position: forceSmall ? "sticky" : "fixed",
          width: "100%",
          top: 0,
          zIndex: 1,
        }}
      >
        <Link href={href} passHref>
          <Container maxWidth="sm">
            <Stack
              direction={isSmall ? "row" : "column"}
              sx={{
                pt: isSmall ? 1 : 2,
                pb: 1,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {isSmall && (
                <ArrowLeftIcon
                  fontSize="small"
                  sx={{ position: "absolute", left: 0 }}
                />
              )}
              <img
                src="/snail-halfwhite.svg"
                alt="beki bakes"
                width={size}
                height={size}
              />
              <Typography
                component="h1"
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: isSmall ? 25 : 30,
                  ml: isSmall ? 1 : 0,
                }}
              >
                bekibakes
              </Typography>
            </Stack>
          </Container>
        </Link>
      </Box>
    </>
  );
};
