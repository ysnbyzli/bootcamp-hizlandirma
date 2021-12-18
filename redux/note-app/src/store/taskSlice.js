import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    data: [],
    search: "",
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.data.unshift(action.payload);
      },
      prepare: ({ color, text }) => {
        return {
          payload: {
            id: nanoid(),
            color,
            text,
          },
        };
      },
    },
    searchToTasks: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addTask, searchToTasks } = taskSlice.actions;

export const selectFilteredTasks = (state) => {
  return state.tasks.search
    ? state.tasks.data.filter((task) =>
        task.text.toLowerCase().includes(state.tasks.search.toLowerCase())
      )
    : state.tasks.data;
};

export default taskSlice.reducer;
