import styled from "styled-components";

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  width: 100%;
`;

export const Li = styled.li`
  height: 50px;
  background: #d6d6d6;
  border: 1px solid #fff;
  padding: 5px 15px;
  width: 100%;
  display: flex;
  align-items: center;

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
