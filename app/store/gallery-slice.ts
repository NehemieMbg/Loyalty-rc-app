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
    // setImages: (state, action: { payload: never | string[] }) => {
    //   state.images.push(...action.payload);
    // },
    // getImages: (state) => {
    //   return state.images;
    // },
  },
});

export const { openGallery, closeGallery } = gallerySclice.actions;

export default gallerySclice.reducer;
