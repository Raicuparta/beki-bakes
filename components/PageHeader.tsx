/* eslint-disable @next/next/no-img-element */
import {
  Typography,
  Stack,
  Box,
  Container,
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
    <Link href="/" passHref>
      <Box
        component="a"
        sx={{
          all: 'unset',
          cursor: 'pointer',
          backgroundColor: 'background.paper',
          display: 'block',
        }}
      >
        <Container maxWidth="sm">
          <Stack
            direction={ isSmall ? 'row' : 'column' }
            sx={{
              pt: isSmall ? 1 : 3,
              pb: isSmall ? 0 : 1,
              alignItems: 'center',
            }}
          >
            {isSmall && (
              <ArrowLeftIcon />
            )}
            <img
              src="/snail-halfwhite.svg"
              alt="beki bakes"
              width={size}
              height={size}
            />
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
        </Container>
      </Box>
    </Link>
  );
};
