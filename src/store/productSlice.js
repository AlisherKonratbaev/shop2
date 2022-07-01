import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async function (query, {rejectWithValue}) {
        try {
            const resposne = await fetch(`http://localhost:3001/api/product?name=${query.name}&category=${query.category}&limit=3&offset=${query.page*3}`)

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
    products: [],
    count:0,
    status: null,
    error: null,
    name: '',
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = [];
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = "loading"
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.products = action.payload.products;
            state.count = action.payload.count;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    }
})

export const {setName, clearProducts} = productSlice.actions
export default productSlice.reducer;