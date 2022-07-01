import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async function (_, {rejectWithValue}) {
        try {
            const resposne = await fetch("http://localhost:3001/api/category")

            if (!resposne.ok) {
                throw new Error("Server error!")
            }

            const data = await resposne.json();
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    categories: [],
    currentCategory: "",
    status: null,
    error: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.currentCategory = action.payload
        },
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.status = "loading"
        },
        [getCategories.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.categories = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const {setCategory} = categorySlice.actions
export default categorySlice.reducer;