import { Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductFromCart } from "../store/cartSlice";

function Cart() {
    const cartProducts = useSelector(state => state.cart.cart)
    const navigate = useNavigate()
    const handleClick = () => { navigate('/') }
    const dispatch = useDispatch()
    return (<>
        <List>
            {cartProducts.map((product) => {
                return (
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItem>
                            <Grid size={{ xs: 5 }}>
                                <ListItemText primary={product.title} />
                            </Grid>
                            <Grid size={{ xs: 5 }}>
                                <ListItemText secondary={`${product.price}€`} />
                            </Grid>
                            <Grid size={{ xs: 2 }}>
                                <Button onClick={() => dispatch(deleteProductFromCart(product.id))}>Delete</Button>
                            </Grid>
                        </ListItem>
                    </Grid>
                )
            })
            }
        </List>
        <Button onClick={handleClick}>Torna alla Home</Button>
    </>
    )
}

export default Cart