import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/Cartcontext'

function Shoppage() {


    const [flower, setFlower] = useState([])

    const { Addtocart } = useCart();

    useEffect(() => {
        fetch("../public/Data/flower.json")
            .then((res) => res.json())
            .then((Data) => {
                setFlower(Data)
            })
    })
    return (
        <div>
            <div className='bg-gray-200 w-full h-50'>
                <h1 className='text-center text-6xl font-bold text-gray-800 leading-tight '>Shop</h1>
                <p className='text-gray-600 text-lg mt-6  text-center  leading-8'>There Products</p>

            </div>
            <div className='grid grid-cols-4 mt-2 ml-11'>
                {flower.map((fl) =>
                    <div key={fl.id} className="w-72  bg-white rounded-2xl shadow-lg p-1 mt-3 ">

                        <img className="w-full h-72 object-cover rounded-xl" src={fl.image} alt="" />
                        <h3 className="text-xl font-bold text-gray-800 mt-4">   {fl.name} </h3>
                        <p className="text-pink-500 font-bold text-lg mt-2"> ${fl.price}    </p>
                        <div className="flex gap-2">
                            <button onClick={() => Addtocart(fl)} className="flex-1 rounded-full bg-pink-500 py-1 hover:bg-pink-600 text-white"> Add to Cart</button>
                            <Link to={`/flowers/${fl.id}`} className="flex-1 rounded-full py-1 bg-pink-500 hover:bg-pink-600 text-center text-white">View </Link>
                        </div>


                    </div>
                )}




            </div>
        </div>
    )
}

export default Shoppage
