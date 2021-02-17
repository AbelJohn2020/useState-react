import React, {useState} from 'react'

const initialProduct = {
    title: "Regulus of Leo",
    description: "Ileas's son"
}

function ProductApp() {
    const [product, setProduct] = useState(initialProduct);

    const updateProduct = (property, value) => {
        setProduct({
            ...product,
            title: "Albafica of Pisces",
            [property]: value,
        })
    }

    return (
        <div>
            <button onClick={() => updateProduct("description", "Lougonist's student")}>
                Update Product
            </button>
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>

            <pre> {JSON.stringify(product, null, 2)} </pre>
        </div>
    )
}

export default ProductApp
