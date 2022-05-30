import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload;
    },
    hideNotification(state, action) {
      return initialState;
    }
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

let timeoutID;
export const setNotification = (notification, seconds) => {
  return async dispatch => {
    clearTimeout(timeoutID);
    const miliseconds = seconds * 1000;
    dispatch(showNotification(notification));
    timeoutID = setTimeout(() => {
      dispatch(hideNotification());
    }, miliseconds);
  }
}

export default notificationSlice.reducer;

