import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { DownloadOutlined } from "@ant-design/icons";
import { docCreator } from "../helpers";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const BtnSavePdf = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    color: #e42845;
    transition: 0.3s;
  }
  &:focus {
    outline: none;
  }
  & > span {
    margin-left: 8px;
  }
`;


export const PdfGenerator = React.memo(() => {
  const { valueDeposit, timeDeposit, profit, rate, typeDeposit } = useSelector(
    (state) => state.reducerCalc
  );
  const jsPdfGenerator = () => {
    pdfMake
      .createPdf(
        docCreator(valueDeposit, timeDeposit, profit, rate, typeDeposit)
      )
      .download();
  };
  return (
    <BtnSavePdf onClick={jsPdfGenerator} disabled={!valueDeposit}>
      <DownloadOutlined />
      <span>Скачать в PDF</span>
    </BtnSavePdf>
  );
});
