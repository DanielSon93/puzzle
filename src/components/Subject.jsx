import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PiTelevisionSimpleBold, PiTelevisionSimpleDuotone, PiForkKnifeFill } from "react-icons/pi";
import { FaRegSmile, FaRegQuestionCircle, FaPaw, FaHeadphones } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbMoodKid, TbBrandDisney } from "react-icons/tb";
import { MdScience } from "react-icons/md";
import { v4 as uuid4 } from "uuid";

const StyledSubject = styled.section`
  width: 100%;
  height: 310px;
  border: 1px solid var(--color-border);
  background-color: #fff;
`;

const StyledTitle = styled.h2`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const StyledTitleInfo = styled.div`
  color: var(--color-subject-title);
  margin-left: 7px;
`;

const StyledSubtitleWrapper = styled.ul`
  list-style-position: inside;
  margin: 5px 12px;
`;

const StyledSubTitle = styled.li`
  color: var(--color-font);
  padding: 7px 0;
  text-indent: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export default function Subject({ subject }) {
  const title = subject[0];
  const subTitle = Object.keys(subject[1]);
  const titleSubject = Object.entries(subject[1]).map((e) => e[1]);

  const navigate = useNavigate();

  const handleNavigate = (detail, detailTitle) => {
    console.log(detail, detailTitle);
    navigate(`/play/${detailTitle.replaceAll(" ", "-")}`, {
      state: {
        title: detailTitle,
        words: detail.words,
        description: detail.description,
        id: detail.id,
      },
    });
  };

  return (
    <StyledSubject>
      <StyledTitle>
        {title.split(" ")[0] === "Television" ? (
          <PiTelevisionSimpleBold />
        ) : title.split(" ")[0] === "Sitcoms" ? (
          <FaRegSmile />
        ) : title.split(" ")[0] === "Teen" ? (
          <PiTelevisionSimpleDuotone />
        ) : title.split(" ")[0] === "Celebrities" ? (
          <IoPerson />
        ) : title.split(" ")[0] === "Animals" ? (
          <FaPaw />
        ) : title.split(" ")[0] === "Movies" ? (
          <BiSolidCameraMovie />
        ) : title.split(" ")[0] === "General" ? (
          <FaRegQuestionCircle />
        ) : title.split(" ")[0] === "Kids" ? (
          <TbMoodKid />
        ) : title.split(" ")[0] === "Disney" ? (
          <TbBrandDisney />
        ) : title.split(" ")[0] === "Food" ? (
          <PiForkKnifeFill />
        ) : title.split(" ")[0] === "Science" ? (
          <MdScience />
        ) : (
          <FaHeadphones />
        )}
        <StyledTitleInfo>{title}</StyledTitleInfo>
      </StyledTitle>
      <StyledSubtitleWrapper>
        {titleSubject &&
          titleSubject.map((item, idx) => (
            <StyledSubTitle key={uuid4()} onClick={() => handleNavigate(item, subTitle[idx])}>
              {subTitle[idx]}
            </StyledSubTitle>
          ))}
      </StyledSubtitleWrapper>
    </StyledSubject>
  );
}
