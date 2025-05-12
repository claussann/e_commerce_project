import { Grid, Typography} from "@mui/material";
import Container from '@mui/material/Container';
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
        <Container>
            <Grid container spacing={2} sx={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                border: '1px solid lightblue'
            }}>
                <Grid size={{xs: 12, md: 6}}>
                    <Typography  variant="h4">{title}</Typography>
                    <Typography >{description}</Typography>
                    <Button onClick={() => dispatch(addProductToCart(product))} size="small"><AddShoppingCartIcon />Add to Cart</Button>
                </Grid>
                <Grid size={{xs: 12, md: 6}} sx={{maxWidth:{xs: 'auto', md: 'auto'}, display: 'flex', justifyContent: 'center'}}>
                    <img style={{ maxWidth: '300px'}} src={img} alt={title} />
                </Grid>
            </Grid >
        </Container>
        <SlideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
    );
}
export default OneProduct