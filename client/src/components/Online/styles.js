import styled from 'styled-components';

export const Container = styled.div`
  background: #333;
  height: 100%;
  width: 12%;
  min-width: 260px;
  color: #fff;
`;

export const Followed = styled.div``;

export const FollowedHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* div {
    display: flex;
    align-items: center;
  } */
`;

export const ImageNameGameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const NameGameDiv = styled.div`
  /* display: flex; */
  /* align-items: center; */
  flex-direction: column;
  margin-left: 8px;
`;

export const Image = styled.div`
  width: 35px;
  height: 35px;
  background: #f0f;
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

export const Texto = styled.div``;

export const OnlineFlag = styled.div`
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
`;
