import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { PhotoInterface } from "../../interfaces/Photo";

export interface PhotoState {
    photos: PhotoInterface[]
}

const initialState: PhotoState = {
    photos: [],
};