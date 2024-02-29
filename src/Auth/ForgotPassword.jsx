import React, { useEffect, useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function ForgotPassword({ user }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');
    const [sucess, setSuccess] = useState('');

    const navigation = useNavigate();

    useEffect(() => {
        if (user) {
            navigation('/dashboard');
        }
    }, [user, navigation]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await sendPasswordResetEmail(auth, email);
            console.log('userCredential:', userCredential);
            setSuccess('If the email exists, a Password reset email sent. Please check your inbox.');
            setError('');
        } catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/invalid-email' || errorCode === 'auth/missing-email') {
                setEmailError('Please enter a valid email address.');
            } else if (errorCode === 'auth/too-many-requests') {
                setError('Too many request. Please try again later.');
                setSuccess('');
            } else if (errorCode === 'auth/network-request-failed') {
                setError('Network Error. Please try again.');
                setSuccess('');
            } else if (errorCode === 'auth/missing-email') {
                setEmailError('Please enter an email address.');
            } else {
                setError(errorMessage);
                setSuccess('');
            }
            console.error('Error signing in:', errorCode, errorMessage);
        };
    
    }

  return (
    <>
  <section>
    <div className="relative flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
        <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white lg:py-24 md:flex-none md:px-28 sm:justify-center">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
                <div>
                    <h2 className="text-4xl text-black">Forgot your Password?</h2>
                    <br/>
                </div>
            </div>
            {sucess && <span className="mt-2 text-xs" style={{ color: 'green' }}>{sucess}</span>}
            {error && <span className="mt-2 text-xs" style={{ color: 'red' }}>{error}</span>}
            <form onSubmit={handleSubmit}>
                <div className="mt-4 space-y-6">
                    <div className="col-span-full">
                        <span className="mt-2 text-xs"  style={{ color: 'red' }}>{emailError}</span>
                        <input
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="email@example.com"
                            autoComplete="off"
                            type="default"
                            onChange={handleEmailChange}
                            // onKeyPress={handleKeyPress}
                        />
                    </div>
                    <div className="col-span-full">
                        <button
                            className="items-center flex gap-2 justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                            type="submit"
                            disabled={error === 'Too many request. Please try again later.'}
                        >
                            Send Email <RiSendPlaneFill />
                        </button>
                    </div>
                    <div className="col-span-full">
                        <p  className="mt-2 text-sm text-gray-500"><Link to="/sign-in">Back to Sign In</Link></p>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
    </section>
  </>
  )
}
