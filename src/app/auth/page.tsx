'use client';

import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegistrationForm from '@/components/RegistrationForm';

const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => setShowLogin((prev) => !prev);

    return (
        <div>
            {showLogin ? (
                <LoginForm toggleForm={toggleForm} />
            ) : (
                <RegistrationForm toggleForm={toggleForm} />
            )}
        </div>
    );
};

export default AuthPage;
