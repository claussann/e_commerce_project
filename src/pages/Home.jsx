import { Badge, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material"
import { useState } from "react";
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';
import Navbar from "../components/navbar"
import Products from "../components/products";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ProductModal from "../components/products/Modal";

function Home() {
    const navigate = useNavigate()
    const products = useSelector(state => state.products.products)
    const categories = [...new Set(products.map(product => product.category))]
    const cartProducts = useSelector(state => state.cart.cart)
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selectProduct, setSelectProduct] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const handleClick = () => { setCategoriesOpen(!categoriesOpen) }
    const goToCart = () => { navigate('/cart') }



    return (<>
        <Grid container spacing={2}>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} size={12}>
                <Navbar setDrawerOpen={setOpenDrawer} />
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} >
                <Products onSelectProduct={(product) => { setSelectProduct(product) }} onClick={() => setOpenModal(true)} />
            </Grid>
        </Grid>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                <ListItem>
                    <ListItemButton onClick={goToCart}>
                        <Badge badgeContent={cartProducts.length} color="primary"/>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cart" />
                    </ListItemButton>
                </ListItem>
                <ListItemButton onClick={(handleClick)}>
                    <CategoryIcon />
                    <ListItemText primary="Category" />
                    {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {categories.map((category) => {
                            return <ListItemButton sx={{ pl: 4 }} key={category} 
                            onClick={() => { navigate(`/${decodeURIComponent(category)}`) }}>
                                {category}
                            </ListItemButton>
                        })
                        }
                    </List>
                </Collapse>
            </List>
        </Drawer >
        {openModal && selectProduct && <ProductModal id={selectProduct?.id} open={openModal} onClick={() => setOpenModal(false)} />}
    </>
    );
}

export default Home