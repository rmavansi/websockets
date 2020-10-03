import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 110px;
  padding: 0 20px;
  background-color: #18181b;
  color: #e4e4e4;
  box-shadow: 0 -1px 1px #000;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  background-color: #02ca9d;
  border-radius: 50%;
  margin-right: 12px;

  :hover {
    cursor: pointer;
  }

  img {
    width: 71px;
    height: 71px;
    border-radius: 50%;
    border: 2px solid #000000;
  }
`;

export const DescriptionWrapper = styled.div`
  font-weight: bold;

  p {
    font-size: 18px;
    margin-bottom: 4px;
  }

  > div {
    margin-top: 6px;
    span {
      margin-right: 6px;
    }
  }

  a {
    font-weight: normal;
    color: #9254ed;

    :hover {
      text-decoration: underline;
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const Tag = styled.div`
  color: #bfbfbf;
  font-size: 11px;
  background-color: #333333;
  padding: 3px 10px;
  border-radius: 16px;
  margin-left: 6px;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    display: flex;
    align-items: center;
    div {
      margin-right: 10px;
      display: flex;
      align-items: center;
      color: #b90000;
    }
  }
  svg {
    margin-right: 8px;
    padding: 8px;
    background-color: #333333;
    border-radius: 4px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const ChannelInteractions = styled.div`
  display: flex;
  margin: 8px 0 12px;

  button {
    height: 30px;
    /* margin: 0; */
    border-radius: 4px;
    border: none;
    padding: 0 8px;
    background-color: #8661e9;
    color: #ffffff;
    font-weight: bold;
    :hover {
      background-color: #9d7eed;
    }
  }
`;

export const BottomInteractions = styled.div`
  /* display: flex;
  align-items: center; */
  span {
    margin-right: 8px;
  }

  > div {
    svg {
      padding: 0;
      :hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }

  svg {
    background-color: transparent;
    margin-right: 0;
    :hover {
      background-color: #333333;
    }
  }
`;
