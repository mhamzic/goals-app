import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create new goal
export const createGoal = createAsyncThunk(
  "goal/create",
  async (goalData, thunkAPI) => {
    try {
      return await goalService.createGoal(goalData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state, action) => initialState,
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
