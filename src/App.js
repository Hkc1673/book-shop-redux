import './App.css';
import { Route, BrowserRouter as Router, } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { connect } from "react-redux";



function App(props) {

  console.log(props.bookList)
  return (

      <div className="app">
        <h1>
          Book Store
        <img
            src="https://avatars3.githubusercontent.com/u/60869810?v=4"
            alt=""
          />{" "}
        Let's Shopping
      </h1>
        <Router>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Router>
      </div>

  );
}

const mapStateToProps = state => {
  return {
    bookList:state.bookList
  }
}

export default connect(mapStateToProps)(App);
