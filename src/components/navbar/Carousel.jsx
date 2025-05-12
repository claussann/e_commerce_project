import { Button, Container, Grid } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from "react";

function Carousel() {
    const [img, setImg] = useState(0)

    useEffect(() => {
        if (img === 100) {
            setImg(0)
        } else if (img === -1) {
            setImg(99)
        }
    }, [img])
    return (
        <Container>
            <Grid container spacing={3}
                sx={{
                    maxHeight: { xs: 'auto', md: 'auto' },
                    maxWidth: { xs: '100%', md: '100%' },
                    margin: '10px',
                    display: 'flex',
                    backgroundColor: 'white',
                    justifyContent: 'space-between'
                }}>
                <Button onClick={() => setImg(img - 1)}><ArrowBackIosIcon /></Button>
                <Grid size={8} sx={{ maxHeight: '100%', maxWidth: { xs: '150px', md: '400px' }, display: 'flex', alignItems: 'center' }}>
                    <img style={{
                        height: 'auto',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }}
                        src={`https://picsum.photos/id/${img}/500/300`}
                        alt={`products images`} />
                </Grid>
                <Button onClick={() => setImg(img + 1)}><ArrowForwardIosIcon /></Button>
            </Grid>
        </Container>
    )
}


export default Carousel
