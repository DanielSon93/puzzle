import React from "react";
import styled from "styled-components";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const StyledWraning = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.5rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: var(--color-warning);
`;

const StyledArrow = styled(MdOutlineSubdirectoryArrowRight)`
  color: rgba(252, 193, 7, 1);
  margin-right: 5px;
`;
export default function Warning({ text }) {
  return (
    <StyledWraning>
      <StyledArrow />
      {text}
    </StyledWraning>
  );
}
