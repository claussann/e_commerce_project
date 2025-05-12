import { Button, Container, Grid } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Carousel() {
    const products = useSelector(state => state.products.products)
    const [img, setImg] = useState(0)
    console.log(products)
    useEffect(() => {
        if (img === products.length) {
            setImg(0)
        } else if (img === -1) {
            setImg(products.length - 1)
        }
    }, [img, products])
    return (
        <Container>
            <Grid container spacing={3}
                sx={{
                    xs: { padding: '10px', margin: '10px', maxHeight: '100px', maxWidth: '100px' },
                    md: { maxHeight: '350px', margin: '10px' },
                    display: 'flex',
                    backgroundColor: 'white',
                    justifyContent: 'space-between'
                }}>
                <Grid size={1} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={() => setImg(img - 1)}><ArrowBackIosIcon /></Button>
                </Grid>
                <Grid size={8} sx={{ maxHeight: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img style={{ maxHeight: '350px' }} src={products[img]?.image} alt={products[img]?.title} />
                </Grid>
                <Grid size={1} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={() => setImg(img + 1)}><ArrowForwardIosIcon /></Button>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Carousel
