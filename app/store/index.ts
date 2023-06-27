import { configureStore } from '@reduxjs/toolkit';

import navigationSlice from '@/app/store/navigation-slice';
import fleetNavigationSlice from './fleet-navigation-slice';
import accountNavigationSlice from './account-navigation-slice';
import collectionSlice from './collection-slice';

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    fleetNavigation: fleetNavigationSlice,
    accountNavigation: accountNavigationSlice,
    collection: collectionSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
