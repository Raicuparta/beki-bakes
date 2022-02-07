import Head from "next/head";
import React from "react";
import { PoundCakeIcon, SpecificIconProps } from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { MenuPageContainer } from "../../components/MenuPageContainer";

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
    </MenuPageContainer>
  </>
);

export default Menu;
