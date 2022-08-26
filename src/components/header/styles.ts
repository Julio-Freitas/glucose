import styled from "styled-components";

export const Header = styled.header`
  color: #fff;
  background: #100;
`;

export const Navigation = styled.nav`
  position: fixed;
  left: 10px;
  top: 50%;
  z-index: 2;
`;

export const Label = styled.label`
  height: 40px;
  width: 40px;
  display: block;
  background: #262626;
  position: absolute;
  z-index: 1;
  border-radius: 6px;
  cursor: pointer;

  &:after {
    content: "+";
    width: 100%;
    position: absolute;
    text-align: center;
    line-height: 40px;
    font-family: "Roboto", "Helvetica Neue", Helvetica, sans-serif;
    color: #575757;
    font-weight: 100;
    font-size: 1.8em;
    transition: all 0.5s;
  }

  &:hover:after {
    color: #fff;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
`;

export const Li = styled.li`
  position: absolute;
  overflow: hidden;
  text-indent: -9999px;
  height: 50px;
  width: 50px;
  background: #d6d6d6;
  border-radius: 50%;
  opacity: 0;
  border: 1px solid white;
  @include background-clip(padding-box);
  @include translate3d(0, 0, 0);
  @include transition(
    transform 0.3s cubic-bezier(0.48, 0.13, 0.42, 1.45),
    opacity 0.2s ease-in
  );

  &:nth-child(2) {
    transition-delay: 0.025s;
  }
  &:nth-child(3) {
    transition-delay: 0.05s;
  }
  &:nth-child(4) {
    transition-delay: 0.075s;
  }
  &:nth-child(5) {
    transition-delay: 0.1s;
  }
`;

export const Overlay = styled.div``;

export const Input = styled.input`
  display: none;
  &:checked {
    ~ ${Label} {
      background: #0f0f0f;
      @include scale(0.85);

      &:after {
        content: "-";
        line-height: 38px;
      }

      ~ ${Ul} {
        ${Li} {
          opacity: 1;
          &:hover {
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
          }
        }
        .text {
          transform: translate(0, -175%);
        }

        .quote {
          transform: translate(125%, -130%);
          &:hover {
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
`;
