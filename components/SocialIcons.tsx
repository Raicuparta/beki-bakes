import { Stack, IconButton } from "@mui/material";
import React from "react";
import { socialProfiles } from "./socialProfiles";

type Props = {
  horizontal?: boolean;
};

export const SocialIcons = ({ horizontal = false }: Props) => (
  <Stack
    direction={horizontal ? "row" : "column"}
    sx={{
      justifyContent: "center",
      height: "100%",
      position: horizontal ? undefined : "absolute",
      right: (theme) => theme.spacing(2),
      top: 0,
    }}
  >
    {socialProfiles.map((socialProfile) => (
      <IconButton
        key={socialProfile.url}
        component="a"
        href={socialProfile.url}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        size={horizontal ? "medium" : "small"}
      >
        <socialProfile.icon fontSize={horizontal ? "large" : "medium"} />
      </IconButton>
    ))}
  </Stack>
);
