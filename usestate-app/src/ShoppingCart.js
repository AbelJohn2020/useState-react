import React, { useState } from 'react';

const initialCard = [
    { id: 1, title: 'Aries', description: 'First House'},
    { id: 2, title: 'Taurus', description: 'Second House'},
    { id: 3, title: 'Gemini', description: 'Third House'},
];

function ShoppingCart() {
    const [cart, setCart] = useState(initialCard);

    const deleteProduct = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId);

        setCart(changedCart);
    };

    const addProduct = (newProduct) => {
        newProduct.id = Date.now();
        const changedCart = [
            newProduct, 
            ...cart,
        ];

        setCart(changedCart);
    }

    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))
        setCart(changedCart);
    }

    return (
        <div>

            <button onClick={() => addProduct({ title: "Cancer", description: "Fourth house"})}>
                Add
            </button>

            { cart.map( product => (
                <div key={product.id}>
                    <p>{product.id}. {product.title}</p>
                    <p>{product.id}. {product.description}</p>

                    <button onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>

                    <button onClick={() => updateProduct({id: product.id, title: "Shion", description: "Golden Knight of Aries"})}>
                        Update
                    </button>

                </div>
            ) ) }

            <br />
            <pre>
                {JSON.stringify(cart, null, 2)}
            </pre>
        </div>
    )
}

export default ShoppingCart
