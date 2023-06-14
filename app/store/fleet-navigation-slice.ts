import { createSlice } from '@reduxjs/toolkit';

const fleetNavigationSlice = createSlice({
  name: 'fleetMenu',
  initialState: {
    fleetMenuActive: false,
  },
  reducers: {
    openFleetMenu: (state) => {
      state.fleetMenuActive = true;
    },
    closeFleetMenu: (state) => {
      state.fleetMenuActive = false;
    },
  },
});

export const { openFleetMenu, closeFleetMenu } = fleetNavigationSlice.actions;

export default fleetNavigationSlice.reducer;
