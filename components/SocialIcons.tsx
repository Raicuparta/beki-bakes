import { Stack, IconButton } from "@mui/material";
import React from "react";
import { socialProfiles } from "./socialProfiles";

export const SocialIcons = () => (
  <Stack
    direction="column"
    sx={{
      justifyContent: "center",
      height: "100%",
      position: "absolute",
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
        size="small"
      >
        <socialProfile.icon />
      </IconButton>
    ))}
  </Stack>
);
