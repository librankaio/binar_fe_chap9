import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    score: '',
}

export const userSlicer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.score = action.payload.score
            // state.address = action.payload.address
            // state = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlicer.actions

export default userSlicer.reducer