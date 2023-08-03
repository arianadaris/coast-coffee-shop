import React, { useState } from 'react';
import LoginPanel from '../components/auth/LoginPanel';
import SignupPanel from '../components/auth/SignupPanel';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';

const Login = ({signup}) => {
    const navigate = useNavigate();
    const [hasAccount, setHasAccount] = useState(signup);

    const togglePanel = () => {
        setHasAccount(!hasAccount);
    };

    return (
        <section className="h-screen bg-white flex-col space-y-12">
            <div className="-mt-10 flex items-center space-x-2 h-fit w-fit cursor-pointer pb-10" onClick={() => navigate('/')}>
                <Logo className="w-12 h-12" />
                <h1>Coast</h1>
            </div>
            {
                hasAccount ?
                <LoginPanel togglePanel={togglePanel} />
                :
                <SignupPanel togglePanel={togglePanel} />
            }
        </section>
    );
};

export default Login;