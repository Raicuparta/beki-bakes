import Head from "next/head";
import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { RollCakeIcon, CookieIcon, TartIcon } from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { SpecificIconProps } from "../menu";
import { BreadcrumbsList } from "../../components/BreadcrumbsList";
import { PageContainer } from "../../components/PageContainer";

const snailSize = 70;

export const MatchaTartIcon = ({ size }: SpecificIconProps) => (
  <TartIcon size={size} />
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
              <MenuItem title="Tart" description="Tart tart" price={20}>
                <TartIcon />
              </MenuItem>
            </Stack>
          </Box>
        </Stack>
      </PageContainer>
    </main>
  </>
);

export default Menu;
