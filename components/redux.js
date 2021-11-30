export const increment = () => ({ type: 'increment' });
export const decrement = () => ({ type: 'decrement' });

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment': {
      return state + 1;
    }
    case 'decrement': {
      return state - 1;
    }
  }
};
