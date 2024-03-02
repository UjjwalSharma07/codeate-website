import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API_URL } from "../../config/constants";

const initialState = {
  loading: false,
  error: null,
  success: false,
  response: null,
};

export const uploadFile = createAsyncThunk(
  "/uploadFile",
  async ({ file, folder }, { rejectWithValue, getState }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);

      const accessToken = getState()?.auth?.user?.token;
      console.log("Access token: " + accessToken);

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const res = await axios.post(`${BASE_API_URL}/file`, formData, config);
      console.log("returning response", res);
      return res;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const uploadFileSlice = createSlice({
  name: "uploadFile",
  initialState,
  reducers: {},
  extraReducers: {
    [uploadFile.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [uploadFile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.response = payload;
      state.success = true;
    },
    [uploadFile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default uploadFileSlice.reducer;

export const uploadFileState = (state) => state?.uploadFile?.response;
