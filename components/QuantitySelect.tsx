import { Stack, Box } from "@mui/material";
import React, { useState } from "react";

import { Package } from "./products";
import { QuantityButton } from "./QuantityButton";
import { SelectedQuantityCard } from "./SelectedQuantityCard";

type Props = {
  packages: Package[];
  fullName: string;
};

export const QuantitySelect = (props: Props) => {
  const [quantity, setQuantity] = useState(0);

  const selectedPackage = props.packages.find(
    (pkg) => pkg.quantity === quantity
  );

  return (
    <>
      <Box sx={{ display: "flex", my: 2 }}>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          {props.packages.map((pkg) => (
            <QuantityButton
              key={pkg.quantity}
              package={pkg}
              isSelected={quantity === pkg.quantity}
              onClick={() => setQuantity(pkg.quantity)}
            />
          ))}
        </Stack>
      </Box>
      {selectedPackage && (
        <SelectedQuantityCard
          selectedPackage={selectedPackage}
          fullName={props.fullName}
        />
      )}
    </>
  );
};
