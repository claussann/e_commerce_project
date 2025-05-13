import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProductModal({ id, open, onClick }) {
    const products = useSelector(state => state.products.products)
    const product = products.find(prod => prod.id === id)

    return (<Modal keepMounted
                sx={{ maxWidth: 'auto'}}
                open={open}
                onClose={onClick}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {product ? (
                        <>
                            <Button sx={{ float: 'right' }} onClick={onClick}>Close</Button>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {product.title}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {product.description}
                            </Typography>
                        </>
                    ) : (<Typography>Product not found</Typography>)}
                </Box>
            </Modal>
    );
}

export default ProductModal