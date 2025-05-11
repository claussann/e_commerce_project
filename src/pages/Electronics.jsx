import { useSelector, } from "react-redux";
import FilteredCategories from "../components/products/filteredCategories";

function Electronics() {
    const products = useSelector(state => state.products.products)
    const electronics = products.filter(product => product.category === "electronics")
    return <>
        <FilteredCategories categories={electronics} />
    </>
}

export default Electronics