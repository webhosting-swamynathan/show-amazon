import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header({ cartItems }) {
    return <nav className="navbar row">
        <div className="col-12 col-md-3">
            <div className="navbar-brand">
                <Link to="/"><img width="150px" src="/images/logoes.png" /></Link>
            </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
            <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
            <Link to={'/cart'}>
                <span id="cart" className="ml-3"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg> MyCart</span>
                <span className="ml-1" id="cart_count">{cartItems.length}</span>
            </Link>
        </div>
    </nav>
}