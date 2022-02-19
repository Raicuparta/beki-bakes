import { Typography } from "@mui/material";
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
    <MenuPageContainer
      title="pound cake"
      footer={
        <>
          <Typography>Pound Cube: 5 x 5 x 5 cm</Typography>
          <Typography> Loaf Cake: 20 x 10 x 8 cm</Typography>
        </>
      }
    >
      <MenuItem
        title="Matcha Cube Pound Cake"
        description="6 pieces of Matcha pound cakes topped with matcha white chocolate ganache"
        price="15"
      >
        <MatchaPoundCakeIcon />
      </MenuItem>
      <MenuItem
        title="Lemon Cube Pound Cake"
        description="6 pieces of Lemon pound cakes topped with toasted Italian meringue "
        price="15"
      >
        <LemonPoundCakeIcon />
      </MenuItem>
      <MenuItem
        title="Red Velvet Cube Pound Cake"
        description="6 pieces of Red Velvet pound cakes topped with whipped cream cheese frosting"
        price="15"
      >
        <RedVelvetPoundCakeIcon />
      </MenuItem>
      <MenuItem
        title="Miso Caramel Black Sesame Loaf"
        description="Black Sesame flavoured pound cake with Miso flavour caramel cream topping
        "
        price="15"
      >
        <SesamePoundCakeIcon />
      </MenuItem>
    </MenuPageContainer>
  </>
);

export default Menu;
