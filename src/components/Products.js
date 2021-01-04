import { IconButton } from '@material-ui/core';
import { AddShoppingCart, MenuBook, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { Link } from "react-router-dom";
import "./Products.css"

function Products(props) {
    return (
        <div className="products">
            <h2>
                <span>
                    <IconButton>
                        <MenuBook color="secondary"/>
                    </IconButton>
                </span>
                <Link to="/cart">
                    <IconButton>
                        <ShoppingCart color="primary" />
                    </IconButton>
                </Link>
            </h2>
            <div className="products__book">
                <img
                    src="https://m.media-amazon.com/images/I/5112YFsXIJL._SL230_.jpg"
                    alt="Elon"
                />
                <div>
                    <h4>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</h4>
                    <p>Author: Ashlee Vance</p>
                    <p>Price: &#8378; 19.99</p>
                    <IconButton>
                        <AddShoppingCart />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Products
