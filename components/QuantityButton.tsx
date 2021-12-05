import { Stack, Box, Button } from "@mui/material";
import React from "react";

import { Package } from "./products";

type Props = {
  package: Package;
  isSelected: boolean;
  onClick: () => void;
};

export const QuantityButton = (props: Props) => {
  return (
    <Button
      key={props.package.quantity}
      variant="contained"
      fullWidth
      sx={{
        fontFamily: "serif",
        fontSize: "1em",
        lineHeight: "1em",
        textTransform: "none",
      }}
      disabled={props.isSelected}
      onClick={props.onClick}
    >
      <Stack spacing={1}>
        <Box fontWeight="bold">{props.package.quantity} pcs</Box>
        <Box>€{props.package.price}</Box>
      </Stack>
    </Button>
  );
};
