'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUserPlus, FaUser, FaEnvelope, FaLock, FaCheckCircle } from 'react-icons/fa';

export default function SignUpPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Error al registrar el usuario.');
            } else {
                // Mostrar mensaje de éxito y redirigir
                router.push('/signIn?registered=true');
            }
        } catch (err) {
            setError('Ocurrió un error de red o de servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Main Card */}
            <div className="relative w-full max-w-md">
                {/* Glassmorphism Card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                    {/* Logo/Title */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
                            <FaUserPlus className="text-white text-2xl" />
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Create Account
                        </h1>
                        <p className="text-gray-500 mt-2">Join us today and start your journey</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                            <p className="text-red-700 text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Registration Form */}
                    <div className="space-y-4 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaUser className="text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                            </div>
                            <p className="mt-2 text-xs text-gray-500">
                                Must be at least 8 characters long
                            </p>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3.5 px-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    <FaUserPlus />
                                    Create Account
                                </>
                            )}
                        </button>
                    </div>

                    {/* Benefits Section */}
                    <div className="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <p className="text-sm font-semibold text-indigo-900 mb-2">What you'll get:</p>
                        <ul className="space-y-2">
                            {[
                                'Full access to all features',
                                'Priority customer support',
                                'Regular updates and improvements'
                            ].map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-indigo-700">
                                    <FaCheckCircle className="text-indigo-600 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/signIn" className="font-semibold text-indigo-600 hover:text-indigo-700">
                            Sign In
                        </Link>
                    </p>
                </div>

                {/* Terms & Privacy */}
                <p className="text-center text-xs text-white/80 mt-6 px-4">
                    By creating an account, you agree to our{' '}
                    <button className="underline hover:text-white">Terms of Service</button>
                    {' '}and{' '}
                    <button className="underline hover:text-white">Privacy Policy</button>
                </p>
            </div>
        </div>
    );
}