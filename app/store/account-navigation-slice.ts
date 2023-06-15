import { createSlice } from '@reduxjs/toolkit';

const accountNavigationSlice = createSlice({
  name: 'accountMenu',
  initialState: {
    accountMenuActive: false,
  },
  reducers: {
    openAccountMenu: (state) => {
      state.accountMenuActive = true;
    },
    closeAccountMenu: (state) => {
      state.accountMenuActive = false;
    },
  },
});

export const { openAccountMenu, closeAccountMenu } =
  accountNavigationSlice.actions;

export default accountNavigationSlice.reducer;
