import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Icon } from '@iconify/react';

import Layout from '../layouts/Layout';

const Account = () => {
    const { currentUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);



    const handleDeleteAccount = () => {

    };

    return (
        <Layout>
            <section className="h-[50rem] w-3/4 mx-auto relative flex-col space-y-8">
                <h1 className="pt-14">Your Account</h1>
                <div className="flex flex-col bg-white p-8 rounded-lg items-center space-y-4">
                    <div className="grid grid-cols-2 w-1/2">
                        <label>First Name</label>
                        <input type="text" value={currentUser.first_name} />
                    </div>
                    <div className="grid grid-cols-2 w-1/2">
                        <label>Last Name</label>
                        <input type="text" value={currentUser.last_name} />
                    </div>
                    <div className="grid grid-cols-2 w-1/2">
                        <label>Email address</label>
                        <input type="text" value={currentUser.email} />
                    </div>
                    <div className="grid grid-cols-2 w-1/2">
                        <label>Password</label>
                        <input type="password" value="111111" />
                    </div>
                </div>
                <button className="bg-brown hover:bg-transparent text-white hover:text-brown mx-auto" onClick={() => setIsOpen(!isOpen)}>Delete Account</button>
            </section>
            {/* Delete Account Confirmation Modal */}
            <div className={isOpen ? "block bg-black/20 h-screen w-screen absolute top-0 left-0" : "hidden"}>
                <div className="absolute top-32 right-20 bg-white hover:bg-brown/10 cursor-pointer p-2 rounded-full">
                    <Icon className="w-5 h-5" icon="lucide:x" />
                </div>
                <div className="w-1/4 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 rounded-xl flex flex-col justify-center p-4 space-y-4">
                    <h3 className="text-center">Are you sure you want to delete your Coast account?</h3>
                    <div className="flex space-x-4 mx-auto">
                        <button onClick={() => setIsOpen(!isOpen)}>Cancel</button>
                        <button className="bg-red-300 hover:bg-red-100 hover:text-brown" onClick={() => handleDeleteAccount()}>Confirm</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Account;