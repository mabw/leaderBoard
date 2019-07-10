import React, { useEffect, useState } from "react";

import { StreamerContainer } from "./app.style";

const ListItem = ({ item, rank }) => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    let timer = null;
    if (score !== null && score < item.score) {
      const step = ~~((item.score - score) / 2);
      timer = requestAnimationFrame(() => {
        setScore(prevScore => prevScore + step);
      });
    } else {
      setScore({ score: item.score });
    }

    return () => {
      cancelAnimationFrame(timer);
    };
  }, [item.score, score]);

  return (
    <StreamerContainer rank={rank}>
      <span>{rank + 1}</span>
      <span>
        <img src={item.picture} alt={item.displayName} />
      </span>
      <span>{item.displayName}</span>
      <span>{score}</span>
    </StreamerContainer>
  );
};

export default ListItem;
