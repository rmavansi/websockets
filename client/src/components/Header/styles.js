import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222;
  color: #fff;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    background: #2a0;
  }
  li {
    padding: 0 20px;
    font-size: 20px;
  }
`;

export const Search = styled.div`
  margin-left: 100px;
  display: flex;
  input {
    width: 300px;
  }
  button {
    height: 30px;
    border-radius: 6px;
    border: none;
  }
`;

export const Perfil = styled.div``;
