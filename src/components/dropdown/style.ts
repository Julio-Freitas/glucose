import styled from "styled-components";

export const NavigationDropdown = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  min-width: 250px;
`;
type SelectAttributs = {
  dropdown: boolean;
};
export const Select = styled.ul<SelectAttributs>`
  display: none;
  position: absolute;
  top: 40px;
  width: 100%;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);

  background-color: #fff;
  z-index: 1;
  flex-direction: column;
  gap: 15px;

  ${({ dropdown }) => dropdown && `  display: flex;`}
`;

type OptionAttr = {
  selected: boolean;
};

export const Option = styled.li<OptionAttr>`
  transition: all 0.2s;
  padding: 8px;
  cursor: pointer;
  display: inline-flex;
  gap: 5px;

  &:hover {
    background-color: #002ead;
    color: #fff;
  }

  ${({ selected }) =>
    selected &&
    `
   background-color: #002ead;
   color: #fff;
  `}
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: #002ead;
  color: #fff;
  border: 0;
`;
