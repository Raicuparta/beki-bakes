import Head from "next/head";
import React from "react";
import {
  MatchaPyramidIcon,
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
    <MenuPageContainer footer="I'm so alone">
      <MenuItem
        title="Matcha tart"
        description="It's a tart and it's made of matcha."
        price={20}
      >
        <MatchaTartIcon />
      </MenuItem>
      <MenuItem
        title="Fuji Tart"
        description="It's a tart and it's made of Fuji."
        price={20}
      >
        <MatchaPyramidIcon />
      </MenuItem>
    </MenuPageContainer>
  </>
);

export default Menu;
