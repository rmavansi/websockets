import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #18181b;
  color: #e1e1e1;

  img {
    border-radius: 4px;
  }

  svg {
    margin-left: 12px;
    padding: 5px;
    :hover {
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
    }
  }
`;

export const NavBar = styled.div`
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
    padding: 0 18px;
    font-size: 18px;

    :hover {
      :not(:last-child) {
        color: #9254ed;
        cursor: pointer;
      }
    }

    svg {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 1440px) {
    li {
      font-size: 14px;
      padding: 0 10px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  width: 381px;

  div {
    border-radius: 6px 0 0 6px;
    height: 36px;
  }

  button {
    height: 36px;
    width: 34px;
    border-radius: 0 6px 6px 0;
    margin-left: 1px;
    border: none;
    background-color: #3e3e3e;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    svg {
      color: #d2d2d2;
      margin-left: 0;
      padding: 0;
      :hover {
        background-color: transparent;
      }
    }
  }

  @media only screen and (max-width: 770px) {
    div,
    button {
      display: none;
    }
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 12px;
    height: 30px;
    width: 96px;
    background: #444;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;

    :hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    svg {
      margin: 0 6px 0 0;
      padding: 0;
      :hover {
        background-color: transparent;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    button {
      display: none;
    }
  }
`;

export const Image = styled.div`
  height: 30px;
  width: 30px;
  background: #772ce8;
  border-radius: 50%;
  margin-left: 8px;
`;

export const SearchMedia = styled.div`
  display: none;

  @media only screen and (max-width: 770px) {
    display: flex;
  }
`;

export const BitsMedia = styled.div`
  display: none;

  @media only screen and (max-width: 1200px) {
    display: flex;
  }
`;
