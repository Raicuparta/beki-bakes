import Head from "next/head";
import React from "react";
import { TartIcon } from "../../components/icons";
import { MenuItem } from "../../components/MenuItem";
import { SpecificIconProps } from "../menu";
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
      <MenuItem title="Tart" description="Tart tart" price={20}>
        <TartIcon />
      </MenuItem>
    </MenuPageContainer>
  </>
);

export default Menu;
