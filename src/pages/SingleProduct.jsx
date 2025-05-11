import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


function SingleProduct(){
    const { id } = useParams()
    const products =useSelector(state => state.products.products)
    const singleProduct = products.find(prod => prod.id.toString() === id)
    console.log(singleProduct)
        return (
            <>
                {!singleProduct && <h1>wait</h1>}
                {singleProduct && <h1>{singleProduct.title}</h1>}
            </>
        )
}

export default SingleProduct