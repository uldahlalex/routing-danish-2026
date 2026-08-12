import {useParams} from "react-router";
import {useEffect, useState} from "react";

type MyParams = {
    productId: string;
}

export function ProductDetailsPage() {

    const params = useParams<MyParams>();
    const [product, setProduct] = useState()

    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        const response = await fetch('https://dummyjson.com/products/'+params.productId)
        const json = await response.json();
        setProduct(json)
    }


    return <div>this is the product details page. This is the params: {JSON.stringify(params)}
    <p>The actual data we got was: {JSON.stringify(product)}</p>
    </div>
}