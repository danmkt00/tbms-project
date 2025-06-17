'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type RegistrationFormProps = {
    toggleForm: () => void;
};

const RegistrationForm = ({ toggleForm }: RegistrationFormProps) => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 5) {
            setError('Password must be longer than 5');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            console.log({
                name,
                surname,
                email,
                phone,
                password,
                confirmPassword
            });
            router.push('/');
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl px-10 py-10 bg-white shadow-lg rounded-xl space-y-6"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Register
                </h2>

                {error && (
                    <div className="text-red-500 text-sm text-center font-medium">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 w-full px-4 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="surname"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Surname
                        </label>
                        <input
                            id="surname"
                            type="text"
                            required
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="mt-1 w-full px-4 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

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
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 w-full px-4 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => {
                                setError('');
                                setConfirmPassword(e.target.value);
                            }}
                            className="mt-1 w-full px-4 py-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
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
                    Register
                </button>

                <p className="w-full mt-4 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <span
                        onClick={toggleForm}
                        className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                    >
                        Login here
                    </span>
                </p>
            </form>
        </div>
    );
};

export default RegistrationForm;
