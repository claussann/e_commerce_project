import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cartSlice";
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from "../navbar";
import SlideDrawer from "../navbar/SlideDrawer";

function FilteredCategories({ categories }) {
    const dispatch = useDispatch()
    const [openDrawer, setOpenDrawer] = useState(false)
    return (<>
        <Grid container spacing={2}>
            <Navbar setDrawerOpen={setOpenDrawer} />
            {categories.map((product) => {
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
            <SlideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </Grid>
    </>)
}

export default FilteredCategories