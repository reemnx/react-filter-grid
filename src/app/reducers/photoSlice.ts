import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { PhotoInterface } from "../../interfaces/Photo";
import { get } from "../../services/photoService"

export interface PhotoState {
    photos: PhotoInterface[] | []
}

const initialState: PhotoState = {
    photos: [],
};

export const fetchPhotos = createAsyncThunk(
    'photo/fetchPhotos',
    async (endpoint: string) => {
        const response = await get(endpoint);
        return response
    }
);

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.photos = action.payload;
            });
    },
});

export const selectPhotos = (state: RootState) => state.photo.photos

export default photoSlice.reducer