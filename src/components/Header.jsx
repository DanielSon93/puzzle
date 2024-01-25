import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiPencil } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { RxSwitch } from "react-icons/rx";

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  max-width: 90%;
  border-bottom: 4px solid var(--color-brand);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  width: 520px;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledNavInfo = styled.span`
  font-size: 1.2rem;
`;

const commonIconStyles = `
  font-size: 2rem;
  color: var(--color-nav);
  margin-right: 0.2rem;
`;

const StyledTiPencil = styled(TiPencil)`
  ${commonIconStyles}
`;

const StyledAiFillHome = styled(AiFillHome)`
  ${commonIconStyles}
`;

const StyledFaSearch = styled(FaSearch)`
  ${commonIconStyles}
`;

const StyledDarkModeBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  gap: 3px;
  background-color: var(--color-brand);
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  padding: 1px 5px;
`;

const StyledRxSwitch = styled(RxSwitch)`
  font-size: 15px;
`;

const StyledDarkModeInfo = styled.span`
  font-size: 11px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src="/assets/logo.png" alt="logo" />
      </Link>
      <StyledNav>
        <StyledNavLink to="/make">
          <StyledTiPencil />
          <StyledNavInfo>Word Search Maker</StyledNavInfo>
        </StyledNavLink>
        <StyledNavLink>
          <StyledAiFillHome />
          <StyledNavInfo>More Puzzles</StyledNavInfo>
        </StyledNavLink>
        <StyledNavLink>
          <StyledFaSearch />
          <StyledNavInfo>Search</StyledNavInfo>
        </StyledNavLink>
      </StyledNav>
      <StyledDarkModeBtn type="button">
        <StyledRxSwitch />
        <StyledDarkModeInfo>Switch Theme</StyledDarkModeInfo>
      </StyledDarkModeBtn>
    </StyledHeader>
  );
}
