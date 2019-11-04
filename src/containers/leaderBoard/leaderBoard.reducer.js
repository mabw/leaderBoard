import streamersData from "../../fixture/data.json";

const shuffleScore = state => {
  const newState = [...state];
  const randomSelector = ~~(Math.random() * 80);
  const randomScore = ~~(Math.random() * 100000); // Updated for presentation along with the initial data in fixture
  newState[randomSelector].score = newState[randomSelector].score + randomScore;

  return updateRank(newState, randomSelector);
};

/**
 * I'm not sure the rule that what the rank number after parellel numbers in leaderboard.
 * so it's the easiest approach in use for now, like (8,8,10) not (8,8,9).
 * we can extend the function if necessary.
 * @param {state} state initial data in state format.
 * @param {selectedIndex} selectedIndex only work on the selectedIndex is gt zero.
 */
const updateRank = (state, selectedIndex) => {
  if (state[selectedIndex].rank > 0) {
    const baseArray = [...state];
    baseArray.sort((l, n) => n.score - l.score);
    baseArray.forEach((item, index) => {
      item.rank = item.sort = index;
      if (baseArray[index - 1] && item.score === baseArray[index - 1].score) {
        item.rank = baseArray[index - 1].rank;
        // Add code here
      }
    });
    baseArray.forEach(baseArrayItem => {
      state.forEach(member => {
        if (member.userID === baseArrayItem.userID) {
          member.rank = baseArrayItem.rank;
          member.sort = baseArrayItem.sort;
        }
      });
    });
  }

  return state;
};

const SHUFFLE_SCORE = "MEDIA17/APP/SHUFFLE_SCORE";

const initialState = streamersData.map((item, index) => {
  item.rank = item.sort = index;

  return item;
});

const reducer = (state, action) => {
  switch (action.type) {
    case SHUFFLE_SCORE:
      return shuffleScore(state);
    default:
      return state;
  }
};

export { reducer, initialState, SHUFFLE_SCORE };
