import ProductCard from "../ProductCard/ProductCard"

const ProductGrid = () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className="row g-0">
            {data.map((item, index) => <div className="col-md-3" key={index}><ProductCard key={index} /></div>)}
        </div>
    )
}

export default ProductGrid