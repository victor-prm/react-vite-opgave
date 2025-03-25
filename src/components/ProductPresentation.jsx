import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";


function ProductPresentation() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${query}`) // Example API
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []); // Empty dependency array → Runs once on mount

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="">
            <div key={product.id} className="">
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </div>
        </div>
    );
}

export default ProductPresentation;