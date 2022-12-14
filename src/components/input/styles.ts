import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 50px;
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgb(47 10 119 / 35%) 0px 5px 6px, rgb(0 0 0 / 20%) 0px -4px 0px inset;
`;

export const Input = styled.input`
  height: auto;
  padding: 5px 10px;
  flex: 1;
  border: 0;
  color: rgb(47, 10, 119);
  border-radius: inherit;
  &::placeholder {
    color: rgb(47, 10, 119);
  }
`;

export const Button = styled.button`
  background-color: #002ead;
  border: 1px solid #8795a2;
  border-left: none;
  color: #fff;
  display: inline-flex;
  padding: 5px 10px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  cursor: pointer;
  flex: 1 1 100px;
  border-radius: 1px 8px 8px 1px;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color:#002ead;
      transition: 0.7s;
      color: #fff;
  }

`;
