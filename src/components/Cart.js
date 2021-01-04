import { Button, IconButton } from '@material-ui/core';
import { MenuBook, RemoveShoppingCart, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Cart.css"

function Cart({ cart }) {
    const totalPrice = cart.reduce(
        (total, item) => (total += item.price), 0);
    return (
        <div className="cart">
            <h2>
                <Link to="/"><MenuBook color="secondary" /></Link> <span><ShoppingCart color="primary" /></span>
            </h2>

            <h3>Total: &#8378;{totalPrice.toFixed(2)}</h3>
            <p>{ cart.length }</p>
            { cart.map((cart) => {
                return (
                    <div className="cart__book" key={cart.id}>
                        <img
                            src={cart.image}
                            alt={cart.name}
                        />
                        <div>
                            <h4>{cart.name}</h4>
                            <p>Author: {cart.author}</p>
                            <p>Price: &#8378;{cart.price}</p>
                            <Button variant="contained" color="secondary" >+</Button>
                            <IconButton>
                                <RemoveShoppingCart color="action" />
                            </IconButton>
                            <Button variant="contained" color="secondary" >-</Button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps)(Cart);


