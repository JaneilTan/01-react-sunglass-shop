import "./App.css";
import products from "./api/products.json";
const FilterBy = () => {
  return (
    <>
      <div className="filterBy">
      <label htmlFor="category">Filter by</label>
      <select id="category" defaultValue="all">
        <option value="all">All</option>
        <option value="accessories">Accessories</option>
        <option value="sunglasses">Sunglasses</option>
      </select>
      </div>
    </>
  );
};
const SortBy = () => {
  return (
    <>
      <div className="sortBy">
          <label htmlFor="sort">Sort by</label>
          <select id="sort" defaultValue="latest">
            <option value="latest">Latest</option>
            <option value="low">Price: Low</option>
            <option value="high">Price: High</option>
          </select>
        </div>
    </>
  );
};
const Product = () => {
  return (
    <li className="product-grid-item">
          <img src={products[0].images[0]} alt={products[0].name} />
          <h3>{products[0].name}</h3>
          <p>{products[0].description}</p>
          <button>Buy now</button>
        </li>
  )
}

const App = () => {
  return (
    <div className="container">
      <h1>Sunglass Shop</h1>
      <div className="toolbar">
        <FilterBy />
        <SortBy />
      </div>
      <ul className="product-grid">
        <Product />
        <li className="product-grid-item">
          <img src={products[0].images[0]} alt={products[0].name} />
          <h3>{products[0].name}</h3>
          <p>{products[0].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[1].images[0]} alt={products[1].name} />
          <h3>{products[1].name}</h3>
          <p>{products[1].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[2].images[0]} alt={products[2].name} />
          <h3>{products[2].name}</h3>
          <p>{products[2].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[3].images[0]} alt={products[3].name} />
          <h3>{products[3].name}</h3>
          <p>{products[3].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[4].images[0]} alt={products[4].name} />
          <h3>{products[4].name}</h3>
          <p>{products[4].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[5].images[0]} alt={products[5].name} />
          <h3>{products[5].name}</h3>
          <p>{products[5].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[6].images[0]} alt={products[6].name} />
          <h3>{products[6].name}</h3>
          <p>{products[6].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[7].images[0]} alt={products[7].name} />
          <h3>{products[7].name}</h3>
          <p>{products[7].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[8].images[0]} alt={products[8].name} />
          <h3>{products[8].name}</h3>
          <p>{products[8].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[9].images[0]} alt={products[9].name} />
          <h3>{products[9].name}</h3>
          <p>{products[9].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[10].images[0]} alt={products[10].name} />
          <h3>{products[10].name}</h3>
          <p>{products[10].description}</p>
          <button>Buy now</button>
        </li>
        <li className="product-grid-item">
          <img src={products[11].images[0]} alt={products[11].name} />
          <h3>{products[11].name}</h3>
          <p>{products[11].description}</p>
          <button>Buy now</button>
        </li>
      </ul>
    </div>
  );
};

export default App;
