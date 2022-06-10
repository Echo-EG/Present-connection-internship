import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getApiDataAsync = createAsyncThunk(
    "data/getPosts",
    async() =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "GET",
            headers: {
                "accept": "application/json"
            }
        })
        if (response.ok){
            // return response.json();
            
            const list = await response.json();
            return {list}
        }
    }
)

export const getDataByIdAsync = createAsyncThunk(
    "data/postsById",
    async(payload) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`,{
            method: "GET",
            headers: {
                "accept": "application/json"
            }
        })
        if (response.ok){
            return response.json();
        }
    }
)

export const addDataAsync = createAsyncThunk(
    "data/addData",
    async(payload) =>{
        
        const body = JSON.stringify(payload)

        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                
            },
            body: body
        })
        if (response.ok){
            return response.json();
        }
    }
)

const apiSlice = createSlice({
    name: "apiSlice",
    initialState: [],
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getApiDataAsync.fulfilled, (state, action) =>{
            return action.payload;
        })
        builder.addCase(getDataByIdAsync.fulfilled, (state, action) =>{
            return action.payload;
        })
        builder.addCase(addDataAsync.fulfilled, (state, action) =>{
            return action.payload;
        })
    }
})

export default apiSlice.reducer;