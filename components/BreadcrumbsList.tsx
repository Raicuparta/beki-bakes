import React from "react";
import NextLink from "next/link";
import { Breadcrumbs, Button, Link, Typography } from "@mui/material";

export type BreadcrumbItem = {
  title: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const BreadcrumbItem = (props: BreadcrumbItem) => (
  <NextLink passHref href={props.href || ""}>
    <Button size="small" variant="contained" disabled={!Boolean(props.href)}>
      {props.title}
    </Button>
  </NextLink>
);

export const BreadcrumbsList = (props: Props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      {props.items.map((item) => (
        <BreadcrumbItem key={item.title} {...item} />
      ))}
    </Breadcrumbs>
  );
};
