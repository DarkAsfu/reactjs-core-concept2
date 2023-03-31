import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'laptop', price: 63000},
    {name: 'phone', price: 73000},
    {name: 'watch', price: 3000},
    {name: 'tablet', price: 43000},
  ]
  return (
    <div className="App">
      {/* <Product name="Laptop" price="63000"></Product>
      <Product name="Phone" price="75000"></Product>
      <Product name="Watch" price="5000"></Product> */}
      {
        products.map(product => <Product name={product.name} price={product.price} ></Product>)
      }
    </div>
  );
}
function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
export default App;
