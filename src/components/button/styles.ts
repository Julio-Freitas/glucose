import styled from "styled-components";
type buttonStyleProps = {
  width?: string;
  height?: string;
};

export const Button = styled.button<buttonStyleProps>`
  background-color: #002ead;
  box-sizing: border-box;
  border: 1px solid rgb(136, 114, 178);
  border-left: none;
  color: #fff;
  display: inline-flex;
  padding: 8px 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  border-radius: 3px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  gap: 15px;
  opacity: .8;
  height: 40px;

  &:hover {
    background-color: #002ead;
    transition: 0.7s;
    color: #fff;
    opacity: 1;
  }
`;
