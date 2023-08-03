import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

import Layout from '../layouts/Layout';
import MenuCard from '../components/MenuCard';

const Home = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const containerRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const name = nameRef.current;
            const scrollPosition = window.pageYOffset;
            const scaleValue = 1 - scrollPosition * 0.001;
            if(container && name)
            {
                container.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
                name.style.transform = `scale(${scaleValue})`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Populate products
        try {
            fetch('https://localhost:7061/Product/GetAll')
            .then(res => res.json())
            .then((result) => {
                setProducts(result);
            });
        }
        catch (error) {
            console.error("Error fetching products:", error);
        } 


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const cards = products.slice(0,6).map((dict, index) => 
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
            {/* Hero Section */}
            <section className="md:h-[50rem] flex-col space-y-8 items-center bg-image bg-hero px-4 py-8" ref={containerRef}>
                <div className="pt-0 md:pt-48" ref={nameRef}>
                    <h1 className="text-5xl md:text-8xl">Coast</h1>
                    <h2>Coffee + Social</h2>
                </div>
                <p className="md:w-1/3 mx-auto text-center">Handcrafted blends with the vibrant energy of the coastal lifestyle. Small business grown big, with a number of locations along the West Coast. </p>
                <button onClick={() => navigate('/menu')}>View Our Menu</button>
                {/* Socials */}
                <div className="flex space-x-4 md:absolute bottom-20">
                    <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                        <Icon className="w-8 h-8" icon="mdi:github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                        <Icon className="w-8 h-8" icon="mdi:linkedin" />
                    </a>
                    <a href="https://dribbble.com/arianadaris" target="_blank" rel="noreferrer">
                        <Icon className="w-8 h-8" icon="mdi:dribbble" />
                    </a>
                </div>
            </section>
            {/* About Coast Brewing Co. */}
            <section className="md:h-[50rem] bg-transparent md:space-x-4 md:pb-20  py-8 px-4">
                <div className="w-full md:w-1/2 md:px-20 flex flex-col space-y-8 justify-center items-center md:items-start">
                    <h1 className="text-center md:text-left">About Coast</h1>
                    <p>Coast is a fake coffee company with several fake locations throughout the West Coast. We fake specialize in handcrafted brews and beverages using our fake fresh-grown coffee beans. Coast maintains a facade that it cares about its customers. It does not. It is fake.</p>
                    <button onClick={() => navigate('/about')}>About Us</button>
                </div>
                <div className="w-fit md:w-1/2 hidden md:flex justify-center items-center relative pt-12 d:pt-0">
                    <img className="object-contain" src="https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Coffee Shop" />
                </div>
            </section>
            {/* Products */}
            <section className="bg-white">
                <div className="mx-auto flex flex-col justify-center items-center space-y-4 md:space-y-8 w-full">
                    <h1>Products</h1>
                    <div className="grid grid-cols-3 w-3/4">
                        { cards }
                    </div>
                    <button onClick={() => navigate('/menu')}>View Our Menu</button>
                </div>
            </section>
            {/* Locations */}
            <section className="md:h-[50rem] bg-white flex-col md:flex-row py-8 md:py-0">
                <div className="w-fit md:w-1/2 px-20 flex flex-col space-y-8 justify-center items-center md:items-start">
                    <h1 className="text-center md:text-left">Coast Locations</h1>
                    <p>We have recently expanded! Check out our new fake locations below.</p>
                    <ul className="text-center md:text-left">
                        <li>San Clemente, CA</li>
                        <li>Hunnington Beach, CA</li>
                        <li>San Diego, CA</li>
                        <li>Carlsbad, CA</li>
                        <li>Irvine, CA</li>
                    </ul>
                    <button onClick={() => navigate('menu')}>Order Now</button>
                </div>
                <div className="w-fit md:w-1/2 hidden md:flex justify-center -mt-10 relative">
                    <img className="h-[45rem]" src="https://images.unsplash.com/photo-1616518015080-0b67441d465a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbGlmb3JuaWF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Coffee Shop" />
                </div>
            </section>
        </Layout>
    );
};

export default Home;