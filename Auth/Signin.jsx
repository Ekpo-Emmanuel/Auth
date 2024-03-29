import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');


    // Regular expression for validating email format
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };
  
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const validateForm = () => {
        let isValid = true;

        if (email.trim() === '') {
            setEmailError('Please enter your email');
            isValid = false;
        } 

        if (password.trim() === '') {
            setPasswordError('Enter your password');
            isValid = false;
        } 

        return isValid;
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();

        console.log(email, password);
    }

    // Prevent form submission when Enter key is pressed
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };
  return (
    <section>
    <div className="relative flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
        <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white lg:py-24 md:flex-none md:px-28 sm:justify-center">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
            <div>
                <h2 className="text-4xl text-black">Let's get you in!</h2>
                <p className="mt-2 text-sm text-gray-500">
                
                </p>
            </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="mt-4 space-y-6">
            <div className="col-span-full">
            {emailError && <span className="mt-2 text-xs text-gray-500">{emailError}</span>}
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
                    {passwordError && <span className="mt-2 text-xs text-gray-500">{passwordError}</span>}
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
                <button
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    type="submit"
                >
                    Sign In
                </button>
                </div>
                <div className="col-span-full">
                    <p  className="mt-2 text-sm text-gray-500">Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Signin