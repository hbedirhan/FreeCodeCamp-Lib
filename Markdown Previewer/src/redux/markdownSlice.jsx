import { createSlice} from '@reduxjs/toolkit';

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        text: '',
    },
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload;
        },
    }
});

export const { changeText } = markdownSlice.actions;
export default markdownSlice.reducer;