import { configureStore } from '@reduxjs/toolkit';

import navigationSlice from '@/app/store/navigation-slice';

export const store = configureStore({
  reducer: { navigation: navigationSlice },
});

export default store;
