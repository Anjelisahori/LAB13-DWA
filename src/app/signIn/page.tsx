'use client'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleSignIn = async () => {
        const result = await signIn('google', {
            callbackUrl: '/dashboard',
            redirect: false
        });
        if (result?.ok) {
            router.push('/dashboard');
        }
    };

    const handleGithubSignIn = async () => {
        const result = await signIn('github', {
            callbackUrl: '/dashboard',
            redirect: false
        });
        if (result?.ok) {
            router.push('/dashboard');
        }
    };

    const handleCredentialsSignIn = async (e: React.MouseEvent) => {
        e.preventDefault();
        setError('');

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError(result.error);
        } else if (result?.ok) {
            router.push('/dashboard');
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
                            <span className="text-white text-2xl font-bold">M</span>
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Welcome Back
                        </h1>
                        <p className="text-gray-500 mt-2">Sign in to continue your journey</p>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="space-y-3 mb-6">
                        <button 
                            onClick={handleGoogleSignIn}
                            className="w-full group relative overflow-hidden bg-white hover:bg-gray-50 text-gray-700 py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-base font-semibold border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg">
                            <FaGoogle className="text-xl text-red-500" />
                            <span>Continue with Google</span>
                        </button>
                        
                        <button 
                            onClick={handleGithubSignIn}
                            className="w-full group relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-white py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-base font-semibold hover:shadow-lg hover:shadow-gray-900/50">
                            <FaGithub className="text-xl" />
                            <span>Continue with GitHub</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative bg-white px-4">
                            <span className="text-sm text-gray-500 font-medium">or continue with email</span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Credentials Form */}
                    <div className="space-y-4">
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
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                    Password
                                </label>
                                <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                                    Forgot?
                                </button>
                            </div>
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
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleCredentialsSignIn}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3.5 px-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/50 transform hover:-translate-y-0.5"
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don't have an account?{' '}
                        <Link href="/signUp" className="font-semibold text-indigo-600 hover:text-indigo-700">
                            Create Account
                        </Link>
                    </p>
                </div>

                {/* Security Badge */}
                <div className="text-center mt-6">
                    <p className="text-white/80 text-sm flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Secured with industry-standard encryption
                    </p>
                </div>
            </div>
        </div>
    );
}