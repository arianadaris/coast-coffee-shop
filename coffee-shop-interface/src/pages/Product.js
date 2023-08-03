import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useAuth } from '../contexts/AuthContext';
import { addToCart } from '../services/apiService';

import Layout from '../layouts/Layout';

const Product = () => {
    const { currentUser } = useAuth();
    const { productId } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://localhost:7061/Product/GetProduct/id=${productId}`)
            .then(res => res.json())
            .then((result) => {
                setProduct(result);
            });

        // Error message timer
        let timer;

        if(showError) {
            timer = setTimeout(() => {
                setShowError(false);
            }, 4000);
        }

        if(showSuccess) {
            timer = setTimeout(() => {
                setShowSuccess(false);
            }, 4000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [productId, showError, showSuccess]);

    const addQty = () => {
        setQuantity(quantity + 1);
    };

    const minusQty = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
    };

    const add = async () => {
        if(currentUser) {
            const added = await addToCart(currentUser.customer_id, productId, quantity);

            if (added)
                setShowSuccess(true);
        }
        else {
            setShowError(true);
        }
    };

    return (
        <Layout>
            <section className="w-full flex-col space-y-8 items-center">
                { product["product_image"] ? <img className="w-40 h-40 mt-24" src={require(`../assets/images/${product["product_image"]}`)} alt={product["product_name"]} /> : <></> }
                <h1>{ product["product_name"] }</h1>
                <p className="w-1/3 text-center">{ product["product_descr"] }</p>
                <div className="flex space-x-8 bg-white rounded-lg pl-4">
                    {/* Quantity Control */}
                    <div className="flex space-x-4 items-center">
                        <Icon className="w-6 h-6 text-brown/40 hover:text-brown cursor-pointer" icon="ic:round-plus" onClick={() => addQty()}/>
                        <h3>{ quantity }</h3>
                        <Icon className="w-6 h-6 text-brown/40 hover:text-brown cursor-pointer" icon="ic:round-minus" onClick={() => minusQty()}/>
                    </div>
                    {/* Add to Cart Button */}
                    <button className="bg-brown group hover:bg-transparent" onClick={() => add()}>
                        <p className="text-white group-hover:text-brown">Add to Cart</p>
                    </button>
                </div>
            </section>
            {/* Error Message Pop Up */}
            {
                showError && 
                <div className="bg-red-200 w-fit p-2 rounded-lg absolute bottom-[16rem] left-1/2 transform -translate-x-1/2">
                    <p>Must be logged in to make an order. <span className="underline cursor-pointer" onClick={() => navigate('/account/login')}>Log in</span></p>
                </div>
            }
            {/* Success Message Pop Up */}
            {
                showSuccess && 
                <div className="bg-green-200 w-fit p-2 rounded-lg absolute bottom-[20rem] left-1/2 transform -translate-x-1/2">
                    <p>Item added to cart!</p>
                </div>
            }
        </Layout>
    );
};

export default Product;