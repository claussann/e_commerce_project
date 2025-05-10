import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material"
import { useState } from "react";
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CategoryIcon from '@mui/icons-material/Category';

import Navbar from "../components/navbar"
import Products from "../components/products";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Home() {
    const products = useSelector(state => state.products.products)
    const categories = [...new Set(products.map(product => product.category))]
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const handleClick = () => { setCategoriesOpen(!categoriesOpen) }
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
                <ListItemButton onClick={handleClick}>
                    <CategoryIcon />
                    <ListItemText primary="Category" />
                    {setCategoriesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {categories.map((category) => {
                            return <ListItemButton sx={{ pl: 4 }}>
                                {category}
                            </ListItemButton>
                        })
                        }
                    </List>
                </Collapse>
            </List>
        </Drawer >
    </>
    );
}

export default Home