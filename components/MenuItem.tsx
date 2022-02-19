import { Stack, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
  title: string;
  price?: string;
  description?: string;
};

export const MenuItem = (props: Props) => (
  <Stack sx={{ alignItems: "center" }}>
    {props.children}
    <Stack sx={{ alignItems: "center" }}>
      <Typography variant="h5" align="center">
        {props.title}
      </Typography>
      {props.description && (
        <Typography fontSize={15} align="center">
          {props.description}
        </Typography>
      )}
      {props.price && (
        <Typography fontSize={30} lineHeight={1}>
          €{props.price}
        </Typography>
      )}
    </Stack>
  </Stack>
);
