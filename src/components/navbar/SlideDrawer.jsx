import { Badge, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import CategoryIcon from '@mui/icons-material/Category';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Collapse from '@mui/material/Collapse';


function SlideDrawer({ openDrawer, setOpenDrawer }) {
    const navigate = useNavigate()
    const products = useSelector(state => state.products.products)
    const cartProducts = useSelector(state => state.cart.cart)
    const categories = [...new Set(products.map(product => product.category))]
    const goToCart = () => { navigate('/cart') }
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const handleClick = () => { setCategoriesOpen(!categoriesOpen) }



    return (
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                <ListItem>
                    <ListItemButton onClick={goToCart}>
                        <Badge badgeContent={cartProducts.length} color="primary" />
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
    )
}

export default SlideDrawer