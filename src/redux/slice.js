import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { axiosInstance } from "../api/apiModule";

let initialState = {
  loading: false,
  error: null,
  allData: [],
  favouriteData: [],
  type: "all",
  page: "home",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setAllData(state, action) {
      state.allData = action.payload;
    },
    setFavData(state, action) {
      state.favouriteData = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});
export const {
  setLoading,
  setError,
  setAllData,
  setFavData,
  setType,
  setPage
} = appSlice.actions;

export default appSlice.reducer;

export const fetchAllData = (searchText) => async (dispatch, getState) => {
  let { type } = getState().slice;
  let params = {
    s: searchText,
    type: type !== "all" ? type : null,
  };
  try {
    dispatch(setLoading(true));
    const res = await axiosInstance.get("", { params });
    if (res.data?.Response === "True") {
      dispatch(setAllData(res.data.Search));
    } else {
      dispatch(setError(res.data.Error));
    }
    dispatch(setLoading(false));
  } catch (err) {
    batch(() => {
      dispatch(setError(err));
      dispatch(setLoading(false));
    });
  }
};
