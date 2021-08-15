/* eslint-disable @next/next/no-img-element */
import {
  Typography,
  Stack,
  Box,
  Container,
} from '@material-ui/core'
import { ArrowBackIos as ArrowLeftIcon } from '@material-ui/icons';
import Link from 'next/link'
import React from 'react'

type Props = {
  isSmall?: boolean;
  href: string;
};

export const PageHeader = ({ isSmall = false, href }: Props) => {
  const size = isSmall ? 40 : 75;
  return (
    <Link href={href} passHref>
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
              pt: isSmall ? 1 : 2,
              pb: 1,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            >
            {isSmall && (
              <ArrowLeftIcon
                fontSize="small" 
                sx={{ position: 'absolute', left: 0 }}
              />
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
