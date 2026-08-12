import {useNavigate} from "react-router";

export function LandingPage() {

    const navigate = useNavigate()

    return <div>


        welcome to the landing page

    <button onClick={() => {
        navigate('/products')
    }}>Go to products</button>

    </div>
}


