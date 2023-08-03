import React, { useState, useEffect } from 'react';

import Layout from '../layouts/Layout';
import MenuCard from '../components/MenuCard';

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7061/Product/GetAll')
            .then(res => res.json())
            .then((result) => {
                setProducts(result);
            });
    }, []);

    const cards = products.map((dict, index) => 
        <MenuCard 
            key={index} 
            name={dict["product_name"]}
            descr={dict["product_descr"]}
            price={dict["product_price"]}
            img={dict["product_image"]}
            id={dict["product_id"]}
         />
    );

    return (
        <Layout>
            {/* Photo Section */}
            <section className="h-fit md:h-[20rem] relative bg-image bg-menu flex justify-center items-center">
                <h1>MENU</h1>
            </section>
            {/* Products */}
            <section className="bg-white grid grid-cols-3 gap-4 pb-16 pt-16">
                {cards}
            </section>
        </Layout>
    );
};

export default Menu;