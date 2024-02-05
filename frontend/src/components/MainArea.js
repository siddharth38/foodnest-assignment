import React, { useState } from 'react'
import '../styles/mainarea.css'
import Product from './products/Product'
import { useSelector } from 'react-redux'
const MainArea = () => {
    const user = useSelector(state=>state.user)
    // const [category,setCategory]=useState('pizza')
    
    return (
        <div className='mainarea'>
         {/* category area */}
         <div className='category-area'>
             <h3>Menu</h3>
            <div className="all-list">
             <Product />
            </div>
         </div>
         

        </div>
    )
}

export default MainArea
