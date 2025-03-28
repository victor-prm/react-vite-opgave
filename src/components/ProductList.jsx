import { useState, useEffect } from "react";
import { getCurrentPath } from "../helpers";
import { Link } from "react-router";

function ProductList(props) {
    const [count, setCount] = useState(0)
    const cname = props.cname;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const categories = [
                    "smartphones",
                    "tablets",
                    "mens-watches",
                    "mobile-accessories",
                    "sunglasses",
                ];

                // Fetch all categories in parallel
                const requests = categories.map((cat) =>
                    fetch(`https://dummyjson.com/products/category/${cat}`).then((res) => res.json())
                );

                // Wait for all responses
                const responses = await Promise.all(requests);

                // Extract and combine all products into one array
                const combinedProducts = responses.flatMap((res) => res.products);

                // Update state
                setProducts(combinedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // Runs only on mount

    if (loading) return <p>Loading products...</p>;


    return (
        <>
            <section className={cname}>
                <div className={`${cname}__product-grid`}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} cname="product-card" />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductList

function ProductCard(props) {
    const [count, setCount] = useState(0)
    const cname = props.cname;
    const product = props.product;


    function addToBasket() {
        console.log("Dummy function for addToBasket")
    }
    function addToFavorites() {
        console.log("Dummy function for addToFavorites")
    }


    return (
        <>
            <article className={cname}>
                <img className={`${cname}__product-img`} src={product.thumbnail} alt="" loading="lazy"/>
                <h3 className={`${cname}__product-name`}> <Link  className={`${cname}__product-link`}
                    to={{
                        pathname: "/detail",
                        search: `?query=${product.id}`,
                    }}>{product.title}</Link>
                   </h3>
                <p className={`${cname}__product-price`}>€{product.price}</p>
                <button className={`${cname}__product-like`}><i className="far fa-heart" onClick={addToFavorites}></i></button>
                <button className={`${cname}__product-add`}><i className="fas fa-cart-plus" onClick={addToBasket}></i></button>
            </article>
        </>
    )
}
