import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 340px;
  max-width: 340px;
  color: #fff;
  background-color: #222;
  display: ${props => (props.isChatClosed ? 'none' : 'flex')};

  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  height: 50px;
  padding: 0 8px;
  border: 1px solid #333;
`;

export const ClickableIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 4px;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export const ChatDiv = styled.div`
  height: 1800px;
  padding: 5px 16px;
  line-height: 32px;
`;

export const ChatForm = styled.div`
  margin-bottom: 8px;
  padding: 0 15px;
`;

export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  border: 2px solid #333;
  border-radius: 6px;
  background-color: #444;
  transition: 0.3s;

  ${props =>
    props.isFocused &&
    css`
      background-color: #000000;
      border: 2px solid #5507ab;
    `}

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding-left: 15px;
    color: #fff;
    ::placeholder {
      color: #ccc;
    }
  }

  div {
    margin-right: 8px;
  }
`;

export const ChatFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin-top: 8px;
    padding: 4px 8px;
  }

  button {
    height: 32px;
    width: 52px;
    border: none;
    border-radius: 5px;
    margin-top: 8px;
    margin-right: 1px;
    background-color: #8661e9;
    color: #fff;
    font-weight: bold;

    :hover {
      background-color: ${shade(0.25, '#8661e9')};
    }
  }

  span {
    margin-left: 4px;
  }
`;
