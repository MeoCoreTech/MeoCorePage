import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false)

    const title: string = "MeoCorePage"
    // const menuButton = document.getElementById('menu-button');
    // const mobileMenu = document.getElementById('mobile-menu');

    // menuButton.addEventListener('click', () => {
    //   mobileMenu.classList.toggle('hidden');
    // });
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold text-gray-900">{title}</a>
                    </div>
                    <div className="flex lg:hidden">
                        <button id="menu-button" className="text-gray-900 focus:outline-none">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className="hidden lg:flex lg:items-center lg:space-x-6">
                        <a href="#" className="text-gray-900 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-900 hover:text-blue-600">Service</a>
                        <a href="#" className="text-gray-900 hover:text-blue-600">Services</a>
                        <a href="#" className="text-gray-900 hover:text-blue-600">Contact</a>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 h-svh">
                    <a href="#" className="block text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">Home</a>
                    <a href="#" className="block text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">About</a>
                    <a href="#" className="block text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">Services</a>
                    <a href="#" className="block text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">Contact</a>
                </div>
            </div>
        </nav>
    );
}
