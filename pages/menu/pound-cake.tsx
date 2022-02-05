import Head from "next/head";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { PoundCakeIcon } from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { SpecificIconProps } from "../menu";
import { PageContainer } from "../../components/PageContainer";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";

const snailSize = 70;

export const MatchaPoundCakeIcon = ({ size }: SpecificIconProps) => (
  <PoundCakeIcon
    cakeColor="#8ead61"
    cakeOutlineColor="#657e42"
    glazeColor="#657e42"
    glazeOutlineColor="#506534"
    decorationColor="#fcebae"
    decorationOutlineColor="#e5cf81"
    size={size}
  />
);

export const LemonPoundCakeIcon = ({ size }: SpecificIconProps) => (
  <PoundCakeIcon
    cakeColor="#f1dd6e"
    cakeOutlineColor="#caa350"
    glazeColor="#ffffff"
    glazeOutlineColor="#d4b87a"
    decorationColor="#ffffff"
    decorationOutlineColor="#d4b87a"
    size={size}
  />
);

export const RedVelvetPoundCakeIcon = ({ size }: SpecificIconProps) => (
  <PoundCakeIcon
    cakeColor="#cc3153"
    cakeOutlineColor="#9c243e"
    glazeColor="#ffffff"
    glazeOutlineColor="#dddab9"
    decorationColor="#ffffff"
    decorationOutlineColor="#cc3153"
    size={size}
  />
);

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <main>
      <PageContainer>
        <BreadcrumbsList
          items={[
            { title: "Menu", href: "/" },
            { title: "Pound Cake", href: `/menu/roll-cake` },
          ]}
        />
        <Stack
          sx={{
            width: 540,
            height: 960,
            margin: "auto",
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
            <Stack spacing={6}>
              <MenuItem
                title="Matcha Pound Cake"
                description="yes it's true"
                price={10}
              >
                <MatchaPoundCakeIcon />
              </MenuItem>
              <MenuItem
                title="Lemon Pound Cake"
                description="yes it's lemon"
                price={10}
              >
                <LemonPoundCakeIcon />
              </MenuItem>
              <MenuItem
                title="Red Velvet Pound Cake"
                description="yes it's red velvet"
                price={10}
              >
                <RedVelvetPoundCakeIcon />
              </MenuItem>
            </Stack>
          </Box>
        </Stack>
      </PageContainer>
    </main>
  </>
);

export default Menu;
