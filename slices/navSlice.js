import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
    },
    setDestination: {
        setOrigin: (state, action) => {
            state.destination = action.payload;
        },
    },
    setTravelTimeInformation: {
        setOrigin: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    }
})