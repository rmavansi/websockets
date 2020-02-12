import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222;
  color: #fff;

  img {
    border-radius: 4px;
  }
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    font-size: 20px;
  }
`;

export const Search = styled.div`
  margin-left: 100px;
  display: flex;

  input {
    height: 36px;
    width: 300px;
  }

  button {
    height: 36px;
    width: 35px;
    border-radius: 6px;
    border: none;
    background: #333;
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  margin-right: 15px;

  button {
    height: 30px;
    width: 96px;
    background: #444;
    border: none;
    border-radius: 4px;
    color: #fff;
  }
`;

export const Image = styled.div`
  height: 30px;
  width: 30px;
  background: #772ce8;
  border-radius: 50%;
`;
