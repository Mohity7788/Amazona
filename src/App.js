import "./App.css";
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
            <div key={product._id} class="card">
              <a href="/product">
                <img class="medium" src={product.image} alt={product.name} />
              </a>
              <div class="card-body">
                <a href="product.html">
                  <h2>{product.name}</h2>
                </a>
                <div class="rating">
                  <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div class="price"> ${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer class="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
