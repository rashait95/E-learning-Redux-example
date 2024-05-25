import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const getAllTeachersAsync = createAsyncThunk( 
    'teachers/all',
    async () => {
        return axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(2)
            return (res.data);
           
    });}
);

export const Teacherslice = createSlice({
    name:'teachers',
initialState:{
teachers:[],
},
reducers:{},
extraReducers :(builder) => {

    builder.addCase(getAllTeachersAsync.fulfilled,(state,action)=>{
        state.teachers=action.payload;
    })
   

}

});


//export const {getAllTeachers}=Teacherslice.actions;

export default Teacherslice.reducer;
