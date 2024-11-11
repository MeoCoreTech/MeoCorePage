
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white">
          <div className="bg-white pb-20">
                <div className="relative flex justify-center items-center">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 w-[85%] max-w-xl flex justify-between items-center px-6 py-4 rounded-lg shadow-lg">
                        <h2 className="text-xl md:text-2xl font-bold text-white">Ready to Get Started?</h2>
                        <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-gray-100">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="font-bold text-lg">MeoCorePage</h3>
                            <div className="flex justify-center md:justify-start mt-4 space-x-4">
                                <a href="#" className="bg-white text-blue-900 rounded-full p-2">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-blue-900 w-5 h-5" />
                                </a>
                                <a href="#" className="bg-white text-pink-600 rounded-full p-2">
                                    <FontAwesomeIcon icon={faInstagram} className="text-red-600 w-5 h-5" />
                                </a>
                                <a href="#" className="bg-white text-blue-400 rounded-full p-2">
                                    <FontAwesomeIcon icon={faTwitter} className="text-blue-400 w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">Contáctanos</h3>
                            <p className="mt-4">+00 123 456 789</p>
                            <p>leo@email.com</p>
                            <p>esteban@email.com</p>
                            <p>City, Street 12/3a</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">Servicios</h3>
                            <ul className="mt-4 space-y-2">
                                <li>SEO/SEM</li>
                                <li>Marketing</li>
                                <li>Social Media</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">Acerca de nosotros</h3>
                            <ul className="mt-4 space-y-2">
                                <li>News</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-400">
                        © Creado por MeoCorePage 2024
                    </div>
                </div>
            </div>
        </footer>
    );
}







