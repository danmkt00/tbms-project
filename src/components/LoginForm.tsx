'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type LoginFormProps = {
    toggleForm: () => void;
};

const LoginForm = ({ toggleForm }: LoginFormProps) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setTimeout(() => {
            router.push('/');
            setLoading(false);
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl px-10 py-10 bg-white shadow-lg rounded-xl space-y-6"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Login
                </h2>

                {error && (
                    <div className="text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full px-4 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => {
                            setError('');
                            setPassword(e.target.value);
                        }}
                        className="mt-1 w-full px-4 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {loading && (
                    <p className="text-center text-blue-600 font-medium">
                        Loading...
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg hover:bg-blue-700 transition cursor-pointer"
                >
                    Sign In
                </button>

                <p className="w-full mt-4 text-center text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <span
                        onClick={toggleForm}
                        className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                    >
                        Register here
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
