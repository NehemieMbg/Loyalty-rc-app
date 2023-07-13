import { createSlice } from '@reduxjs/toolkit';
import { CollectionType } from '@/types/CollectionType';

// Defines type of collection initial state.
interface Collection {
  url: string;
  carCollection: CollectionType[];
}

// Initial state for the collection slice.
const initialState: Collection = {
  url: '',
  carCollection: [],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    // sets the api url for the collection.
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    // sets the collection data.
    setCollection: (state, action) => {
      state.carCollection = action.payload;
    },
    getCarCollection: (state) => {
      return state;
    },
  },
});

export const { setUrl, setCollection, getCarCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
