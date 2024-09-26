import { createSlice } from '@reduxjs/toolkit';


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    rgbColor: [255, 255, 125],
  },
  reducers: {
    changeRGB(state) {
        state.rgbColor = [randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)];
    }
  },
});

export const { changeRGB } = colorSlice.actions;
export default colorSlice.reducer;