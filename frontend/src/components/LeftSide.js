import React, { useState } from 'react'
import '../styles/leftside.css'
import { BsCart3, BsFillArrowRightSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard'
const LeftSide = ({ data, show }) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const user = useSelector(state => state.user)
    const [showNoti, setShow] = useState(false)
    // console.log(cartItems)
    const handleClick = () => {
        localStorage.removeItem('User');
        window.location.reload();

    }

    return (
        <div className='leftside'>
            <div className="header">
                {show && <Link to="/add-product"> <button style={{ marginRight: "10px" }}>Add Product</button></Link>}
                {show ? null : (<div className="user-info">
                    {
                        user?.user ? (
                            <div style={{ display: "flex" }}>




                                <div className='user-profile-icon'>
                                    {user.user.name.charAt(0)}
                                </div>

                                <div >

                                    <button onClick={handleClick} >Logout</button>
                                </div>

                            </div>
                        ) : (
                            <Link to="/signin">
                                <button>Login</button>
                            </Link>
                        )
                    }
                </div>)}
                {show ? null : (<Link to="/cart"><div className="icon">
                    <span>{cartItems ? cartItems?.length : 0}</span>
                    <BsCart3 />
                </div></Link>)}

                {showNoti && (<div className='waring-noti'>
                    {
                        data?.map((item, i) => {
                            if (item.inStockItem <= 3) {
                                return <div key={i}>{item.name} has came to end</div>
                            }

                        })
                    }
                </div>)}
            </div>

            {
                show ? null : (<div className="side-cart-area">
                    <div className="text">
                        <h4>Order Menu</h4>
                        <Link to='/cart'><p>View All <BsFillArrowRightSquareFill /></p></Link>
                    </div>
                    <div className='cart-area'>
                        <div className="all-items side-cart">
                            {cartItems.slice(0, 3).map((item) => (
                                <CartItemCard key={item.product} item={item} />
                            ))}
                            {cartItems.length > 0 && <Link to="/cart"><button>PROCEED TO CHECKOUT</button></Link>}
                        </div>
                    </div>
                </div>)
            }


        </div >
    )
}

export default LeftSide
