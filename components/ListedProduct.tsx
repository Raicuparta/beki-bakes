import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Grid,
  Box,
} from '@material-ui/core';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import {
  MotionCardMedia,
  MotionTypography,
  MotionGrid,
} from './Motion';

import { Product } from "./products";

type Props = {
  href: string;
  name: string;
  image: string;
  price: number;
};

export const ListedProduct = ({
  href,
  name,
  image,
  price,
}: Props) => {
  return (
    <MotionGrid
      key={href}
      item
      xs={12}
      sm={6}
    >
      <Card>
        <Link
          href={href}
          passHref
        >
          <CardActionArea component="a">
            <Image
              title={name}
              alt={name}
              src={image}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
            />
            <CardContent sx={{ py: 1 }}>
              <Stack direction="row" justifyContent="space-between">
                <MotionTypography
                  variant="h6"
                >
                  {name}
                </MotionTypography>
                <MotionTypography
                  variant="h6"
                >
                  €{price}
                </MotionTypography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </MotionGrid>
  );
};
