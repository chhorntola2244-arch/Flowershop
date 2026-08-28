import React from 'react'
function Home() {

    return (
        <div className='h-full' >
            <div className="bg-pink-200 shadow-lg w-full h-96">

                <p className="text-pink-500 font-bold tracking-widest text-lg text-center">WELCOME TO FLOWER SHOP</p>
                <h1 className="text-6xl font-bold text-gray-800 leading-tight mt-5 text-center">Beautiful Flowers For <br /> Every Moment</h1>
                <p className="text-gray-600 text-lg mt-6  text-center  leading-8">Discover fresh and beautiful flowers for <br /> birthdays,weddings,anniversaries and every special moment.</p>

            </div>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-pink-500">Our Beautiful Flowers  </h2>
                <p className="text-gray-400 mt-3"> Choose your favorite flowers</p>
            </div>

            <div className="flex justify-center gap-8">

                <div className="w-72  bg-white rounded-2xl shadow-lg p-2 hover:-translate-y-2 transition">

                    <img className="w-full h-72 object-cover rounded-xl" src="https://i.pinimg.com/736x/8a/0e/12/8a0e1225e8490fd11d0504402d4097a7.jpg" alt="" />
                    <h3 className="text-xl font-bold text-gray-800 mt-4 text-center">  Luxury Bouquet </h3>
                    <p className="text-pink-500 font-bold text-lg mt-2 text-center">   $60.00    </p>
                </div>

                <div className="w-72  bg-white rounded-2xl shadow-lg p-2 hover:-translate-y-2 transition">
                    <img className="w-full h-72 object-cover rounded-xl" src="https://i.pinimg.com/736x/5d/46/89/5d46896903fb081347513fbeef373266.jpg" alt="" />
                    <h3 className="text-xl font-bold text-gray-800 mt-4 text-center">Mixed Flower </h3>
                    <p className="text-pink-500 font-bold text-lg mt-2 text-center">$45.00</p>
                </div>

                <div className="w-72 bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
                    <img className="w-full h-72 object-cover rounded-xl" src="https://i.pinimg.com/1200x/d8/95/21/d8952115067297c3545ad8d200b07844.jpg" alt="" />
                    <h3 className="text-xl font-bold text-gray-800 mt-4 text-center">Sunflowers</h3>
                    <p className="text-pink-500 font-bold text-lg mt-2 text-center">$18.00</p>
                </div>

            </div>



        </div>




    )
}

export default Home