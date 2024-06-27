import React from 'react'
import './ExploreCategory.css'
import { category_list } from '../../assets/assets'

const ExploreCategory = ({category,setCategory}) => {
  return (
    <div className='explore-category' id='explore-category'>
        <h1>Explore Our Category</h1>
        <p className='explore-category-text'>Choose from a diverse category featuring a declarative array of design crafted with finest new arrivals
          and culinary experties. </p>
          <div className="explore-category-list">
            {category_list.map((item,index)=>{
                return(
                <div onClick={()=>{setCategory(prev=>prev===item.category_name?"all":item.category_name)}} key={index} className="explore-category-list-item">
                <img className={category===item.category_name?"active":""} src={item.category_image} alt="" />
                <p>{item.category_name}</p>

              </div>
            )

            })}
          </div>
      
    </div>
  )
}

export default ExploreCategory
