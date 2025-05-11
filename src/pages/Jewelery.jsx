import { useSelector, } from "react-redux";
import FilteredCategories from "../components/products/filteredCategories";

function Jewelery() {
    const products = useSelector(state => state.products.products)
    const jewelery = products.filter(product => product.category === "jewelery")
    return <>
        <FilteredCategories categories={jewelery} />
    </>
}

export default Jewelery