import {Link} from "react-router-dom"

export default function CheckoutButton()
{
    return(

        <div>
            <Link to="/checkout">
            <button>Checkout</button>
            </Link>
        </div>
    )
}