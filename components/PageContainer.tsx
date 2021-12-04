import { Container } from "@mui/material";
import React from "react";

export const PageContainer: React.FC = ({ children }) => (
  <Container maxWidth="sm">{children}</Container>
);
