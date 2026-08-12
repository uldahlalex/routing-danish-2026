import {useEffect, useState} from "react";

export function ListProducts() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((json) => {
                setProducts(json.products)
            });
    }, []);

    function removeProduct(id: number) {
        const duplicate = [...products];
        const filteredArray = duplicate.filter(p => p.id != id)
        setProducts(filteredArray)
    }


    return <div>
        {
            products.map(p => {
                return <MyChildComponent key={p.id} product={p} removeProduct={removeProduct}/>
            })
        }
    </div>;
}

interface MyChildComponentProps {
    product: Product,
    removeProduct: (id: number) => void
}

function MyChildComponent({product, removeProduct}: MyChildComponentProps) {

    return <div>the product is: {product?.title} <button onClick={() => removeProduct(product.id)}>delete this stuff</button></div>
}


export interface Product {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    images: string[]
    thumbnail: string
}

export interface Dimensions {
    width: number
    height: number
    depth: number
}

export interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export interface Meta {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}

