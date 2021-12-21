import Head from "next/head";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { RollCakeIcon, CookieIcon, PoundCakeIcon } from "../components/icons";
import { MenuItem } from "../components/MenuItem";
import Link from "next/link";

const snailSize = 70;

const MatchaRollIcon = () => (
  <RollCakeIcon
    outlineColor="#677d2b"
    cakeColor="#a5ad55"
    fillingColor="#a44b3c"
  />
);

const ChocolateRollIcon = () => (
  <RollCakeIcon
    outlineColor="#251d17"
    cakeColor="#4c392b"
    fillingColor="#a58a71"
  />
);

const VanillaRollIcon = () => (
  <RollCakeIcon
    outlineColor="#b8954a"
    cakeColor="#ebd691"
    fillingColor="#d09e6f"
  />
);

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <main>
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
            <Link href="/menu/roll-cake">
              <a>
                <MenuItem title="Roll Cake">
                  <MatchaRollIcon />
                </MenuItem>
              </a>
            </Link>
            <Link href="/menu/pound-cake">
              <a>
                <MenuItem title="Pound Cake">
                  <PoundCakeIcon
                    cakeColor="#8ead61"
                    cakeOutlineColor="#657e42"
                    glazeColor="#657e42"
                    glazeOutlineColor="#506534"
                    decorationColor="#fcebae"
                    decorationOutlineColor="#e5cf81"
                  />
                </MenuItem>
              </a>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </main>
  </>
);

export default Menu;
