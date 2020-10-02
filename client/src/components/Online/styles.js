import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1d1d1d;
  min-width: 240px;
  color: #ddd;

  @media only screen and (max-width: 1200px) {
    min-width: 50px;
    max-width: 50px;
  }
`;

export const FollowedChannelsBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;

  strong {
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

export const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;

  :hover {
    background-color: rgb(200, 200, 200, 0.1);
    cursor: pointer;
  }
`;

export const ImageNameGameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const NameGameDiv = styled.div`
  flex-direction: column;
  margin-left: 8px;

  p {
    font-weight: bold;
    line-height: 11px;
  }

  span {
    font-size: 12px;
    color: #999;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Image = styled.div`
  width: 28px;
  height: 28px;
  background: #772ce8;
  border-radius: 50%;
`;

export const OnlineFlag = styled.div`
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
`;

export const OnlineStats = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ShowMore = styled.div`
  font-size: 11px;
  margin: 8px 0 12px 12px;
  color: #874df4;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Footer = styled.div`
  border-top: 1px solid #2d2d2d;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  border: 2px solid #1d1d1d;
  border-radius: 6px;
  background-color: #444;
  margin: 8px 9px 12px;

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
    padding-left: 6px;
    color: #fff;
    ::placeholder {
      color: #ccc;
    }
  }

  svg {
    margin-left: 4px;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
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
