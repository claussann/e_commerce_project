import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import OneProduct from "./Product"
import Loading from "../components/navbar/Loading"


function SingleProduct(){
    const { id } = useParams()
    const products =useSelector(state => state.products.products)
    const singleProduct = products.find(prod => prod.id.toString() === id)
    console.log(singleProduct)
        return (
            <> 
                {!singleProduct && <Loading />}
                {singleProduct && <OneProduct product={singleProduct} title={singleProduct.title} img={singleProduct.image} description={singleProduct.description}/>}
            </>
        )
}

export default SingleProduct