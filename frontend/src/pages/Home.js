import React, { useEffect } from 'react'
import LeftSide from '../components/LeftSide'
import MainArea from '../components/MainArea'

const Home = () => {
  useEffect(() => {
    localStorage.removeItem('rzp_device_id');
    localStorage.removeItem('rzp_checkout_anon_id');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('User');
  }, [])
  return (
    <>
      <MainArea />
      <LeftSide />
    </>
  )
}

export default Home
