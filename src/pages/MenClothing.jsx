import { useSelector, } from "react-redux";
import FilteredCategories from "../components/products/filteredCategories";

function MenClothing() {
    const products = useSelector(state => state.products.products)
    const menClothingProducts = products.filter(product => product.category === "men's clothing")
    return <>
        <FilteredCategories categories={menClothingProducts} />
    </>
}

export default MenClothing