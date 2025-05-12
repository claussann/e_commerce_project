import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/cartSlice';

function Products({ onSelectProduct, onClick, products }) {
    const dispatch = useDispatch()

    return <>
        <Grid container spacing={2}>
            {products.map((product) => {
                return <Grid key={product.id} size={{ xs: 12, md: 3 }}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: { xs: '10px', md: '20px' },
                        height: { xs: '100%', md: 500 } }}>
                            <CardActions>
                                <Button onClick={() => dispatch(addProductToCart(product))} size="small"><AddShoppingCartIcon />Add to Cart</Button>
                            </CardActions>
                        <CardMedia
                            sx={{
                                width: { xs: '200px', md: '75%' },
                                height: 200,
                                objectFit: 'contain',
                                objectPosition: 'center',
                                margin: '5px'
                            }}
                            image={product.image}
                            title={`${product.title}`} />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Category:{product.category} Price: {product.price}$</Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <CardActions>
                                <Button onClick={() => { onSelectProduct(product); onClick() }} size="small">Description</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            })
            }
        </Grid>
    </>
}

export default Products