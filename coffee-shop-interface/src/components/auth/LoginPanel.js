import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { loginFields } from '../../constants/formFields';
import FormAction from './FormAction';
import Input from './FormInput';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]="");

const LoginPanel = ({ togglePanel }) => {
    const navigate = useNavigate();
    const auth = useAuth();
    
    const [loginState, setLoginState] = useState(fieldsState);
    
    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.id]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isLoggedIn = auth.login(loginState['email-address'], loginState['password']);

        if(isLoggedIn)
            navigate('/');
    };

    return (
        <div className="flex">
            <div className="w-1/2 px-36 flex flex-col space-y-8">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-left text-4xl">Log into your account</h1>
                    <p className="text-xl">Log in to check your Coast rewards.</p>
                    <p className="pt-4">Don't have an account? <span className="cursor-pointer underline text-brown" onClick={() => togglePanel()}>Sign up</span></p>
                </div>
                <div className="flex flex-col">
                    {
                        fields.map(field => 
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        )
                    }
                    <FormAction handleSubmit={handleSubmit} text="Log in" />
                </div>
            </div>
            <div className="w-1/2 relative">
                <img className="mx-auto" src="https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Coffee Shop" />
                <div className="w-1/3 h-14 bg-coffeeBean bg-cover bg-brown bg-blend-soft-light absolute top-14 right-10"></div>
            </div>
        </div>
    );
};

export default LoginPanel;