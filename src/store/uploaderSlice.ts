import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type UploadType = {
  title: string | undefined;
  id: string | undefined;
  url: string | undefined;
};

export type UploderState = {
  lastUpload: UploadType;
  uploaded: UploadType[];
};

const initialState: UploderState = {
  lastUpload: {
    title: undefined,
    id: undefined,
    url: undefined,
  },
  uploaded: [],
};

export const uploaderSlice = createSlice({
  name: 'uploader',
  initialState,
  reducers: {
    add: (state) => {
      state.uploaded = [...state.uploaded, state.lastUpload];
    },
    change: (state, action: PayloadAction<UploadType>) => {
      if (state.lastUpload.url) {
        state.uploaded.push(state.lastUpload);
      }
      state.lastUpload = {
        title: action.payload.title,
        id: action.payload.id,
        url: action.payload.url,
      };
    },
  },
});

export const uploaderActions = uploaderSlice.actions;
export const uploaderReducer = uploaderSlice.reducer;
export const uploaderSelector = (state: RootState) => state.uploader;
