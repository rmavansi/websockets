import styled from 'styled-components';

export const Container = styled.div`
  background: #222;
  height: 100vh;
  width: 12%;
  min-width: 260px;
  color: #ddd;

  padding: 0 15px;
`;

export const Followed = styled.div`
  margin-bottom: 25px;
`;

export const ShowMore = styled.div`
  font-size: 12px;
  margin: 15px 0;
  color: #772ce8;
`;

export const GameName = styled.div`
  font-size: 12px;
  color: #999;
`;

export const FollowedHeader = styled.div`
  /* height: 50px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ImageNameGameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const NameGameDiv = styled.div`
  flex-direction: column;
  margin-left: 8px;
`;

export const Image = styled.div`
  width: 35px;
  height: 35px;
  background: #772ce8;
  border-radius: 50%;
`;

export const OnlineStats = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

export const Recommended = styled.div``;

export const Search = styled.div``;

export const Texto = styled.div`
  font-weight: bold;
`;

export const OnlineFlag = styled.div`
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
`;
