import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../context/ShopContext';
import ProductItem from '../../ProductItem/ProductItem';

const ProductDisplay = ({category}) => {
    const {product_list} = useContext(ShopContext)
  return (
    <div className='product-display' id='product-display'>
        <h2>Top Design  Near</h2>
        <div className="product-display-list">
            {
                product_list.map((item,index)=>{
                  if(category==="all" || category===item.category){
                    return <ProductItem 
                    key={index} 
                    id={item._id} 
                    name={item.name} 
                    description={item.description} 
                    new_price={item.new_price} 
                    image={item.image} />


                  }
                    
                 })
            }
        </div>
      
    </div>
  )
}

export default ProductDisplay
