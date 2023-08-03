import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';


const CartItem = ({ id, name, qty, basePrice, img, removeItem, updateItem }) => {
    const [quantity, setQuantity] = useState(qty);

    const price = (basePrice * quantity).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const increase = () => {
        updateItem(id, quantity + 1);
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity === 1)
            return;
        
        updateItem(id, quantity - 1);
        setQuantity(quantity - 1);
    };

    return (    
        <tr>
            <td>
                <div className="flex space-x-8 items-center">
                    <img className="w-20 h-20" src={require(`../assets/images/${img}`)} alt={name} />
                    <h3>{ name }</h3>
                </div>
            </td>
            <td>{ price }</td>
            <td className="flex items-center h-full cursor-pointer">
                <span className="w-1/2">{ quantity }</span>
                <div className="w-1/2">
                    <Icon icon="uil:arrow-up" onClick={increase}/>
                    <Icon icon="uil:arrow-down" onClick={decrease}/>
                </div>
            </td>
            <td>{ price }</td>
            <td>
                <button onClick={() => removeItem(id)}>Remove</button>
            </td>
        </tr>
    );
};

export default CartItem;