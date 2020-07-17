import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


const ProductTable=(props)=>{
  console.log(props)
  return (

    <table style={{border: "1px solid black", textAlign:"center"}}>
      <thead style={{color:"pink",width: "50px"}}>
      <tr>
        <th style={{width:"250px",border:"1px solid black "}}>name</th>
        <th style={{width:"250px",border:"1px solid black "}}>category</th>
        <th style={{width:"250px",border:"1px solid black "}}>price</th>
      </tr>
      </thead>
<tbody>
{props.produits.map((element)=> <tr>
  <td style={{width:"250px",border:"1px solid black "}}>{element.name}</td>
  <td style={{width:"250px",border:"1px solid black "}}>{element.category}</td>
  <td style={{width:"250px",border:"1px solid black "}}>{element.price}</td>

      </tr>   )}

   


</tbody>
</table>


  )
};

export default ProductTable;


ProductTable.protoTypes={produits:PropTypes.array,}
  
  

