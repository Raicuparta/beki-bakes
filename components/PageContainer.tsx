import React from "react";
import { MotionContainer } from "./Motion";

export const PageContainer: React.FC = ({ children }) => (
  <MotionContainer layoutId="pageContainer" maxWidth="sm" layout="position">
    {children}
  </MotionContainer>
);
