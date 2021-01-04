import './App.css';
import { Route, BrowserRouter as Router, } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";



function App() {
  return (
    <div className="app">
      <h1>
        Book Store
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
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

export default App;
