import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  margin: 25px 0;

  @media (max-width: 768px) {
    overflow-x: scroll;
    font-size: 14px;
  }
`;
export const TableHeader = styled.div`
  background-color: #ccc;
  padding: 25px 15px;
  display: inline-flex;
  width: 100%;

  @media (max-width: 768px) {
    width: 600px;
    padding: 15px 5px;
  }
`;

export const TitleTable = styled.label`
  display: inline-flex;
  flex: 1;
  justify-content: center;
`;
