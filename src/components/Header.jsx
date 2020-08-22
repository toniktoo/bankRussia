import React from "react";
import styled from "styled-components";

import { PdfGenerator } from "./PdfGenerator";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 30px;
  height: 60px;
`;
const TitleWrap = styled.div`
  color: rgb(7, 61, 89);
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 30px;
  & > span:not(:last-child) {
    margin-right: 8px;
  }
`;
const SubTitle = styled.h3`
  margin: 0;
  color: rgb(7, 61, 89);
`;
const Sidebar = styled.div``;

export const Header = () => {
  return (
    <Wrapper>
      <TitleWrap>
        <Title>
          <span>БАНК</span>
          <span style={{ color: "#e42845" }}>РОССИЯ</span>
        </Title>
        <SubTitle>Банк умных решений</SubTitle>
      </TitleWrap>
      <Sidebar>
        <PdfGenerator />
      </Sidebar>
    </Wrapper>
  );
};
