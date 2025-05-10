import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from "react"
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/productsSlice';
import ProductModal from './Modal';

function Products() {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const [openModal,setOpenModal] = useState(false)
    const [selectedProductId, setSelectedProductId] = useState(null)

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(setProducts(data))
        }
        getProducts()
    }, [dispatch])

    const handleOpenModal = (id) => {
        setSelectedProductId(id)
        setOpenModal(true)
    }

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
                                <Button onClick={() => handleOpenModal(product.id)} size="small">Description</Button>
                            </CardActions>
                            {selectedProductId && <ProductModal id={selectedProductId.id} open={openModal} setOpen={setOpenModal}/>}
                        </CardContent>
                        <CardActions>
                            <Button size="small"><AddShoppingCartIcon />Add to Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            })
            };
        </Grid>
    </>
}

export default Products