import { configureStore } from '@reduxjs/toolkit';
import TodoDetailsReducer from './logic'; // Path to the file containing your TodoDetails reducer

const store = configureStore({
  reducer: {
    details: TodoDetailsReducer, // Add the TodoDetails reducer to the store
    // You can add more reducers here if needed
  },
});

export default store;