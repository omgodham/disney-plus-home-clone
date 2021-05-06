import {createSlice} from '@reduxjs/toolkit';
//createSlice uses the createAction and createReducer i.e combination of both
//createSlice is alternate to do that big process of creating action and reducers separately


const initialState = {
    movies:[]
}

const movieReducer = createSlice({
    name:"movies", //this name doesn't matter what you write 
    initialState,
    reducers:{
        setMovies(state , action){
            state.movies = action.payload;
        }
    } //these are actually actions here no need specify switch case , while dispatching direct call action by name
});
export default movieReducer.reducer; //exporting reducer here 
export const {setMovies} = movieReducer.actions; //exporting actions here