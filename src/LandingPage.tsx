import {useLocation, useNavigate} from "react-router";

export function LandingPage() {

    const navigate = useNavigate()
    const location = useLocation()

    return <div>

        current location is:{location.pathname}

        welcome to the landing page

        <button onClick={() => {
            navigate('/products')
        }}>Go to products</button>
    </div>
}