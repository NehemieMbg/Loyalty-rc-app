import { createSlice } from '@reduxjs/toolkit';

const gallerySclice = createSlice({
  name: 'gallery',
  initialState: {
    galleryIsActive: false,
    images: [],
  },
  reducers: {
    openGallery: (state) => {
      state.galleryIsActive = true;
    },
    closeGallery: (state) => {
      state.galleryIsActive = false;
    },
  },
});

export const { openGallery, closeGallery } = gallerySclice.actions;

export default gallerySclice.reducer;
