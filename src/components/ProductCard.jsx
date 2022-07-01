import {useState} from "react";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";

function ProductCard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = props.product;

    const handleDetails = (e) => {
        e.preventDefault();
        navigate(`/item/${product.id}`);
    }


    return (
        <Card className="product_card" sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="194"
                image={product.thumbnail}
                alt=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    price {product.price} $
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{textAlign:"center"}}>
                <Button variant="outlined" onClick={handleDetails}>See more</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;