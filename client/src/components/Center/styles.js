import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #444;
  background: grey;
`;

export const Stream = styled.div`
  background: #444;
`;

export const ExpandIcon = styled.div`
  display: flex;
  position: absolute;
  top: 65px;
  right: 15px;

  padding: 2px;
  border-radius: 4px;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  display: ${props => (props.isChatClosed ? 'flex' : 'none')};

  @media only screen and (max-width: 920px) {
    display: none;
  }
`;
