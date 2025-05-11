import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useSelector, } from "react-redux";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from "../components/navbar";

function MenClothing({ onSelectProduct, onClick }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const menClothingProducts = products.filter(product => product.category === "men's clothing")
    return <>
        <Grid container spacing={2}>
        <Navbar sx={{ display: 'flex', justifyContent: 'space-between' }} />
            {menClothingProducts.map((product) => {
                return <Grid key={product.id} size={{ xs: 12, md: 3 }}>
                    <Card sx={{ height: { xs: '100%', md: '100%' } }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={product.image}
                            title={`${product.title}`} />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Category:{product.category} Price: {product.price}$</Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography gutterBottom component="div">
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => dispatch(addProductToCart(product))} size="small"><AddShoppingCartIcon />Add to Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            })
            }
            <Button onClick={() => navigate('/')}>Home</Button>
        </Grid>
    </>
}

export default MenClothing