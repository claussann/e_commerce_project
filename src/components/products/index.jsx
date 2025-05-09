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

function Products() {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(setProducts(data))
        }
        getProducts()
    }, [])

    return <>
        <Grid container spacing={2}>
            {products.map((product) => {
               return <Grid key={product.id} size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: { xs: '100%', md: 750 } }}>
                        <CardActions>
                            <Button size="small"><AddShoppingCartIcon />Add to Cart</Button>
                        </CardActions>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={product.image}
                            title={`${product.title}`} />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Category:{product.category} Price: {product.price}$</Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {product.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            })
            };
        </Grid>
    </>
}

export default Products