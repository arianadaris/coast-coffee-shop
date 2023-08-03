import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getCart, removeItemFromCart, updateCartItem } from '../services/apiService';

import Layout from '../layouts/Layout';

import { ReactComponent as Logo } from '../assets/images/Logo.svg';

import CartItem from '../components/CartItem';

const Cart = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            const items = await getCart(currentUser.customer_id);
            setCartItems(items);
        };

        if (currentUser)
            fetchCart();
    }, [currentUser]);

    const getTotalPrice = () => {
        const total = cartItems.reduce((total, item) => {
            const itemPrice = item.product_price * item.quantity;
            return total + itemPrice;
        }, 0);

        return total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    };
    let price = cartItems.length > 0 ? getTotalPrice() : "$0.00";

    const removeItem = async (item_id) => {
        console.log('Removing Item');
        const removed = await removeItemFromCart(item_id, currentUser.customer_id);

        if (removed.length > 0)
            setCartItems(removed);
        else
            setCartItems([]);
    };

    const updateItem = async (item_id, qty) => {
        console.log('Updating Item');
        const updated = await updateCartItem(item_id, qty, currentUser.customer_id);

        if(updated.length > 0)
            setCartItems(updated);
        else
            setCartItems([]);
    }

    return (
        <Layout>
            <section className="my-8">
                <h1>Cart</h1>
            </section>
            <section className="bg-white h-fit">
                {
                    currentUser ? <>
                        { 
                        cartItems.length > 0 ?
                        <div className="w-full flex flex-col space-y-4">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => 
                                        <CartItem
                                            key={index}
                                            id={item["item_id"]}
                                            name={item["product_name"]}
                                            basePrice={item["product_price"]}
                                            qty={item["quantity"]}
                                            img={item["product_image"]}
                                            removeItem={removeItem}
                                            updateItem={updateItem}
                                        />
                                    )}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="flex flex-col space-y-4">
                                            <p>Subtotal: <span className="text-brown">{price}</span></p>
                                            <button className="bg-brown hover:bg-transparent text-white hover:text-brown">Checkout</button>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Shipping Policies */}
                            <div className="flex flex-col space-y-4 px-96 pb-16">
                                <hr className="w-full h-[1px] bg-brown/20 my-8" />
                                <h3>Our Roasting Schedule</h3>
                                <p>We currently fake roast Monday-Thursday. We aim to deliver the freshest, fakest coffee available.</p>
                            </div>
                        </div>
                        : 
                        <div className="flex flex-col space-y-16 pb-32 px-32">
                            <Logo className="w-20 h-20" />
                            <div className="flex flex-col space-y-4">
                                <h3 className="text-left text-3xl">Start your next order</h3>
                                <p>As you add menu items, they'll appear here. You'll have a chance to review before placing your order.</p>
                            </div>
                            <button onClick={() => navigate('/menu')}>Add items</button>
                        </div>
                    }
                    </>
                    :
                    <div className="flex flex-col space-y-16 pb-32 px-32">
                        <Logo className="w-20 h-20" />
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-left text-3xl">Sign in to view your cart</h3>
                            <p>By logging in, you'll be able to view your cart and check your rewards!</p>
                            <button onClick={() => navigate('/account/login')}>Log In</button>
                        </div>
                    </div>
                }
            </section>
        </Layout>
    );
};

export default Cart;