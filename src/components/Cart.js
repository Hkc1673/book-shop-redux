import { Button, IconButton } from '@material-ui/core';
import { MenuBook, RemoveShoppingCart, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { Link } from "react-router-dom";
import "./Cart.css"

function Cart() {
    return (
        <div className="cart">
            <h2>
                <Link to="/"><MenuBook color="secondary"/></Link> <span><ShoppingCart color="primary" /></span>
            </h2>

            <h3>Total: &#8378;19.99</h3>

            <div className="cart__book">
                <img
                    src="https://m.media-amazon.com/images/I/5112YFsXIJL._SL230_.jpg"
                    alt="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
                />
                <div>
                    <h4>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</h4>
                    <p>Author: Ashlee Vance</p>
                    <p>Price: &#8378;19.99</p>
                    <p>Total: &#8378;19.99</p>
                    <p>There is a book in your chart.</p>
                    <Button variant="contained" color="secondary" >+</Button>
                    <IconButton>
                        <RemoveShoppingCart color="action"/>
                    </IconButton>
                    <Button variant="contained" color="secondary" >-</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart
