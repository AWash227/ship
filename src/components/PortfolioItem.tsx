import React from "react";
import styled from "styled-components";
import moment from "moment";

interface Props {
  name: string;
  description: string;
  image: string;
  url: string;
  date: string;
  update: string;
  language: string;
}

interface languageProps {
  language: string;
}

const PortfolioWrapper = styled.div`
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
  display: inline-block;
  position: relative;
  width: 12rem;
  height: 12rem;
  padding: 2rem;
  margin: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: all 0.15s ease-in-out;
  &:hover {
    transform: scale(1.015);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 1px 15px rgba(0, 0, 0, 0.15);
  }
`;

const PortfolioAvatar = styled.img`
  border-radius: 999px;
  width: 2rem;
  height: 2rem;
`;

const PortfolioA = styled.a`
  color: #000;
  text-transform: capitalize;
  text-decoration: none;
  h3 {
    margin: 0;
    padding-bottom: 0.75rem;
  }
`;

const PortfolioDate = styled.div`
  font-size: 0.75rem;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

const PortfolioLanguage = styled.div<languageProps>`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  vertical-align: middle;
  &::before{
  vertical-align: middle;
    content: "";
  display: inline-block;
  background-color: ${props =>
    props.language === "JavaScript"
      ? "#f1e05a"
      : props.language === "Ruby"
      ? "#701516"
      : props.language === "TypeScript"
      ? "#2b7489"
      : props.language === "CSS"
      ? "#563d7c"
      : props.language === "Python"
      ? "#3572A5"
      : props.language === "C++"
      ? "#f34b7d"
      : "#aeaeae"};
  width: 0.85rem;
  height: 0.85rem;
  padding: 0;
  border-radius: 999px;
  }
  &::after {
  vertical-align: middle;
    content: "${props => (props.language ? props.language : "Any")}";
    padding-left: 0.5rem;
  }
`;

const PortfolioDescription = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const PortfolioItem = ({
  name,
  description,
  image,
  url,
  date,
  language
}: Props) => (
  <PortfolioWrapper>
    <PortfolioLanguage language={language} />
    <PortfolioA href={url}>
      <h3>{name}</h3>
    </PortfolioA>
    <PortfolioDescription>{description}</PortfolioDescription>
    <PortfolioDate>Created: {moment(date, "YYYYMMDD").fromNow()}</PortfolioDate>
  </PortfolioWrapper>
);
