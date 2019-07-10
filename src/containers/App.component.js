import React, { useEffect, useState } from "react";

import { StreamerContainer } from "./app.style";

const ListItem = ({ item, rank }) => {
  const [state, setState] = useState({ score: null });

  useEffect(() => {
    let timer = null;
    if (state.score !== null && state.score < item.score) {
      const step = ~~((item.score - state.score) / 3);
      timer = requestAnimationFrame(() => {
        setState(prevState => ({ score: prevState.score + step }));
      });
    } else {
      setState({ score: item.score });
    }

    return () => {
      cancelAnimationFrame(timer);
    };
  }, [item.score, state.score]);

  return (
    <StreamerContainer rank={rank}>
      <div className="avatar">
        <img src={item.picture} alt={item.displayName} />
        <span className="rank">{rank + 1}</span>
      </div>
      <div className="score-bar">
        <span className="name">{item.displayName}</span>
        <span className="score">{state.score}</span>
      </div>
    </StreamerContainer>
  );
};

export default ListItem;
