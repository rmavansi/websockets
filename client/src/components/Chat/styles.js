import styled from 'styled-components';

export const Container = styled.div`
  background: #222;
  height: 100vh;
  width: 20%;
  color: #fff;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #333;
  height: 50px;
`;

export const ChatDiv = styled.div`
  height: 780px;
`;

export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 350px;
    height: 40px;
    border: 1px solid #333;
  }
`;

export const ChatFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 32px;
    width: 48px;
    background: #7915c1;
    border: none;
    border-radius: 5px;
    margin: 6px;
    color: #fff;
  }
`;
