import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/navbar";
import SlideDrawer from "../components/navbar/SlideDrawer";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/cartSlice";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';


function OneProduct({ title, img, description, product }) {
    const [openDrawer, setOpenDrawer] = useState(false)
    const dispatch = useDispatch()
    return (<>
        <Navbar setDrawerOpen={setOpenDrawer} />
        <Grid container spacing={2} sx={{
            padding: '50px',  
            margin: '50px', 
            display: 'flex', 
            justifyContent: 'space-between',
            border: '1px solid lightblue' }}>
            <Grid size={6}>
                <Typography variant="h4">{title}</Typography>
                <Typography>{description}</Typography>
                <Button onClick={() => dispatch(addProductToCart(product))} size="small"><AddShoppingCartIcon />Add to Cart</Button>
            </Grid>
            <Grid size={6}>
                <img src={img} alt={title} />
            </Grid>
        </Grid >
        <SlideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
    );
}
export default OneProduct