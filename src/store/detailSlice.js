import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getProductDetail = createAsyncThunk(
    'detail/getProductDetail',
    async function (id, {rejectWithValue}) {
        try {
            const resposne = await fetch(`http://localhost:3001/api/product/${id}`)

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
    product: {},
    status: null,
    error: null,
}


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getProductDetail.pending]: (state, action) => {
            state.status = "loading"
        },
        [getProductDetail.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.product = action.payload;
        },
        [getProductDetail.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const {} = detailSlice.actions
export default detailSlice.reducer;