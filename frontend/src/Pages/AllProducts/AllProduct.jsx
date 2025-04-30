// import React, { useEffect, useState } from "react";
// // import "../../product.css";
// import '../Products/product.css'
// import { useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import axios from "axios";
// import Swal from "sweetalert2";

// const AllProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedWeights, setSelectedWeights] = useState({});
//     const navigate = useNavigate();
//     const location = useLocation();


//     useEffect(() => {
//         const params = new URLSearchParams(location.search);
//         const searchQuery = params.get("search");
//         fetchProducts(searchQuery);
//     }, [location.search]);

//     const fetchProducts = async (searchQuery) => {
//         try {
//             const response = await axios.get(
//                 "http://localhost:8000/api/get-product"
//             );

//             let filteredProducts = response.data.products.filter((product) => product.productStatus === true);

//             if (searchQuery) {
//                 filteredProducts = filteredProducts.filter((product) => product.productName.toLowerCase().includes(searchQuery.toLowerCase() && product.productStatus === true)
//                 );
//             }
//             const defaultWeights = {};
//             filteredProducts.forEach((product) => {
//                 if (product.productInfo.length > 0) {
//                     const defaultInfo = product.productInfo[0];
//                     defaultWeights[product._id] = {
//                         weight: defaultInfo.productweight,
//                         price: defaultInfo.productFinalPrice,
//                         originalPrice: defaultInfo.productPrice,
//                         productDiscountPercentage: defaultInfo.productDiscountPercentage,
//                         stock: defaultInfo.stock,
//                     };
//                 }
//             });

//             setProducts(filteredProducts);
//             setSelectedWeights(defaultWeights);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };


//     const handleWeightChange = (productId, productWeight) => {
//         const selectedProduct = products.find(
//             (product) => product._id === productId
//         );
//         const productInfo = selectedProduct?.productInfo.find(
//             (info) => info.productweight === productWeight
//         );

//         if (productInfo) {
//             setSelectedWeights((prev) => ({
//                 ...prev,
//                 [productId]: {
//                     weight: productWeight,
//                     price: productInfo.productFinalPrice,
//                     originalPrice: productInfo.productPrice,
//                     productDiscountPercentage: productInfo.productDiscountPercentage,
//                     stock: productInfo.stock,
//                 },
//             }));
//         }
//     };

//     const handleViewDetails = (productId) => {
//         if (!selectedWeights[productId]) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Weight Not Selected",
//                 text: "Please select a weight before viewing details.",
//             });
//             return;
//         }
//         // Navigate to product details page with the selected weight and price
//         navigate(
//             `/product/product-details/${productId}?weight=${selectedWeights[productId].weight}&price=${selectedWeights[productId].price}&stock=${selectedWeights[productId].stock}`
//         );
//     };

//     const addToCart = (product) => {
//         if (!product) return;
//         if (quantity < 1) {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Please select at least one item.',
//           });
//           return;
//         }
//         const existingCart = JSON.parse(sessionStorage.getItem("VesLakshna")) || [];
//         const isProductInCart = existingCart.some((item) => item.productId === productDetails._id);

//         if (isProductInCart) {
//           Swal.fire({
//             icon: 'warning',
//             title: 'Product Already in Cart',
//             text: 'This product is already in your cart.',
//           });
//         } else {
//           const cartProduct = {
//             productId: product._id,
//             productName: product.productName,
//             productImage: product.productImage[0],
//             price: price,  // Use updated price
//             weight: selectedWeight,
//             quantity:1,
//           };
//           existingCart.push(cartProduct);
//           sessionStorage.setItem("VesLakshna", JSON.stringify(existingCart));
//           Swal.fire({
//             icon: 'success',
//             title: 'Added to Cart',
//             text: `${productDetails.productName} has been added to your cart.`,
//           });
//           navigate("/cart");
//         }
//       };



