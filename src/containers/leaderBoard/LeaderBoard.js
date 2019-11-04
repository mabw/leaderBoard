import React, { useEffect, useReducer } from "react";

import { LeaderBoarderContainer } from "./leaderBoard.style";
import { reducer, initialState, SHUFFLE_SCORE } from "./leaderBoard.reducer";
import { ListItem } from "./components";

const LeaderBoarder = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: SHUFFLE_SCORE }), 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <LeaderBoarderContainer>
      {state.map(item => (
        <ListItem
          item={item}
          rank={item.rank}
          sort={item.sort}
          key={item.userID}
        />
      ))}
    </LeaderBoarderContainer>
  );
};

export default LeaderBoarder;
