import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { dataI, projectI } from "../interface";

const initialState: projectI = {
  list: [{ id: 1, name: "Test" }],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ name: string }>) => {
      state.list.push({
        id: Math.floor(Math.random() * 1000),
        name: action.payload.name,
      });
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = projectSlice.actions;

//робимо по дефолту, щоб витягнути функцію редюсерб щоб виконати логіку
export default projectSlice.reducer;
