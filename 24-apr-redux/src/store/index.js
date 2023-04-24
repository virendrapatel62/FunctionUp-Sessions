import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  initialState: [],
  name: "products",
  reducers: {},
});
export const postsSlice = createSlice({
  initialState: [],
  name: "posts",
  reducers: {
    savePosts: (state, action) => {
      console.log(action, state);
      return action.payload;
    },

    deletePosts: (posts, action) => {
      const index = action.payload;
      posts.splice(index, 1);
    },
    updateTitle: (posts, action) => {
      const { title, index } = action.payload;
      posts[index].title = title;
    },
  },
});

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    posts: postsSlice.reducer,
  },
});
