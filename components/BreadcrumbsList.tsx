import React from "react";
import NextLink from "next/link";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export type BreadcrumbItem = {
  title: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const BreadcrumbItem = (props: BreadcrumbItem) =>
  props.href ? (
    <Link
      component={NextLink}
      underline="hover"
      href={props.href}
      sx={{ color: "inherit" }}
    >
      {props.title}
    </Link>
  ) : (
    <Typography color="background.paper">{props.title}</Typography>
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
