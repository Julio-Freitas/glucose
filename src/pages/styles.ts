import styled from "styled-components";

export const Container = styled.section`
  padding: 15px 25px;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > button {
    font-size: 12px;
    border-radius: 6px;
    align-self: flex-end;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 100%;
  margin: 0 auto;
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    .dropdown, button {
      min-width: auto;
      flex: 0.5;
    }
  }

  @media (max-width: 480px) {
    .dropdown,
    button {
      flex: 1;
      width: 100%;
      font-size: 12px;
      font-weight: 500;
    }
  }

  @media (max-width: 320px) {
  flex-direction: column;
  }
`;
