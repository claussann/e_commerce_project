import { useSelector, } from "react-redux";
import FilteredCategories from "../components/products/filteredCategories";

function WomenClothing() {
    const products = useSelector(state => state.products.products)
    const womenclothing = products.filter(product => product.category === "women's clothing")
    return <>
        <FilteredCategories categories={womenclothing} />
    </>
}

export default WomenClothing