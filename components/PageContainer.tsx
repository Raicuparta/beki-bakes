import { Container } from "@material-ui/core";
import React from "react";

export const PageContainer: React.FC = ({ children }) => (
  <Container maxWidth="sm">{children}</Container>
);
