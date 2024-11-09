import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../context/ItemContext";
import './Header.css'; // Import the CSS file

const Header = () => {
    const { itemsInCart, totalPrice } = useContext(itemContext);

    return (
        <div className="header">
            <h1 className="store-name">Bookishworld</h1>
            <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>

            <div className="cart-container">
                <div className="cart-items">{itemsInCart}</div>
                <FontAwesomeIcon icon={faCartShopping} size="2x" />
            </div>
        </div>
    );
};

export default Header;
