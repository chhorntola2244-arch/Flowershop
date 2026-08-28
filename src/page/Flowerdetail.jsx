import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom'
import { useCart } from '../context/Cartcontext';

function Flowerdetail() {
   const { Addtocart } = useCart();
  const { id } = useParams();
  const [flowers, setFlower] = useState(null);
  useEffect(() => {
    fetch("/Data/Flower.json")
      .then((res) => res.json())
      .then((Data) => {
        const founFlower = Data.find((item) => String(item.id) === String(id))
        setFlower(founFlower)
      })
  }, [id])
  if (flowers === null) {
    return <p className="text-center mt-10">found</p>
  }

  if (!flowers) {
    return (
      <p className="text-center mt-10 text-red-500">
        Flower not found
      </p>
    )
  }
  return (
    <div className='min-w-2xl bg-white mt-4'>
      <div className='max-w-4xl bg-white shadow-lg m-auto'>
        <div className='grid shadow-sm md:grid-cols-2'>
          <div>
            <img src={flowers.image} alt="" />
          </div>
          <div className='ml-3'>
            <h2 className='text-xl font-bold text-gray-800'>{flowers.name}</h2>
            <p className='text-red-500  text-lg'>${flowers.price}</p>
            <p className='text-gray-400'>{flowers.description}</p>
            <div className='mt-4 '>
              <button onClick={() => Addtocart(flowers)} className=" bg-pink-500 hover:bg-pink-600 text-white  rounded-xl p-1 mt-2">Add to cart</button>
              <Link to="/shop" className=" bg-pink-500 hover:bg-pink-600 text-white w-50 rounded-xl p-1 mt-2 ml-3 ">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flowerdetail
