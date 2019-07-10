import styled from "styled-components";

const itemHeight = 60;

const LeaderBoarderContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 50%;

  margin: 0 auto;
  img {
    width: 50px;
    height: 50px;
  }
`;

const StreamerContainer = styled.div`
  position: absolute;
  top: ${props => props.rank * itemHeight}px;
  left: 50%;
  margin-left: -160px;
  height: ${itemHeight}px;
  transition: all 0.3s ease 0s;
`;

export { LeaderBoarderContainer, StreamerContainer };
