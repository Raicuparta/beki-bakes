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
              placeholder="blur"
              blurDataURL="/photos/placeholder.png"
              sizes="400px"
            />
            <CardContent sx={{ py: 1 }}>
              <MotionTypography
                variant="h6"
                textAlign="center"
              >
                {name}
              </MotionTypography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </MotionGrid>
  );
};
