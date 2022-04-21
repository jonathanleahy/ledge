import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ledgerReducer from '../features/ledger/ledgerSlice';

export const store = configureStore({
  reducer: {
    ledger: ledgerReducer
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
