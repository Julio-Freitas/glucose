import styled, { keyframes, css } from "styled-components";

type PropsControlModal = {
  statusModal: boolean;
};
const fadeIn = keyframes`
  from {
    top: calc(-310px);
    opacity: 0;
  }

  to {
   top: 5%;
   opacity: 1;
  }
`;

export const Modal = styled.div<PropsControlModal>`
  position: absolute;
  height: auto;
  padding: 50px 100px;
  background-color: #fff;
  border: 1px solid #888;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .5), 0 6px 20px 0 rgba(0, 0, 0, .2);
  max-width: 992px;
  margin: 0 auto;
  border-radius: 8px;
  animation-duration: 0.4s;

  @media (max-width: 992px) {
    padding: 25px 50px;
    max-width: 100%;
    width: 90%;
    left: 5%;
  }

  flex-direction: column;
  ${({ statusModal }) =>
    statusModal
      ? css`
          animation: ${fadeIn} 0.7s ease-in forwards;
          display: flex;
        `
      : "display: none;"}
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  background-color: transparent;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.5s;
  position: relative;

  &:hover {
    color: rgba(0, 0, 0, 1);
    ::before,
    &::after {
      opacity: 1;
      transition: ease-in-out 0.5s;
    }
  }

  &::before {
    font-size: 12px;
    content: "Fechar o modal";
    display: inline-flex;
    opacity: 0;
    position: absolute;
    top: -10px;
    right: 16px;
    width: 150px;
    height: 22px;
    align-items: center;
    justify-content: center;
    background-color: #002ead;
    color: #fff;
    border-radius: 3px 3px 0 3px;
    opacity: 0;
    z-index: 1;
  }

  &::after {
    content: "";
    border: 1px solid #002ead;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;
    left: -11px;
    top: calc(50% - 11px);
    transform: rotate(-45deg);
    opacity: 0;
    z-index: 0;
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #002ead;

  th,
  td {
    padding: 5px 20px;
  }

  th {
    letter-spacing: 1px;
  }

  td {
    letter-spacing: 1px;
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const TableHeader = styled.thead`
  tr {
    background-color: #002ead;
    color: #fff;
    font-size: 16px;
  }
  th {
    width: calc(100% / 5);
    text-align: left;
  }

  @media (max-width: 992px) {
    tr {
      display: flex;
      flex-direction: column;
    }
    th {
      flex: 1;
      width: 100%;
    }
  }
`;

export const Caption = styled.caption`
  padding: 20px 0;
  font-style: italic;
  color: #666;
  text-align: left;
  letter-spacing: 1px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const TableBody = styled.tbody`
  tr {
    color: #002ead;
    font-size: 15px;
  }

  @media (max-width: 992px) {
    tr {
      display: flex;
      flex-direction: column;
    }
    th {
      flex: 1;
      width: 100%;
    }
  }
`;
