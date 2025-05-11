import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect } from "react"
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/productsSlice';
import { addProductToCart } from '../../store/cartSlice';

function Products({onSelectProduct, onClick}) {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.cart)
    console.log(cartProducts)

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(setProducts(data))
        }
        getProducts()
    }, [dispatch])

    return <>
        <Grid container spacing={2}>
            {products.map((product) => {
                return <Grid key={product.id} size={{ xs: 12, md: 3 }}>
                    <Card sx={{ height: { xs: '100%', md: 500 } }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={product.image}
                            title={`${product.title}`} />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Category:{product.category} Price: {product.price}$</Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <CardActions>
                                <Button onClick={()=> {onSelectProduct(product); onClick()} } size="small">Description</Button>
                            </CardActions>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => dispatch(addProductToCart(product))} size="small"><AddShoppingCartIcon />Add to Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            })
            }
        </Grid>
    </>
}

export default Products