//     return (
//         <>
//             <Helmet>
//                 <title>Products - Medicinal Ghee, Agarbatthi, and More</title>
//                 <meta
//                     name="description"
//                     content="Explore our wide range of products including Ghee, Agarbatthi, and other medicinal products. Shop now for the best prices and quality."
//                 />
//             </Helmet>
//             <section className="productsPage">
//                 <div className="container">
//                     <div className="row">
//                         {/* All Products */}
//                         <div className="col-md-12 all-products product-top-spacing">
//                             <div className="row">
//                                 {products.map((product) => (
//                                     <div
//                                         key={product._id}
//                                         className="col-md-3 col-6 pruduct-spacing"
//                                     >
//                                         <div className="product-card-page">
//                                             <div className="product-image-product">
//                                                 <img
//                                                     src={product.productImage[0]}
//                                                     alt={product.productName}
//                                                     className="img-fluid"
//                                                 />
//                                             </div>
//                                             <div className="productName">
//                                                 <h3 className="product-title">{product.productName}</h3>
//                                                 <div className="price">
//                                                     {selectedWeights[product._id]
//                                                         ?.productDiscountPercentage > 0 ||
//                                                         product.productInfo[0].productDiscountPercentage >
//                                                         0 ? (
//                                                         <>
//                                                             <span className="current-price">
//                                                                 <del>
//                                                                     &#8377;
//                                                                     {selectedWeights[product._id]
//                                                                         ?.originalPrice ||
//                                                                         product.productInfo[0].productPrice}
//                                                                 </del>
//                                                             </span>
//                                                             <br />
//                                                             <span className="current-price text-danger">
//                                                                 Off{" "}
//                                                                 {selectedWeights[product._id]
//                                                                     ?.productDiscountPercentage ||
//                                                                     product.productInfo[0]
//                                                                         .productDiscountPercentage}{" "}
//                                                                 %
//                                                             </span>
//                                                             <br />
//                                                         </>
//                                                     ) : null}
//                                                     <span className="current-price">
//                                                         &#8377;
//                                                         {selectedWeights[product._id]?.price ||
//                                                             product.productInfo[0].productFinalPrice}
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                             <label
//                                                 htmlFor={`pot-${product._id}`}
//                                                 className="pot-label"
//                                             >
//                                                 *Weight:
//                                             </label>
//                                             <select
//                                                 id={`pot-${product._id}`}
//                                                 className="pot-select"
//                                                 onChange={(e) =>
//                                                     handleWeightChange(product._id, e.target.value)
//                                                 }
//                                                 value={selectedWeights[product._id]?.weight || ""}
//                                             >
//                                                 {product.productInfo.map((info) => (
//                                                     <option
//                                                         key={info.productweight[0]}
//                                                         value={info.productweight}
//                                                     >
//                                                         {info.productweight}
//                                                     </option>
//                                                 ))}
//                                             </select>

//                                             <div className="" style={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
//                                                 <button
//                                                     onClick={() => addToCart(product)}
//                                                     className="add-to-cart"
//                                                 >
//                                                     ADD TO CART
//                                                 </button>
//                                                 <button
//                                                     onClick={() => handleViewDetails(product._id)}
//                                                     className="add-to-cart"
//                                                 >
//                                                     View Details
//                                                 </button>
//                                             </div>
//                                             {/* <button
//                                                 onClick={() => handleViewDetails(product._id)}
//                                                 className="add-to-cart"
//                                             >
//                                                 View Details
//                                             </button> */}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default AllProduct;

import React, { useEffect, useState } from "react";
import '../Products/product.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from "sweetalert2";
import { use } from "react";
import { useDispatch } from "react-redux";

