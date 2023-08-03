import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { ReactComponent as Logo} from '../assets/images/Logo.svg';

const Header = () => {
    const { currentUser } = useAuth();
    const auth = useAuth();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Mobile Menu Toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Dropdown styling
    const dropdownOpen = "block absolute top-14 bg-white rounded-b-xl w-[10rem] -left-[1rem] pt-2 pb-4 shadow-sm px-4 flex flex-col space-y-4";
    const dropdownClose = "hidden";

    // Arrow styling
    const arrowOpen = "rotate-180 w-6 h-6 opacity-100";
    const arrowClose = "w-6 h-6 opacity-80"
    
    const handleLogout = () => {
        const isLoggedOut = auth.logout();

        if (isLoggedOut)
            navigate('/', { replace: true });
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="flex items-center justify-between lg:hidden w-full mx-auto p-4">
                <Link className="flex flex-col justify-center items-center" to="/">
                    <Logo className="w-8 h-8" />
                    <h1 className="text-lg">Coast</h1>
                </Link>
                <div className="flex space-x-4 items-center">
                    <button className="rounded-full py-3 px-6" onClick={() => navigate('/cart')}>
                        <Icon className="" icon="fluent:cart-20-filled" />
                    </button>
                    <Icon icon="ci:hamburger-lg" onClick={toggleMenu} />
                </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:flex justify-between items-center bg-white px-12 py-6 z-50 fixed w-full shadow-bottom">
                <div className="flex justify-between items-center space-x-6">
                    <Link className="uppercase font-kotoriRoseB tracking-widest" to="/menu">Menu</Link>
                    <Link className="uppercase font-kotoriRoseB tracking-widest" to="/">Rewards</Link>
                </div>
                <Link className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 -top-4 bg-white h-fit p-8 rounded-full space-y-2 opacity-100 shadow-sm hover:scale-100" to="/">
                    <Logo className="w-14 h-14" />
                    <h1 className="text-2xl">Coast</h1>
                </Link>
                {
                    currentUser ? 
                    <div className="flex justify-between items-center space-x-6">
                        <div className="group flex flex-col relative">
                            <div className="flex space-x-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                <p className={`uppercase font-kotoriRoseB tracking-widest hover:scale-100 ${isOpen ? 'opacity-100' : 'opacity-80'}`}>Account</p>
                                <Icon className={isOpen ? arrowOpen : arrowClose} icon="mingcute:down-fill" />
                            </div>
                            <div className={isOpen ? dropdownOpen : dropdownClose}>
                                <Link className="" to="/account">My Account</Link>
                                <hr className="w-full h-[1px] bg-brown" />
                                <p className="cursor-pointer hover:text-brown" onClick={() => handleLogout()}>Log Out</p>
                            </div>
                        </div>
                        <button className="rounded-full py-3 px-6" onClick={() => navigate('/cart')}>
                            <Icon icon="fluent:cart-20-filled" />
                        </button>

                    </div>
                    :
                    <div className="flex justify-between items-center space-x-6">
                        <Link className="uppercase font-kotoriRoseB tracking-widest" to="/account/login">Log In</Link>
                        <Link className="uppercase font-kotoriRoseB tracking-widest" to="/account/signup">Sign Up</Link>
                        <button className="rounded-full py-3 px-6" onClick={() => navigate('/cart')}>
                            <Icon className="" icon="fluent:cart-20-filled" />
                        </button>
                    </div>
                }
            </div>

            {/* Mobile Menu */}
            {
            isMenuOpen && (
                <div className="lg:hidden flex flex-col px-4 pb-4 space-y-1">
                    <Link className="uppercase font-kotoriRoseB tracking-widest" to="/menu">Menu</Link>
                    <Link className="uppercase font-kotoriRoseB tracking-widest" to="/">Rewards</Link>
                    {
                    currentUser ? 
                        <div className="flex flex-col">
                            <div className="group flex flex-col relative">
                                <div className="flex space-x-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                    <p className={`uppercase font-kotoriRoseB tracking-widest hover:scale-100 ${isOpen ? 'opacity-100' : 'opacity-80'}`}>Account</p>
                                    <Icon className={isOpen ? arrowOpen : arrowClose} icon="mingcute:down-fill" />
                                </div>
                                <div className={isOpen ? dropdownOpen : dropdownClose}>
                                    <Link className="" to="/account">My Account</Link>
                                    <hr className="w-full h-[1px] bg-brown" />
                                    <p className="cursor-pointer hover:text-brown" onClick={() => handleLogout()}>Log Out</p>
                                </div>
                            </div>
                            <button className="rounded-full py-3 px-6" onClick={() => navigate('/cart')}>
                                <Icon icon="fluent:cart-20-filled" />
                            </button>

                        </div>
                        :
                        <>                                  <Link className="uppercase font-kotoriRoseB tracking-widest" to="/account/login">Log In</Link>
                            <Link className="uppercase font-kotoriRoseB tracking-widest" to="/account/signup">Sign Up</Link>
                        </>
                    }
                </div>
            )
            }
        </>
    );
};

export default Header;