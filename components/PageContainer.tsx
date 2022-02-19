import { Container } from "@mui/material";
import React from "react";

export const PageContainer: React.FC = ({ children }) => (
  <Container maxWidth="sm" sx={{ pb: 2 }}>
    {children}
  </Container>
);
