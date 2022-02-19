import Head from "next/head";
import React from "react";
import {
  MatchaPyramidIcon,
  RubyPyramidIcon,
  SpecificIconProps,
  TartIcon,
} from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { MenuPageContainer } from "../../components/MenuPageContainer";

const snailSize = 70;

export const MatchaTartIcon = ({ size }: SpecificIconProps) => (
  <TartIcon size={size} />
);

const Menu = () => (
  <>
    <Head>
      <title>bekibakes</title>
    </Head>
    <MenuPageContainer>
      <MenuItem
        title="Matcha tart"
        description="It's a tart and it's made of matcha."
        price={20}
      >
        <MatchaTartIcon />
      </MenuItem>
      <MenuItem
        title="Matcha Fuji Tart"
        description="It's a mountain and it's made of matcha."
        price={20}
      >
        <MatchaPyramidIcon />
      </MenuItem>
      <MenuItem
        title="Ruby Fuji Tart"
        description="It's a mountain and it's made of ruby ruby ruby ruby."
        price={20}
      >
        <RubyPyramidIcon />
      </MenuItem>
    </MenuPageContainer>
  </>
);

export default Menu;
