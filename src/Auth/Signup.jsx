import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../firebaseConfig';

function Signup({ user }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigate();

    useEffect(() => {
        if (user) {
            navigation('/dashboard');
        }
    }, [user, navigation]);

    // Regular expression for validating email format
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };
  
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    
    // Prevent form submission when Enter key is pressed
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    //handle firebase errors
    const handleFirebaseError = (errorCode) => {
        switch (errorCode) {
            case 'auth/invalid-email':
                return 'Please enter a valid email address.';
            default:
                return 'An error occurred. Please try again later.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                // console.log('User signed in:', user);

                // Send email verification
                await sendEmailVerification(user);

                // Clear form fields and errors
                setEmail('');
                setPassword('');
                setEmailError('');
                setPasswordError('');
                setError('');

                // Navigate to dashboard
                navigation('/dashboard');
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = handleFirebaseError(errorCode);
                if (errorCode === 'auth/invalid-email') {
                    setEmailError('Please enter a valid email address.');
                } else if (errorCode === 'auth/missing-email') {
                    setEmailError('Please enter a valid email address.');
                } else if (errorCode === 'auth/email-already-in-use') {
                    setEmailError('Email is already in use. Sign in or choose a different email address.');
                }
                else if (errorCode === 'auth/weak-password') {
                    setPasswordError('The password is too weak. Please choose a stronger password.');
                } else if (errorCode === 'auth/missing-password') {
                    setPasswordError('Please enter a password.');
                } 
                else {
                    setError(errorMessage);
                }
                // console.error('Error signing in:', errorCode, errorMessage);
                // setError(errorMessage);
            }
    
    }

  return (
    <section>
    <div className="relative flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
        <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white lg:py-24 md:flex-none md:px-28 sm:justify-center">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
            <div>
                <h2 className="text-4xl text-black">Let's get started!</h2>
                <p className="mt-2 text-sm text-gray-500">
                
                </p>
            </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="mt-4 space-y-6">
                <div className="col-span-full">
                    {emailError && <span className="mt-2 text-xs text-gray-500" style={{ color: 'red' }}>{emailError}</span>}
                    <input
                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="email@example.com"
                        autoComplete="off"
                        type="default"
                        onChange={handleEmailChange}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div className="col-span-full">
                    {passwordError && <span className="mt-2 text-xs text-gray-500" style={{ color: 'red' }}>{passwordError}</span>}
                <input
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="password"
                    autoComplete="off"
                    type="password"
                    onChange={handlePasswordChange}
                    onKeyPress={handleKeyPress}
                />
                </div>
                
                <div className="col-span-full">
                {error && <span className="mt-2 text-xs text-gray-500" style={{ color: 'red' }}>{error}</span>}
                <button
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                    Sign Up
                </button>
                </div>
                <div className="col-span-full">
                    <p className="mt-2 text-sm text-gray-500">Already have an account? <Link to="/sign-in">Sign In</Link></p>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Signup