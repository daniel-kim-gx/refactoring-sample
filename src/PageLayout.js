/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

const PageLayout = ({ children }) => {
  return (
    <div
      css={css`
        padding: 1rem;
        font-size: 1.2rem;
      `}
    >
      {children}
    </div>
  );
};

export default PageLayout;
