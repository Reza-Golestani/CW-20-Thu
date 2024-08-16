import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { http } from "../services/baseService";

const initialState = {
  currentUser: null,
  status: "idle",
  users: [],
  loading: false,
  error: "",
};

export const getUsers = createAsyncThunk("user/readUsers", async () => {
  try {
    const res = await http.get(`/users`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    const res = await http.delete(`/users/${id}`);
    return id;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const createUser = createAsyncThunk(
  "user/createUser",
  async (newUser) => {
    try {
      const res = await http.post(`/users`, newUser);
      return newUser;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({id, data}) => {
    try {
      const res = await http.patch(`/users/${id}`, data);
      return { id, data };
    } catch (e) {
      console.log(e);
      return e;
    }
  }
);

export const getOne = createAsyncThunk("user/getOne", async (id) => {
  try {
    const res = await http.get(`/users/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const userSlice = createSlice({
  name: "gholam",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = "Something went wrong! ...Please try again!";
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = "success";
      // state.users = state.users.push(action.payload);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = state.users.map((user) =>
        user.id !== action.payload.id ? user : action.payload.editedUser
      );
    });
    builder.addCase(getOne.fulfilled, (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload;
    });
  },

  // reducers: {
  //   removeItem:
  // }
});

export const userAction = userSlice.actions;
