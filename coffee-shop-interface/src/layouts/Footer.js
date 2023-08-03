import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import {ReactComponent as Logo} from '../assets/images/Logo.svg';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="items-center flex-col space-y-8 md:px-48 md:pt-16">
                <hr className="w-full h-[1px] bg-brown mb-4" />
                <div className="flex flex-col md:flex-row w-fit md:w-full justify-between px-4 md:px-36 pb-8 md:pb-16 space-y-8 md:space-y-0">
                    <div className="flex flex-col justify-center items-center md:items-start w-full cursor-pointer" onClick={() => navigate('/')}>
                        <Logo className="w-14 h-14" />
                    </div>
                    <div className="flex flex-col space-y-4 w-fit md:w-full">
                        <h3>Quick Links</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left w-full">
                            <a href="/">Home</a>
                            <a href="/menu">Menu</a>
                            <a href="/about">About</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 w-full items-center md:items-start">
                        <h3>Contacts</h3>
                        <a href="https://www.arianadaris.dev/" target="_blank" rel="noreferrer">arianadaris.dev</a>
                    </div>
                    <div className="flex flex-col space-y-4 w-full items-center md:items-start">
                        <h3>Socials</h3>
                        <div className="flex space-x-4">
                            <a className="hover:scale-105" href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                                <Icon className="w-6 h-6" icon="mdi:github" />
                            </a>
                            <a className="hover:scale-105" href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                                <Icon className="w-6 h-6" icon="mdi:linkedin" />
                            </a>
                            <a className="hover:scale-105" href="https://dribbble.com/arianadaris" target="_blank" rel="noreferrer">
                                <Icon className="w-6 h-6" icon="mdi:dribbble" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full h-fit bg-tan/80 flex justify-between items-center px-4 md:px-36 py-4 md:py-8">
                <p>© 2023 Ariana Rajewski</p>
                <a className="cursor-pointer" href="https://www.arianadaris.dev" target="_blank" rel="noreferrer">arianadaris.dev</a>
            </div>
        </>
    );
};

export default Footer;