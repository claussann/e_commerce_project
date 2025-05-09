import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Container } from "@mui/material"
import { useState } from "react";
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import { useSelector } from 'react-redux';

import Navbar from "../components/navbar"
import Products from "../components/products";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Home() {
    const products = useSelector(state => state.products.products)
    const [open, setOpen] = useState(false)
    return (<>
        <Grid container spacing={2}>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} size={12}>
                <Navbar setDrawerOpen={setOpen} />
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} >
                <Products />
            </Grid>
        </Grid>
        <Drawer open={open} onClose={() => setOpen(false)}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cart" />
                    </ListItemButton>
                </ListItem>
                {products.map((products)=>{
                    return <ListItem key={products.id}>{products.category}</ListItem>
                })}
            </List>
        </Drawer>
    </>
    );
}

export default Home