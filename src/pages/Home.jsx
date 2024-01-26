import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Subject from "../components/Subject";
import axios from "axios";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90%;
  margin-top: 20px;
`;

const StyledExplanation = styled.div`
  width: 100%;
  display: flex;
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-brand);
  padding: 5px;
`;

const StyledImgInfo = styled.span`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const StyledAbout = styled.div`
  flex: 1 1 auto;
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  color: var(--color-font);
  background-color: #fff;
`;

const StyledAboutTitle = styled.h1`
  margin-top: 30px;
`;

const StyledStrong = styled.strong`
  display: block;
  margin-top: 15px;
  white-space: normal;
`;

const StyledAboutText = styled.p`
  margin-top: 12px;
  white-space: normal;
`;

const StyledMakeLink = styled(Link)`
  text-decoration: underline;
  color: var(--color-link);
`;

const StyledExistWordSearch = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

export default function Home() {
  const [subjects, setSubjects] = useState({});

  useEffect(() => {
    axios
      .get("/data/subject.json")
      .then((res) => setSubjects(res.data.subjects))
      .catch((error) => console.error("Home Error : ", error));
  }, []);

  return (
    <StyledMain>
      <StyledExplanation>
        <StyledImgWrapper>
          <img src="https://thewordsearch.com/v4/img/word-search-puzzle.png" alt="" />
          <StyledImgInfo>Thousands ready to play online</StyledImgInfo>
        </StyledImgWrapper>
        <StyledAbout>
          <StyledAboutTitle>Word Search</StyledAboutTitle>
          <StyledStrong>
            We have the best collection of word search puzzles online, with new ones being added
            regularly.
          </StyledStrong>
          <StyledAboutText>
            They are fun to play, but also educational, in fact, many teachers make use of them.
          </StyledAboutText>
          <StyledAboutText>
            Puzzles are 100% free to play and work on desktop pc, mac, mobile and tablet. Or you can
            go old school and print them to enjoy offline later.
          </StyledAboutText>
          <StyledAboutText>
            Plus, if you're feeling a little more adventurous, why not create your very own with our
            simple to use <StyledMakeLink to="/make">Word Search Maker</StyledMakeLink>, and then
            share them with your friends.
          </StyledAboutText>
          <StyledAboutText>
            To get started playing, just select a game from below. Best of luck.
          </StyledAboutText>
        </StyledAbout>
      </StyledExplanation>
      <StyledExistWordSearch>
        {subjects &&
          Object.entries(subjects).map((subject, idx) => <Subject key={idx} subject={subject} />)}
      </StyledExistWordSearch>
    </StyledMain>
  );
}
