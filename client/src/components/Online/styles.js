import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1d1d1d;
  min-width: 240px;
  color: #ddd;

  img {
    border-radius: 50%;
  }

  ${props =>
    props.isClosed &&
    css`
      min-width: 50px;

      div {
        display: flex;
        flex-direction: column;
        padding: 5px 0;
      }
      img {
        height: 30px;
      }
    `}
`;

export const ScrollWrapper = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #222;
    border: 1px solid #3a3a3a;
    border-radius: 10px;
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
  ${props =>
    props.isClosed &&
    css`
      margin: 8px 12px;
    `}
`;

export const FollowedIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
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

  ${props =>
    props.isClosed &&
    css`
      :hover {
        background-color: #1d1d1d;
      }
    `}
`;

export const RecommendedIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const FollowedChannelsBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
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
`;

export const OnlineStats = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

export const OnlineFlag = styled.div`
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
`;

export const ShowMore = styled.div`
  font-size: 11px;
  margin: 8px 0 12px 12px;
  color: #874df4;
  span {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Image = styled.div`
  width: 28px;
  height: 28px;
  background: ${props => props.color};
  border-radius: 50%;
`;

export const Footer = styled.div`
  border-top: 1px solid #2d2d2d;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 31px;
  border-radius: 6px;
  margin: 10px 9px;

  input {
    padding-left: 6px;
  }

  svg {
    margin-left: 4px;
  }
`;
