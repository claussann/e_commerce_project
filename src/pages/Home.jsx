import { Grid } from "@mui/material"
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar"
import Products from "../components/products";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ProductModal from "../components/products/Modal";
import SlideDrawer from "../components/navbar/SlideDrawer";
import Carousel from "../components/navbar/Carousel";

function Home() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selectProduct, setSelectProduct] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const products = useSelector(state => state.products.products)


    return (<>
        <Grid container spacing={2}>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} size={12}>
                <Navbar setDrawerOpen={setOpenDrawer} />
            </Grid>
            <Carousel />
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} >
                <Products products={products} onSelectProduct={(product) => { setSelectProduct(product) }} onClick={() => setOpenModal(true)} />
            </Grid>
        </Grid>
        <SlideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        {openModal && selectProduct && <ProductModal id={selectProduct?.id} open={openModal} onClick={() => setOpenModal(false)} />}
    </>
    );
}

export default Home