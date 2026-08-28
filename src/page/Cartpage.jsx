
import React from "react";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { useCart } from "../context/Cartcontext";

function Cartpage() {
    const { cart, Decrement, Increment, Remove } = useCart();

    const subttal = cart.reduce(
        (total, item) => total + Number(item.price) * item.qty,
        0
    );

    const delivery = 1;
    const total = subttal + delivery;

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto mb-6">
                <h1 className="text-3xl text-center font-bold text-gray-800">
                    Shopping Cart
                </h1>
                <p className="text-gray-500 text-center mt-1">
                    Review your items before checkout
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">

                    {cart.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
                            <h2 className="text-xl font-semibold text-gray-700">
                                Your cart is empty
                            </h2>
                            <p className="text-gray-400 mt-2">
                                Add some products to your cart.
                            </p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-5">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                                    <p className="text-red-500 font-bold mt-1">${Number(item.price).toFixed(2)}</p>
                                    <div className="flex mt-3">
                                        <button onClick={() => Decrement(item.id)} className=" hover:bg-red-700  text-white rounded bg-red-600 p-1 "><TiMinus /></button>
                                        <p>{item.qty}</p>
                                        <button onClick={() => Increment(item.id)} className='bg-blue-600 hover:bg-blue-700 text-white rounded p-1'><FaPlus /></button>

                                    </div>
                                </div>

                                {/* Price + Remove */}
                                <div className="text-right">
                                    <p className="text-lg font-bold text-red-500">${(Number(item.price) * item.qty).toFixed(2)}</p>
                                    <button onClick={() => Remove(item.id)} className="text-sm text-red-400 hover:text-red-600 mt-3">Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>


                <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-0">
                    <h2 className="text-xl font-bold text-gray-800 mb-5">Order Summary</h2>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="font-semibold">${subttal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Delivery</span>
                        <span className="font-semibold">${delivery.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-4">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-xl font-bold text-red-500">${total.toFixed(2)}</span>
                    </div>
                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">Checkout</button>

                </div>


            </div>
        </div>
    );
}

export default Cartpage;