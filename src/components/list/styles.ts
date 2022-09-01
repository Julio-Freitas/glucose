import styled from "styled-components";

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  width: 100%;
`;

export const Li = styled.li<{ newItem: boolean }>`
  height: 50px;

  border:  0;
  box-shadow: 0 0 5px 0  #bbb;
  padding: 5px 15px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ newItem }) => (newItem ? "#aaa" : " #d6d6d8;")};
  transition: ease-in-out .5s;

  &:hover {
    background-color: #aaa;
  }
  @media (max-width: 768px) {
    width: 600px;
  }
`;

export const TextSpan = styled.p`
  display: inline-flex;
  width: calc(100% / 6);
  justify-content: center;
`;

export const GroupActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 5px;

  svg {
    cursor: pointer;
    opacity: 0.9;
    transition: ease-in-out 0.3s;

    &:hover {
      fill: #002ead;
      opacity: 1;
    }
  }
`;
