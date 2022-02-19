import Head from "next/head";
import React from "react";
import { Stack, Typography } from "@mui/material";

import { PageContainer } from "../components/PageContainer";
import { MenuButton } from "../components/MenuButton";
import { MatchaPoundCakeIcon, MatchaRollIcon } from "../components/icons";
import { MatchaTartIcon } from "./menu/tart";

const Home = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <main>
      <PageContainer>
        <Stack spacing={2} sx={{ maxWidth: 350, margin: "auto" }}>
          <MenuButton href="/menu/roll-cake" name="Roll cake">
            <MatchaRollIcon size={80} />
          </MenuButton>
          <MenuButton href="/menu/pound-cake" name="Pound cake">
            <MatchaPoundCakeIcon size={80} />
          </MenuButton>
          <MenuButton href="/menu/tart" name="Tarts">
            <MatchaTartIcon size={80} />
          </MenuButton>
        </Stack>
      </PageContainer>
    </main>
  </>
);

export default Home;
