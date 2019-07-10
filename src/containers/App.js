import React, { useEffect, useReducer } from "react";

import { LeaderBoarderContainer } from "./app.style";
import { reducer, initialState } from "./app.reducer";
import ListItem from "./App.component.js";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: "shuffleScore" }), 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <LeaderBoarderContainer>
      {state.map(item => (
        <ListItem item={item} rank={item.rank} key={item.userID} />
      ))}
    </LeaderBoarderContainer>
  );
};

export default App;
