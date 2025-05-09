import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

function Navbar({ setDrawerOpen }) {
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
                <TextField
                    id="outlined-size-small"
                    label="Search..."
                    size="small"
                    variant="outlined"
                    color="primary"
                    InputProps={{
                        sx: {
                            color: 'white', // colore del testo digitato
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                        },
                    }}
                    InputLabelProps={{
                        sx: {
                            color: 'white', // colore della label
                            '&.Mui-focused': {
                                color: 'white',
                            },
                        },
                    }}
                />
                <Typography sx={{ display: { xs: 'none', md: 'block' } }} variant="h6">eCommerce</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar