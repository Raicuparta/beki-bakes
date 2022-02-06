import Head from "next/head";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { RollCakeIcon, CookieIcon } from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { SpecificIconProps } from "../menu";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { PageContainer } from "../../components/PageContainer";

const snailSize = 70;

export const MatchaRollIcon = ({ size }: SpecificIconProps) => (
  <RollCakeIcon
    outlineColor="#677d2b"
    cakeColor="#a5ad55"
    fillingColor="#a44b3c"
    size={size}
  />
);

export const ChocolateRollIcon = ({ size }: SpecificIconProps) => (
  <RollCakeIcon
    outlineColor="#251d17"
    cakeColor="#4c392b"
    fillingColor="#a58a71"
    size={size}
  />
);

export const VanillaRollIcon = ({ size }: SpecificIconProps) => (
  <RollCakeIcon
    outlineColor="#b8954a"
    cakeColor="#ebd691"
    fillingColor="#d09e6f"
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
            { title: "Roll Cake", href: `/menu/roll-cake` },
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
                title="Matcha Azuki Roll"
                description="Matcha chiffon cake with fresh whipped cream and azuki paste"
                price={20}
              >
                <MatchaRollIcon />
              </MenuItem>
              <MenuItem
                title="Chocolate Chestnut Roll"
                description="Chocolate chiffon cake with fresh whipped cream and chestnut paste"
                price={20}
              >
                <ChocolateRollIcon />
              </MenuItem>
              <MenuItem
                title="Vanilla Salted Caramel Roll"
                description="Vanilla chiffon cake with fresh whipped cream and salted caramel mousse"
                price={20}
              >
                <VanillaRollIcon />
              </MenuItem>
              <MenuItem
                title="Assorted Box"
                description='3 half-size rolls of each flavour and 4 "Hup Toh Soh" Walnut cookies'
                price={32}
              >
                <Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <MatchaRollIcon />
                    <ChocolateRollIcon />
                    <VanillaRollIcon />
                    <CookieIcon />
                  </Stack>
                </Stack>
              </MenuItem>
            </Stack>
          </Box>
        </Stack>
      </PageContainer>
    </main>
  </>
);

export default Menu;