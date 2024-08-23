import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   add:(state,action )=>{
    // 
    state.items.push(action.payload)
   }
  },
})

// Action creators are generated for each case reducer function
export const { add } = userSlice.actions;

export default userSlice.reducer;