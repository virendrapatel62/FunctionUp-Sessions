import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(users, { payload }) {
      return payload;
    },
    generateGmail(users, { payload }) {
      const { id } = payload;
      const user = users.find((user) => user.id === id);
      user.gmail = `${user.username}$gmail.com`;
      return users;
    },
  },
});
