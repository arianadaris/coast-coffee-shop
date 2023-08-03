export const addToCart = async (customer_id, product_id, qty) => {
    try {
        const credentials = {
            "customer_id": customer_id,
            "product_id": product_id,
            "qty": qty
        };

        const response = await fetch('https://localhost:7061/Cart/AddToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });

        if (response.ok) {
            // Add to cart successful, handle response
            return true;
        }

        return false;
    }
    catch (error) {
        console.error('Error adding to cart:', error);
        return false;
    }
};

export const removeItemFromCart = async (item_id, customer_id) => {
    try {
        const response = await fetch(`https://localhost:7061/Cart/DeleteItem/item=${item_id}&cust=${customer_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            return response.json();
        }
        return false;
    }
    catch (error) {
        console.error('Error removing item from cart:', error);
        return false;
    }
};

export const getCart = async (cart_id) => {
    try {
        const response = await fetch(`https://localhost:7061/Cart/GetCart/id=${cart_id}`);

        if (response.ok) {
            // Get Cart successful, handle response
            return response.json();
        }
        return false;
    }
    catch (error) {
        console.error('Error retrieving cart:', error);
        return false;
    }
}

export const updateCartItem = async (item_id, qty, customer_id) => {
    try {
        const credentials = {
            "item_id": item_id,
            "qty": qty,
            "customer_id": customer_id
        };

        const response = await fetch('https://localhost:7061/Cart/UpdateItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });

        if (response.ok) {
            return response.json();
        }
        return false;
    }
    catch (error) {
        console.error('Error updating cart item:', error);
        return false;
    }
}