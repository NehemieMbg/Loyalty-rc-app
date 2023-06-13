import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    menuIsActive: false,
  },
  reducers: {
    openMenu: (state) => {
      state.menuIsActive = true;
    },
    closeMenu: (state) => {
      state.menuIsActive = false;
    },
  },
});

export const { openMenu, closeMenu } = navigationSlice.actions;

export default navigationSlice.reducer;
