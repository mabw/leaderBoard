import styled from "styled-components";

const itemHeight = 65;

const LeaderBoarderContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
`;

const StreamerContainer = styled.div`
  position: absolute;
  top: ${props => props.rank * itemHeight}px;
  left: 0;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f70089;
  color: white;
  border-radius: 45px;
  height: 53px;

  .avatar {
    margin-top: 3px;

    .rank {
      position: absolute;
      bottom: 0px;
      left: 40px;
      color: white;
      background: magenta;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      font-weight: bold;
      z-index: 1050;
    }
    img {
      width: 50px;
      height: 50px;
      border: 1px solid red;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1020;
    }
  }

  .score-bar {
    position: absolute;
    z-index: 1010;
    border-radius: 50px;
    height: 53px;
    width: 100%;
    min-width: 250px;
    line-height: 53px;
    .name {
      display: inline-block;
      padding-left: 67px;
    }
    .score {
      float: right;
      padding-right: 25px;
    }
  }
`;

export { LeaderBoarderContainer, StreamerContainer };
