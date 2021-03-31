/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { Link } from "@reach/router";
import { jsx, css } from "@emotion/react";

const Header = () => {
  return (
    <div
      css={css`
        background: hotpink;
        height: 10rem;
        display: flex;
        align-items: center;
        padding: 0 0.5rem;

        & a {
          margin-right: 1rem;
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.4rem;

          &:hover {
            color: rgba(0, 0, 0, 0.1);
          }
        }
      `}
    >
      <Link to="/">main</Link>
      <Link to="/counter">counter</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/snapshot-testing">snapshot testing</Link>
    </div>
  );
};

export default Header;
