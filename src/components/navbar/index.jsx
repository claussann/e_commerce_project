import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

function Navbar({ setDrawerOpen }) {
    const products = useSelector(state => state.products.products)
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setDrawerOpen(true)}
                >
                    <MenuIcon /> MENU
                </IconButton>
                <Select styles={{
                    container: (base) => ({
                        ...base,
                        width: '300px', 
                        color: 'black'                   }),
                }} getOptionLabel={(option) => option.title} options={products} onChange={(product) => navigate(`/product/${product.id}`)} />
                <Typography sx={{ display: { xs: 'none', md: 'block' } }} variant="h6">eCommerce</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar