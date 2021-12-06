import { Card, CardContent, Stack, Button, Typography } from "@mui/material";
import React from "react";

import { Package } from "./products";
import { ScrollToOnMount } from "./ScrollToOnMount";
import { socialProfiles } from "./socialProfiles";

type Props = {
  selectedPackage: Package;
  fullName: string;
};

export const SelectedQuantityCard = (props: Props) => (
  <ScrollToOnMount
    component={Card}
    key={props.selectedPackage.quantity}
    sx={{ mb: 2, bgcolor: "background.light", color: "text.secondary" }}
  >
    <CardContent>
      <Typography>
        Please send your request of {props.selectedPackage.quantity}{" "}
        {props.fullName} (€{props.selectedPackage.price}) via one of these
        channels:
      </Typography>
      <Stack spacing={1} sx={{ mt: 1 }}>
        {socialProfiles.map((socialProfile) => (
          <Button
            key={socialProfile.url}
            variant="contained"
            startIcon={<socialProfile.icon />}
            href={socialProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialProfile.title}
          </Button>
        ))}
      </Stack>
    </CardContent>
  </ScrollToOnMount>
);
