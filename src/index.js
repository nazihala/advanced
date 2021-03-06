import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';

const products=[{category:'Electronics',price:'100 €',name:'Mixer'},
                {category:'Electronics',price:'70 €',name:'Kitchen Weight'},
                {category:'Clothes',price:'45 €',name:'T-shirt'},
                {category:'Clothes',price:'120 €',name:'Dress'},]





ReactDOM.render(
  <React.StrictMode>
    <ProductTable  produits={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
