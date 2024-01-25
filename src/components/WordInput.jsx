import React, { useState } from "react";
import styled from "styled-components";

const StyledWordInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  text-indent: 7px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  background-color: rgba(246, 246, 246, 1);
  margin: 0;
  height: 35px;
`;

export default function WordInput() {
  const [word, setWord] = useState("");

  return <StyledWordInput value={word} onChange={(e) => setWord(e.target.value)} minLength="3" maxLength="12"></StyledWordInput>;
}
