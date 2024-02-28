import React from 'react'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function Dashboard() {

  const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            // Redirect to the sign-in page after successful sign-out
            navigate('/sign-in');
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };
  return (
    <>
      {/* <Sidebar logout={handleSignOut}/> */}
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex w-full mx-auto">
            <div className="relative inline-flex items-center m-auto align-middle">
            <div className="relative max-w-6xl p-10 overflow-hidden bg-white rounded-3xl lg:p-20">
                <div className="relative max-w-lg">
                <div>
                    <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                        You are signed in
                    </p>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        Use this paragraph to share information about your company or products. Make
                        it engaging and interesting, and showcase your brand's personality. Thanks for
                        visiting our website!
                    </p>
                </div>
                    <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                        <button onClick={handleSignOut} className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                            Signout
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

