import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name:"",
    photo:""
}
const userReducer = createSlice({
name:"user",
initialState,
reducers:{
    setUser(state , action){
        state.name = action.payload.name;
        state.photo = action.payload.photo;
    },
    setLogout(state){
        state.name = "";
        state.photo = "";
    }
}
});

export const { setUser , setLogout } = userReducer.actions;
export default userReducer.reducer; 