import React from "react";
import styled, { keyframes } from "styled-components";

const error = keyframes`
  0% {
    opacity: 1;
    width: 100vw;
    height: 100vh;
  }
  25% {
    opacity: 0.8;
    width: 90vw;
    height: 90vh;
  }
  50% {
    opacity: 1;
    width: 100vw;
    height: 100vh;
  }
  75% {
    opacity: 0.8;
    width: 90vw;
    height: 90vh;
  }
  100% {
    opacity: 1;
    width: 100vw;
    height: 100vh;
  }
`;

const ErrorMessage = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-nav);
  font-size: 2rem;
  color: #fff;
  animation: ${error} 3s linear infinite;
`;

export default function Error() {
  return <ErrorMessage>정상적이지 않은 접근방식 입니다</ErrorMessage>;
}
