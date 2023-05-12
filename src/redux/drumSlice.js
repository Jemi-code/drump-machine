import { createSlice } from "@reduxjs/toolkit";
import { audios } from "../audios/audios";

const initialState = {
    volume: "50",
    audios,
    currAudio: {},
    power: true,
}

export const drumSlice = createSlice({
    name: 'drum',
    initialState, 
    reducers: {
        updateVolume: (state, action) => {
            state.volume = action.payload;
        },  
        setAudio: (state, action) => {
            return {...state, currAudio: action.payload}
        },
        updatePower: (state, action) => {
            state.power = action.payload;
        }
    }
})

export const {updateVolume, setAudio, updatePower} = drumSlice.actions;

export default drumSlice.reducer;