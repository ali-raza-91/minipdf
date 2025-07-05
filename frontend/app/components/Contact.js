import React from 'react';
import Link from 'next/link';
const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 px-8 py-0 my-0 scroll-x-none">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-1">
               Free Register
            </h1>

            <form className="bg-white shadow-xl rounded-sm p-6 mt-10 w-full max-w-md space-y-4 ">
                <h3 className='text-lg font-bold text-gray-800'>Note: All Fields are required</h3>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-sm  outline-none"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border rounded-sm  outline-none"
                />
                <input
                    type="password"
                    placeholder="Create Password"
                    className="w-full p-3 border rounded-sm   outline-none"
                />
                <input
                    type="text"
                    placeholder="Country"
                    className="w-full p-3 border rounded-sm   outline-none"
                />

                {/* Gender Selection */}
                <div className="space-y-2">
                    <p className="font-medium text-gray-700">Gender</p>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-1">
                            <input type="radio" name="gender" value="Male" />
                            Male
                        </label>
                        <label className="flex items-center gap-1">
                            <input type="radio" name="gender" value="Female" />
                            Female
                        </label>
                        <label className="flex items-center gap-1">
                            <input type="radio" name="gender" value="Other" />
                            Other
                        </label>
                    </div>
                </div>

                {/* Passion Dropdown */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Your Passion</label>
                    <select className="w-full p-3 border rounded-md  ">
                        <option value="">Select...</option>
                        <option value="Student">Student</option>
                        <option value="Job">Job</option>
                        <option value="Business">Business</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-green-800 text-white font-bold rounded-md hover:bg-green-900 transition"
                >
                    Sign Up
                </button>
                <p className='text-sm text-gray-800 text-center'>Already have an account? <Link href="/login" className='text-green-800'>Login Now</Link></p>
            </form>
        </div>
    );
};

export default Contact;
