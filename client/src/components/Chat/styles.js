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
  padding: 0 15px;
`;

export const ChatDiv = styled.div`
  height: 780px;
  padding: 10px 20px;
  line-height: 35px;
`;

export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 15px;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #333;
    border-radius: 6px;
    background: #444;
    padding-left: 15px;
    color: #fff;

    ::placeholder {
      color: #ccc;
    }
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
    margin-top: 6px;
    margin-right: 15px;
    color: #fff;
  }
`;
