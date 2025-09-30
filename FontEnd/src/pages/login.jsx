import React from 'react'
import '../App.css'
import SpotifyLogo from '../assets/Spotify_logo.png'

function Login() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex flex-col justify-center items-center bg-white px-16">
                {/* Logo */}
                <div className="mb-8 w-full flex justify-between items-center">
                    <img src={SpotifyLogo} alt="Spotify" className="h-8" />
                    <div className="text-gray-600 bg-gray-100 px-4 py-2 rounded-full flex items-center">
                        Bạn đang đăng nhập vào <span className="ml-2 font-bold">Spotify</span>
                    </div>
                </div>
                {/* Title */}
                <h1 className="text-3xl font-semibold mb-8">Đăng nhập vào tài khoản của bạn</h1>
                {/* Login buttons */}
                <button className="w-full flex items-center justify-center bg-green-500 text-white py-3 rounded-full mb-4 font-medium">
                    <span className="mr-2"></span> Đăng nhập
                </button>
                <hr className="w-full my-6" />
                <button className="w-full flex items-center justify-center bg-white border py-3 rounded-full mb-4 font-medium">
                    <span className="mr-2">📧</span> Đăng nhập bằng email
                </button>
                <button className="w-full flex items-center justify-center bg-white border py-3 rounded-full mb-4 font-medium">
                    <span className="mr-2">🌐</span> Đăng nhập bằng Google
                </button>
                {/* Signup link */}
                <div className="mt-4 text-gray-500">
                    Bạn chưa có tài khoản? <span className="text-blue-600 cursor-pointer">Đăng ký</span>
                </div>
                {/* Terms */}
                <div className="mt-8 text-xs text-gray-400 text-center">
                    By continuing, you agree to Spotify <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                </div>
            </div>
            {/* Right side: Background image */}
            <div className="w-1/2 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a]">

                {/* Spotify Logo - large and centered */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                    <div className="mt-32">
                        <img
                            src={SpotifyLogo}
                            alt="Spotify Logo"
                            className="w-20 h-20 "
                        /></div>
                    <div className="relative flex h-12 w-full items-center justify-center overflow-hidden bg-black">
                        <span className="absolute text-white text-xl animate-typewriter" style={{ animationDelay: '0ms' }}>
                            Chữ thứ nhất xuất hiện ở giữa
                        </span>

                        <span className="absolute text-white text-xl animate-typewriter" style={{ animationDelay: '4000ms' }}>
                            Rồi thu vào… tới chữ thứ hai
                        </span>

                        <span className="absolute text-white text-xl animate-typewriter" style={{ animationDelay: '8000ms' }}>
                            Cuối cùng là chữ thứ ba
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login