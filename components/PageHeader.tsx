/* eslint-disable @next/next/no-img-element */
import { Typography, Stack, Box, Container } from "@material-ui/core";
import { ArrowBackIos as ArrowLeftIcon } from "@material-ui/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MotionBox, MotionTypography } from "./Motion";

type Props = {
  isSmall?: boolean;
  href: string;
};

export const PageHeader = ({ isSmall = false, href }: Props) => {
  const size = isSmall ? 40 : 75;
  return (
    <>
      <MotionBox
        component="a"
        sx={{
          all: "unset",
          cursor: "pointer",
          backgroundColor: "background.paper",
          display: "block",
          mb: 2,
          position: "sticky",
          width: "100%",
          top: 0,
          zIndex: 1,
        }}
        layoutId="pageHeader"
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
              <motion.img
                src="/snail-halfwhite.svg"
                alt="beki bakes"
                width={size}
                height={size}
                layoutId="pageHeaderIcon"
              />
              <MotionTypography
                // @ts-ignore
                component="h1"
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: isSmall ? 25 : 30,
                  ml: isSmall ? 1 : 0,
                }}
                layoutId="pageHeaderTitle"
              >
                bekibakes
              </MotionTypography>
            </Stack>
          </Container>
        </Link>
      </MotionBox>
    </>
  );
};
