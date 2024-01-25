import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { FaHandPointer } from "react-icons/fa";
import { MdHexagon } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { v4 as uuid4 } from "uuid";

const StyledPuzzleWrapper = styled.div`
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-top: 40px;
`;

const StyledTitle = styled.h1`
  color: var(--color-font);
`;

const StyledPuzzle = styled.div`
  position: relative;
  margin-top: 10px;
`;

const StyledWordRow = styled.div`
  display: flex;
`;

const StyledWordCol = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  border: 1px solid lightgray;
`;

const StyledReadyToPlay = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(13, 134, 134, 0.9);
  border-radius: 1.5rem;
  padding: 3rem;
`;

const StyledReadyTitle = styled.h2`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

const StyledBeginBtnIcon = styled(FaHandPointer)`
  font-size: 2.5rem;
  transform: rotate(-25deg);
`;

const StyledBeginBtnText = styled.span`
  font-size: 1.6rem;
`;

const StyledBeginBtn = styled.button`
  color: #fff;
  font-size: 1.4rem;
  width: 240px;
  height: 110px;
  background-color: rgba(255, 235, 59, 1);
  border-radius: 6px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  gap: 1rem;
  &:hover {
    background-color: rgba(255, 235, 59, 0.8);
    ${StyledBeginBtnText} {
      text-decoration: underline;
    }
  }
`;

const commonButtonStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(34, 34,34, 1);
  width: 186px;
  margin-top: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 1rem;
  border-radius: 6px;
  &:hover {
    background-color: #fff;
    color: #000;
    outline: 1px solid #000;
  }
`;

const StyledShape = styled.button`
  ${commonButtonStyle}
`;

const StyledSetting = styled.button`
  ${commonButtonStyle}
`;

const StyledHexagon = styled(MdHexagon)`
  font-size: 2rem;
`;

const StyledIoSettingsSharp = styled(IoSettingsSharp)`
  font-size: 1.4rem;
`;

const commonButtonText = `
  font-size: 11px;
  margin-left: 10px;
`;

const StyledShapeText = styled.span`
  ${commonButtonText}
`;

const StyledSettingText = styled.span`
  ${commonButtonText}
`;

export default function Play() {
  const { state } = useLocation();
  const title = state.title;
  const [isBegin, setIsBegin] = useState(false);

  return (
    <StyledPuzzleWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledPuzzle>
        {Array.from({ length: 14 }, () => {
          return (
            <StyledWordRow key={uuid4()}>
              {Array.from({ length: 12 }, () => {
                return <StyledWordCol key={uuid4()}>A</StyledWordCol>;
              })}
            </StyledWordRow>
          );
        })}
        {!isBegin && (
          <StyledReadyToPlay>
            <StyledReadyTitle>READY TO PLAY</StyledReadyTitle>
            <StyledBeginBtn type="button" onClick={() => setIsBegin(true)}>
              <StyledBeginBtnIcon />
              <StyledBeginBtnText>begin</StyledBeginBtnText>
            </StyledBeginBtn>
            <StyledShape type="button">
              <StyledHexagon />
              <StyledShapeText>Change grid shape</StyledShapeText>
            </StyledShape>
            <StyledSetting type="button">
              <StyledIoSettingsSharp />
              <StyledSettingText>Settings / Difficulty</StyledSettingText>
            </StyledSetting>
          </StyledReadyToPlay>
        )}
      </StyledPuzzle>
    </StyledPuzzleWrapper>
  );
}
