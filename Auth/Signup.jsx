import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // Regular expression for validating email format
    const validateEmail = (email) => {
        const reg = /^[^\s@+]+@[^\s@]+\.[^\s@]+$/;
        return reg.test(email);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
        setEmailExists(false);
    };
  
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordError('');
    }

    const validateForm = () => {
        let isValid = true;

        if (email.trim() === '') {
            setEmailError('Please enter your email');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        if (password.trim() === '') {
            setPasswordError('Enter your password');
            isValid = false;
        } else if (password.length < 4) {
            setPasswordError('Password too short');
            isValid = false;
        } else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            isValid = false;
        }

        return isValid;
    };

    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if(isValid) {
            // const [newEmail, newPassword] = [email, password];
            // console.log(newEmail, newPassword);
            try {
                const response = await axios.get(`http://localhost:5000/users/${email}`);
                const { exists } = response.data;

                if (exists) {
                    setEmailError('Email already exists');
                    return;
                } else {
                    const [newEmail, newPassword] = [email, password];
                    console.log(newEmail, newPassword);

                    // Continue with form submission if email does not exist
                    await axios.post('http://localhost:5000/submit-form', {
                        email,
                        password
                });
                console.log('Form submitted successfully');

                navigate('/sign-in');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
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
                <h2 className="text-4xl text-black">Let's get started!</h2>
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
                <input
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="confirm password"
                    autoComplete="off"
                    type="password"
                    onChange={handleConfirmPasswordChange}
                    onKeyPress={handleKeyPress}
                />
                </div>
                <div className="col-span-full">
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