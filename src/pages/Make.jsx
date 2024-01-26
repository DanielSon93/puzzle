import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WordInput from "../components/WordInput";
import Warning from "../components/Warning";
import axios from "axios";
import { addNewPuzzle } from "../api/firebase";

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

const SelectBox = styled.div`
  margin-top: 5px;
  width: 300px;
  background-color: rgba(246, 246, 246, 1);
  border: 1px solid lightgray;
  cursor: pointer;
`;

const Label = styled.label`
  position: relative;
  display: block;
  font-size: 15px;
  cursor: pointer;
  padding: 8px;
  border-bottom: ${(props) => (props.$show ? "1px solid lightgray" : "none")};
  &::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;
    top: 50%;
    right: 8px;
    transform: translateY(-50%) rotate(45deg);
    color: #49c181;
  }
`;

const SelectOptions = styled.ul`
  list-style: none;
  width: 100%;
  overflow-y: scroll;
  max-height: ${(props) => (props.$show ? "200px" : "0")};
  padding: 0;
  background-color: rgba(246, 246, 246, 1);
  color: var(--color-font);
`;

const Option = styled.li`
  font-size: 14px;
  padding: 8px;
  &:hover {
    background-color: #e6e4e4;
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
  const [subjectTitle, setSubjectTitle] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isShowOptions, setShowOptions] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Select Subject");
  const [wordList, setWordList] = useState([]);
  const [isWordListValid, setIsWordListValid] = useState(true);

  const handleWordList = (word, idx) => {
    const newWordList = [...wordList];
    newWordList.push(word);
    setWordList(newWordList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validWordCnt = wordList.filter((word) => word.length > 2).length;
    if (validWordCnt < 10 && validWordCnt > 0) {
      setIsWordListValid(false);
    } else {
      setIsWordListValid(true);
    }

    // Firebase에 생성한 puzzle 데이터 추가
    addNewPuzzle(title, description, wordList, selectedSubject);
  };

  useEffect(() => {
    axios
      .get("/data/subject.json")
      .then((res) => setSubjectTitle(res.data.subjects))
      .catch((error) => console.log("Make Error : ", error));
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledExplanation>
        Make your own word search game on any topic you like, simply by providing between 10 and 30
        words. Once submitted, your puzzle will be instantly playable on-line as well as easily
        printed, so you can share it with friends. Instructions are available at the bottom of this
        page
      </StyledExplanation>
      <StyledTitleWrapper>
        <h3>Title</h3>
        <StyledTitleInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="30"
          required
        />
      </StyledTitleWrapper>
      <StyledDescriptionWrapper>
        <h3>Description</h3>
        <StyledDescriptionTextArea
          cols="30"
          rows="1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></StyledDescriptionTextArea>
      </StyledDescriptionWrapper>
      <StyledWordListWrapper>
        <h3>Word List</h3>
        <StyledWordExplanation>
          Between 10 and 30 words. Puzzles are randomly generated using a selection of your words at
          play time.
        </StyledWordExplanation>
        <StyledWordGrid>
          {Array.from({ length: 30 }, (_, idx) => (
            <WordInput key={idx} type="text" handleWordList={handleWordList} idx={idx}></WordInput>
          ))}
        </StyledWordGrid>
        {!isWordListValid && <Warning text="At least 10 words are required"></Warning>}
      </StyledWordListWrapper>
      <StyledSubjectWrapper>
        <h3>Subject</h3>
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
          <Label $show={isShowOptions}>{selectedSubject}</Label>
          <SelectOptions $show={isShowOptions}>
            {subjectTitle &&
              Object.keys(subjectTitle).map((title, idx) => {
                return (
                  <Option key={idx} onClick={(e) => setSelectedSubject(e.target.innerText)}>
                    {title}
                  </Option>
                );
              })}
          </SelectOptions>
        </SelectBox>
      </StyledSubjectWrapper>
      <StyledSubmit type="submit">Submit</StyledSubmit>
    </StyledForm>
  );
}
