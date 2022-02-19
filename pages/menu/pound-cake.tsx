import Head from "next/head";
import React from "react";
import {
  LemonPoundCakeIcon,
  MatchaPoundCakeIcon,
  RedVelvetPoundCakeIcon,
  SesamePoundCakeIcon,
} from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { MenuPageContainer } from "../../components/MenuPageContainer";

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <MenuPageContainer>
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
      <MenuItem
        title="Red Velvet Pound Cake"
        description="yes it's red velvet"
        price={10}
      >
        <SesamePoundCakeIcon />
      </MenuItem>
    </MenuPageContainer>
  </>
);

export default Menu;
