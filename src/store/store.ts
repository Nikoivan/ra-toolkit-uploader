import { combineReducers } from 'redux';
import { uploaderReducer } from './uploaderSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  uploader: uploaderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState>;
