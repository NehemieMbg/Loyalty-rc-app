import { configureStore } from '@reduxjs/toolkit';

import navigationSlice from '@/app/store/navigation-slice';
import fleetNavigationSlice from './fleet-navigation-slice';

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    fleetNavigation: fleetNavigationSlice,
  },
});

export default store;
