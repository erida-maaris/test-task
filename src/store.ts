import { configureStore } from '@reduxjs/toolkit';

import weatherSlice from './reducers/weather';

const makeStore = () =>
  configureStore({
    reducer: {
      [weatherSlice.name]: weatherSlice.reducer,
    },
    devTools: true,
  });

export type Store = ReturnType<typeof makeStore>;
export type State = ReturnType<Store['getState']>;
export type Dispatch = Store['dispatch'];
export type Selector<Selected> = (state: State) => Selected;

export default makeStore();
