import { IconButton } from '@material-ui/core';
import { AddShoppingCart, MenuBook, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { Link } from "react-router-dom";
import { addCart } from "../actions/action"
import "./Products.css"
import { connect } from "react-redux";

function Products(props) {
console.log(props)
    return (
        <div className="products">
            <h2>
                <span>
                    <IconButton>
                        <MenuBook color="secondary" />
                    </IconButton>
                </span>
                <Link to="/cart">
                    <IconButton>
                        <ShoppingCart color="primary" />
                    </IconButton>
                </Link>
            </h2>
            <p>{ props.cart.length }</p>
                {
                    props.bookList.map((book) => {
                        return (
                            <div className="products__book" key={book.id}>
                                <img
                                    src={book.image}
                                    alt=""
                                />
                                <div>
                                    <h4>{book.name}</h4>
                                    <p>Author: {book.author}</p>
                                    <p>Price: &#8378; {book.price}</p>

                                    <IconButton>
                                        <AddShoppingCart onClick={()=> props.addCart(book)}/>
                                    </IconButton>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bookList: state.bookList,
        cart: state.cart
    }
}


export default connect(mapStateToProps, {addCart})(Products);
