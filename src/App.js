import "./App.css";
import Product from "./Components/Product";
import data from "./data.js";

function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div>
          <a href="/">amazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div class="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <footer class="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
