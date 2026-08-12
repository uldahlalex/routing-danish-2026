import {useState} from "react";
interface Product {
    id: number;
    title: string;
}
export function ListProducts() {

    const [products, setProducts] = useState<Product[]>([
        {id: 1, title: "my product 1"},
        {id: 2, title: "my other product"}])

    return <div>
        {
            products.map(p => {
                return <MyChildComponent key={p.id} product={p}/>
            })
        }
    </div>;
}

interface MyChildComponentProps {
    product?: Product
}
function MyChildComponent({product}: MyChildComponentProps) {
    return <div>the product is: {product?.title}</div>
}