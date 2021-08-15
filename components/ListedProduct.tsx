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

import { Product } from "./Products";

type Props = {
  product: Product;
  selected?: boolean;
};

export const ListedProduct = ({ selected, product: {
  id,
  name,
  price,
  variants,
} }: Props) => {
  const motionId = selected ? 'NOTHING' : id;
  return (
    <MotionGrid
      key={id}
      item
      xs={12}
      sm={6}
      // layoutId={"card-" + motionId}
      sx={{ zIndex: selected ? 1 : 0 }}
    >
      <Card>
        <Link
          href={`/${id}`}
          passHref
          scroll={false}
        >
          <CardActionArea component="a">
            <Image
              title={name}
              alt={name}
              src={`/photos/${id}/${id}.jpg`}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
            />
            <CardContent sx={{ py: 1 }}>
              <Stack direction="row" justifyContent="space-between">
                <MotionTypography
                  variant="h6"
                  // layoutId={"name-" + motionId}
                >
                  {name}
                </MotionTypography>
                <MotionTypography
                  variant="h6"
                  // layoutId={"price-" + motionId}
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
