import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <main className="flex items-center justify-center h-screen bg-black">
        <div className="px-4 py-16 mx-auto text-center lg:px-8 lg:py-48 max-w-7xl sm:px-6 sm:py-24">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
    
            <p className="text-5xl tracking-tight text-white  lg:text-9xl">
                404
            </p>
            <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
                Please check the URL in the address bar and try again.
            </p>
            </div>
            <div className="flex justify-center gap-3 mt-10">
                <Link to="/" className="items-center justify-center w-full px-6 py-2.5 bg-white text-center text-black duration-200 bg-black border-2 border-black rounded-full inline-flex ">
                    Back to Home
                </Link>
            </div>
        </div>
        </div>
    </main>
  )
}
