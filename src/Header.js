/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "@reach/router";
import { jsx, css } from "@emotion/react";

const Header = () => {
  const account = useSelector((state) => state.account);

  return (
    <header>
      {account ? (
        <div>Your account address : {account.address}</div>
      ) : (
        <div>Please login!</div>
      )}
      <div
        css={css`
          background: hotpink;
          padding: 0 0.5rem;

          & a {
            margin-right: 1rem;
            color: white;
            text-decoration: underline;
            font-weight: bold;

            &:hover:before {
              content: "👉";
            }
          }

          display: flex;
          align-items: center;
          flex-direction: column;
        `}
      >
        <Link to="/">main</Link>
        <Link to="/counter">counter</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/snapshot-testing">snapshot testing</Link>
        <Link to="/component-structure">component structure</Link>
        <Link to="/redux">redux</Link>
      </div>
    </header>
  );
};

export default Header;
