import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import photoReducer from './reducers/photoSlice'

export const store = configureStore({
  reducer: {
    photo: photoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
