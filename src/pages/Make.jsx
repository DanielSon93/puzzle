import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid4 } from "uuid";
import WordInput from "../components/WordInput";

const StyledForm = styled.form`
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: var(--color-font);
`;

const StyledExplanation = styled.p`
  font-size: 1.1rem;
  white-space: normal;
  text-align: center;
`;

const StyledTitleWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const commonInputStyle = `
  width: 100%;
  border: 1px solid lightgray;
  text-indent: 7px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  background-color: rgba(246, 246,246, 1);
`;

const commonWrapperStyle = `
  width: 100%;
  margin-top: 20px;
`;

const StyledTitleInput = styled.input`
  ${commonInputStyle}
  height: 35px;
`;

const StyledDescriptionWrapper = styled.div`
  ${commonWrapperStyle}
`;

const StyledDescriptionTextArea = styled.textarea`
  ${commonInputStyle}
  height: 70px;
  padding-top: 4px;
`;

const StyledWordListWrapper = styled.div`
  ${commonWrapperStyle}
`;

const StyledWordGrid = styled.div`
  display: grid;
  margin-top: 5px;
  grid-template-columns: repeat(5, 1fr);
`;

const StyledWordExplanation = styled.p`
  white-space: normal;
`;

const StyledSubjectWrapper = styled.div`
  ${commonWrapperStyle}
`;

const StyledRadioLabel = styled.label`
  margin-right: 20px;
  cursor: pointer;
`;

const StyledRadioText = styled.span`
  color: rgba(159, 161, 157, 1);
  font-size: 1.2rem;
  margin-left: 6px;
`;

const StyledRadio = styled.input`
  margin-top: 30px;
  cursor: pointer;
  accent-color: green;
  &:checked + ${StyledRadioText} {
    color: rgba(0, 187, 136, 1);
  }
`;

const StyledSubmit = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 70px;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  border: none;
  background-color: rgba(255, 193, 7, 1);
`;

export default function Make() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {};

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledExplanation>
        Make your own word search game on any topic you like, simply by providing between 10 and 30 words. Once submitted, your puzzle will be instantly playable on-line as well as easily printed, so
        you can share it with friends. Instructions are available at the bottom of this page
      </StyledExplanation>
      <StyledTitleWrapper>
        <h3>Title</h3>
        <StyledTitleInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength="30" required />
      </StyledTitleWrapper>
      <StyledDescriptionWrapper>
        <h3>Description</h3>
        <StyledDescriptionTextArea cols="30" rows="1" value={description} onChange={(e) => setDescription(e.target.value)}></StyledDescriptionTextArea>
      </StyledDescriptionWrapper>
      <StyledWordListWrapper>
        <h3>Word List</h3>
        <StyledWordExplanation>Between 10 and 30 words. Puzzles are randomly generated using a selection of your words at play time.</StyledWordExplanation>
        <StyledWordGrid>
          {Array.from({ length: 30 }, () => (
            <WordInput key={uuid4()} type="text"></WordInput>
          ))}
        </StyledWordGrid>
      </StyledWordListWrapper>
      <StyledSubjectWrapper>
        <h3>Subject</h3>
        <StyledRadioLabel htmlFor="radio-1">
          <StyledRadio type="radio" id="radio-1" name="radio" value="person" checked={subject === "person"} onChange={(e) => setSubject(e.target.value)} required />
          <StyledRadioText>Myself, family, friends etc</StyledRadioText>
        </StyledRadioLabel>
        <StyledRadioLabel htmlFor="radio-2">
          <StyledRadio type="radio" id="radio-2" name="radio" value="non-person" checked={subject === "non-person"} onChange={(e) => setSubject(e.target.value)} required />
          <StyledRadioText>Non-Personal (recommended)</StyledRadioText>
        </StyledRadioLabel>
      </StyledSubjectWrapper>
      <StyledSubmit type="submit">Submit</StyledSubmit>
    </StyledForm>
  );
}
