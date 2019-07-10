import streamersData from "../fixture/data.json";

const shuffleScore = state => {
  const newState = [...state];
  const randomSelector = ~~(Math.random() * 10);
  const randomScore = ~~(Math.random() * 1000);
  newState[randomSelector].score = newState[randomSelector].score + randomScore;

  return updateRank(newState, randomSelector);
};

const updateRank = (state, randomSelector) => {
  if (state[randomSelector].rank > 0) {
    const upper = state.find(
      item => item.rank === state[randomSelector].rank - 1
    );
    if (upper.score < state[randomSelector].score) {
      [upper.rank, state[randomSelector].rank] = [
        state[randomSelector].rank,
        upper.rank
      ];
    }
  }

  return state;
};

const initialState = streamersData.map((item, index) => {
  item.rank = index;

  return item;
});

const reducer = (state, action) => {
  switch (action.type) {
    case "shuffleScore":
      return shuffleScore(state);
    default:
      return state;
  }
};

export { reducer, initialState };
