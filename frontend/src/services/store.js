import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = counterSlice.actions;

export const fetchVisitorCount = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/visitor-count');
    dispatch(setCount(response.data.count));
  } catch (error) {
    console.error('Error fetching visitor count:', error);
  }
};

export const incrementVisitorCount = () => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/visitor-count');
    dispatch(setCount(response.data.count));
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
  }
};

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;