import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  name: string;
  children: React.ReactNode;
};

export const MenuButton = ({ href, name, children }: Props) => {
  return (
    <Card>
      <Link href={href} passHref>
        <CardActionArea component="a">
          <Stack direction="row">
            <Box
              sx={{
                bgcolor: "white",
                p: 1.5,
                lineHeight: "normal",
              }}
            >
              {children}
            </Box>
            <Box
              sx={{
                py: 1,
                alignItems: "center",
                display: "flex",
                padding: 3,
              }}
            >
              <Typography fontSize={30} textAlign="center">
                {name}
              </Typography>
            </Box>
          </Stack>
        </CardActionArea>
      </Link>
    </Card>
  );
};
