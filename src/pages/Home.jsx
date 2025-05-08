import { Button, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useState } from "react";
import {ShoppingCart as ShoppingCartIcon} from '@mui/icons-material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Home() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Button onClick={() => setOpen(true)}>SideBar</Button>
                    <Typography variant="h1">e-commerce-project</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 10 }}>
                    <Typography>Product</Typography>
                </Grid>
                <Drawer open={open} onClose={setOpen(false)}>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemText primary="Cart" />
                        </ListItem>
                    </List>
                </Drawer>
            </Grid>
        </>
    );
}

export default Home