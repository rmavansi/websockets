import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #555555;
  transition: 0.3s;

  input {
    height: 30px;
    border: 2px solid #444;
    padding-left: 10px;
    width: 100%;
    background-color: transparent;
    border: none;
    color: #fff;
    ::placeholder {
      color: #ccc;
    }
  }

  ${props =>
    props.isFocused &&
    css`
      background-color: #000000;
      border: 2px solid #5507ab;
    `}
`;
