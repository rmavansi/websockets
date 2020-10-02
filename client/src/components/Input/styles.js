import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  input {
    height: 30px;
    border-radius: 6px 0 0 6px;
    border: 2px solid #444;
    background: #444;
    padding-left: 10px;
    width: 100%;
    ::placeholder {
      color: #ccc;
    }

    ${props =>
      props.isFocused &&
      css`
        background-color: #000000;
        border: 2px solid #5507ab;
      `}
  }
`;
