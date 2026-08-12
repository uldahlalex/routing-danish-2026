import {useState} from "react";

export function ListProducts() {

    const [products, setProducts] = useState([
        {id: 1, title: "my product 1"},
        {id: 2, title: "my other product"}])

    return <div>

        {
            products.map(p => {
                return <MyChildComponent key={p.id} />
            })
        }

    </div>;
}

function MyChildComponent() {
    return <div>hello world</div>
}