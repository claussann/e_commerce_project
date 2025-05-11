import { Button, List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductFromCart } from "../store/cartSlice";

function Cart() {
    const cartProducts = useSelector(state => state.cart.cart)
    const navigate = useNavigate()
    const handleClick = () => {navigate('/')}
    const dispatch = useDispatch()
    return (<>
    <List>
        {cartProducts.map((product) => {
            return <ListItem>
                <ListItemText primary={product.title} />
                <ListItemText secondary={product.price} />
                <Button onClick={() => dispatch(deleteProductFromCart(product.id))}>Delete</Button>
            </ListItem>
        })
    }
    </List>
    <Button onClick={handleClick}>Torna alla Home</Button>
    </>
    )
}

export default Cart