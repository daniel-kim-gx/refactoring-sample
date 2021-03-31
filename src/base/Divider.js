/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

function Divider() {
  return (
    <hr
      css={css`
        background: rgba(0, 0, 0, 0.1);
        height: 3px;
      `}
    />
  );
}

export default Divider;
