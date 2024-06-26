import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Works } from "../../interface/work";
import axios from "axios";

const listWork: Works[] = []

export const getWork: any = createAsyncThunk(
    "works/getWork",
    async () => {
        const data = await axios.get("http://localhost:8080/works");
        return data.data
    }
)

// Hàm thêm công việc
export const addWork: any = createAsyncThunk(
    "works/addWork",
    async (work: Works) => {
        const data = await axios.post("http://localhost:8080/works", work);
        return data.data
    }
)

// Hàm xóa công việc
export const deleteWork: any = createAsyncThunk(
    "works/deleteWork",
    async (id: number) => {
        const data = await axios.delete(`http://localhost:8080/works/${id}`);
        return id
    }
)

// Hàm sửa công việc
export const updateWork: any = createAsyncThunk(
    "works/updateWork",
    async ({id, work}: {id: number, work: Works}) => {
        const data = await axios.put(`http://localhost:8080/works/${id}`, work);
        return data.data
    }
)

const workReducer = createSlice({
    name: "works",
    initialState: {
        work: listWork
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getWork.pending, (state, action) => {

        })
        .addCase(getWork.fulfilled, (state: any, action) => {
            state.work = action.payload
        })
        .addCase(addWork.fulfilled, (state: any, action) => {
            state.work.push(action.payload)
        })
        .addCase(deleteWork.fulfilled, (state: any, action) => {
            state.work = state.work.filter((work: Works) => work.id !== action.payload)
        })
        .addCase(updateWork.fulfilled, (state: any, action) => {
            const editWork = state.work.findIndex((work: any) => work.id === action.payload.id);
            if(editWork !== -1){
                state.work[editWork] = action.payload
            }
        })
    },
})

export default workReducer.reducer