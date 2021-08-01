/* eslint-disable @next/next/no-img-element */
import {
  Typography,
  Stack,
  Box,
} from '@material-ui/core'
import { ArrowLeft as ArrowLeftIcon } from '@material-ui/icons';
import Link from 'next/link'
import React from 'react'

type Props = {
  isSmall?: boolean;
};

export const PageHeader = ({ isSmall = false }: Props) => {
  const size = isSmall ? 40 : 75;
  return (
    <Stack
      direction={ isSmall ? 'row' : 'column' }
      sx={{
        pt: isSmall ? 1 : 3,
        pb: isSmall ? 0 : 1,
        backgroundColor: 'background.paper',
        alignItems: 'center',
      }}
    >
      {isSmall && (
        <ArrowLeftIcon />
      )}
      <Link href="/">
        <a>
          <img
            src="/snail-halfwhite.svg"
            alt="beki bakes"
            width={size}
            height={size}
          />
        </a>
      </Link>
      <Typography
        component="h1"
        align="center"
        sx={{
          fontWeight: 'bold',
          fontSize: isSmall ? 25 : 30,
          ml: isSmall ? 1 : 0,
        }}
      >
        bekibakes
      </Typography>
    </Stack>
  );
};
