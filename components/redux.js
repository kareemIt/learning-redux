// export const increment = () => ({ type: 'increment' });
// export const decrement = () => ({ type: 'decrement' });

// export const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'increment': {
//       return state + 1;
//     }
//     case 'decrement': {
//       return state - 1;
//     }
//   }
// };
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  // const[counter,setCounter] = useState(0);

  // switch(prop) {
  //   case "increment" :
  //     return setCounter(counter++);
  //   case "decrement":
  //     return setCounter(counter--);
  // }
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value --;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const { reducer: counterReducer } = counterSlice;
