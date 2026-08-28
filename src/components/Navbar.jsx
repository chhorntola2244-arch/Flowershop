import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/Cartcontext';

function Navbar() {
  const { cart } = useCart();
  const Countcart = cart.reduce((total, item) => total + item.qty, 0);
  return (
    <nav className='bg-pink-50 shadow-lg  w-full h-19 sticky top-0'>
      <h1 className='font-bold text-pink-500 text-2xl ml-3 '>Flower Shop</h1>
      <div className='flex justify-center font-medium gap-40 text-xl ml-10'>
        <Link to={"/"} className='hover:text-gray-500'>Home</Link>
        <Link to={"/shop"} className='hover:text-gray-500'>Shop</Link>
        <Link to={"/about"} className='hover:text-gray-500'>About</Link>
        <Link to={"/contact"} className='hover:text-gray-500'>Contact</Link>
        <div className=''>
          <Link to={"/cart"} className="bg-pink-400 relative hover:bg-gray-500  p-2 rounded-xl   text-center text-white">
            {Countcart > 0 && (
              <span className='bg-red-600 absolute w-6 h-6 rounded-full flex justify-center items-center -top-2  -right-1 text-x  font-medium'>{Countcart}</span>


            )}
            Cart</Link>
          <Link to={"/login"} className='bg-pink-400 hover:bg-pink-50 hover:text-gray-950 p-2 rounded-xl  text-center text-white ml-10'>Login</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
