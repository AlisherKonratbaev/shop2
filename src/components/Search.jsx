import React from 'react';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from "react-redux";
import {setName} from '../store/productSlice'
import {setPage} from '../store/paginationSlice'
function Search(props) {
    const name = useSelector(state => state.product.name)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setName(e.target.value))
        dispatch(setPage(0))
    }
    return (
        <TextField
            sx={{width:"400px"}}
            id="search-product"
            label="search"
            variant="outlined"
            value={name}
            onChange={handleChange}
        />
    );
}

export default Search;