const AllProduct = ({ refs, setRef }) => {
    const [products, setProducts] = useState([]);
    const [selectedWeights, setSelectedWeights] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get("search");
        fetchProducts(searchQuery);
    }, [location.search]);

    const fetchProducts = async (searchQuery) => {
        try {
            const response = await axios.get("http://localhost:8000/api/get-product");
            let filteredProducts = response.data.products.filter(product => product.productStatus === true);

            if (searchQuery) {
                filteredProducts = filteredProducts.filter(product =>
                    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            const defaultWeights = {};
            filteredProducts.forEach(product => {
                if (product.productInfo.length > 0) {
                    const defaultInfo = product.productInfo[0];
                    defaultWeights[product._id] = {
                        weight: defaultInfo.productweight,
                        price: defaultInfo.productFinalPrice,
                        originalPrice: defaultInfo.productPrice,
                        productDiscountPercentage: defaultInfo.productDiscountPercentage,
                        stock: defaultInfo.stock,
                    };
                }
            });

            setProducts(filteredProducts);
            setSelectedWeights(defaultWeights);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleWeightChange = (productId, productWeight) => {
        const selectedProduct = products.find(product => product._id === productId);
        const productInfo = selectedProduct?.productInfo.find(info => info.productweight === productWeight);

        if (productInfo) {
            setSelectedWeights(prev => ({
                ...prev,
                [productId]: {
                    weight: productWeight,
                    price: productInfo.productFinalPrice,
                    originalPrice: productInfo.productPrice,
                    productDiscountPercentage: productInfo.productDiscountPercentage,
                    stock: productInfo.stock,
                },
            }));
        }
    };

    const handleViewDetails = (productId) => {
        if (!selectedWeights[productId]) {
            Swal.fire({
                icon: "error",
                title: "Weight Not Selected",
                text: "Please select a weight before viewing details.",
            });
            return;
        }
        const { weight, price, stock } = selectedWeights[productId];
        navigate(`/product/product-details/${productId}?weight=${weight}&price=${price}&stock=${stock}`);
    };

    const addToCart = (product) => {
        const selected = selectedWeights[product._id];
        if (!selected) return;

        const existingCart = JSON.parse(sessionStorage.getItem("VesLakshna")) || [];
        const isProductInCart = existingCart.some(item => item.productId === product._id);

        if (isProductInCart) {
            Swal.fire({
                icon: 'warning',
                title: 'Product Already in Cart',
                text: 'This product is already in your cart.',
            });
        } else {
            const cartProduct = {
                productId: product._id,
                productName: product.productName,
                productImage: product.productImage[0],
                price: selected.price,
                weight: selected.weight,
                quantity: 1,
            };
            existingCart.push(cartProduct);
            sessionStorage.setItem("VesLakshna", JSON.stringify(existingCart));
            dispatch({ type: 'ADD_PRODUCT', payload: ['ADD_PRODUCT', existingCart] })
            setRef(!refs);
            Swal.fire({
                icon: 'success',
                title: 'Added to Cart',
                text: `${product.productName} has been added to your cart.`,
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Products - Medicinal Ghee, Agarbatthi, and More</title>
                <meta
                    name="description"
                    content="Explore our wide range of products including Ghee, Agarbatthi, and other medicinal products. Shop now for the best prices and quality."
                />
            </Helmet>
            <section className="productsPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 all-products product-top-spacing">
                            <div className="row">
                                {products.map(product => (
                                    <div key={product._id} className="col-md-3 col-6 pruduct-spacing">
                                        <div className="product-card-page">
                                            <div className="product-image-product">
                                                <img src={product.productImage[0]} alt={product.productName} className="img-fluid" />
                                            </div>
                                            <div className="productName">
                                                <h3 className="product-title">{product.productName}</h3>
                                                <div className="price">
                                                    {selectedWeights[product._id]?.productDiscountPercentage > 0 && (
                                                        <>
                                                            <span className="current-price">
                                                                <del>&#8377;{selectedWeights[product._id]?.originalPrice}</del>
                                                            </span>
                                                            <br />
                                                            <span className="current-price text-danger">
                                                                Off {selectedWeights[product._id]?.productDiscountPercentage}%
                                                            </span>
                                                            <br />
                                                        </>
                                                    )}
                                                    <span className="current-price">
                                                        &#8377;{selectedWeights[product._id]?.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <label htmlFor={`pot-${product._id}`} className="pot-label">*Weight:</label>
                                            <select
                                                id={`pot-${product._id}`}
                                                className="pot-select"
                                                onChange={(e) => handleWeightChange(product._id, e.target.value)}
                                                value={selectedWeights[product._id]?.weight || ""}
                                            >
                                                {product.productInfo.map(info => (
                                                    <option key={info.productweight} value={info.productweight}>
                                                        {info.productweight}
                                                    </option>
                                                ))}
                                            </select>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                                                <button onClick={() => addToCart(product)} className="add-to-cart">ADD TO CART</button>
                                                <button onClick={() => handleViewDetails(product._id)} className="add-to-cart">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProduct;
