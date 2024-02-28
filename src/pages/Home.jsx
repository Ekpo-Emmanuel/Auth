import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ user }) {

  return (
    <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex w-full mx-auto">
            <div className="relative inline-flex items-center m-auto align-middle">
            <div className="relative max-w-6xl p-10 overflow-hidden bg-white rounded-3xl lg:p-20">
                <div className="relative max-w-lg">
                <div>
                    <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                        Bharat Project 2
                    </p>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        Use this paragraph to share information about your company or products. Make
                        it engaging and interesting, and showcase your brand's personality. Thanks for
                        visiting our website!
                    </p>
                </div>
                    {user ? (
                        <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                            <Link to="/dashboard" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                                Go to Dashboard
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                            <Link to="/sign-up" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                                Sign Up
                            </Link>
                            <Link to="/sign-in" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                                Sign in &nbsp; →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}
