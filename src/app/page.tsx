import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Shield, Clock, Lock, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Landing() {
    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center bg-white snap-start">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">Secure Employee Verification</h1>
                            <p className="text-xl md:text-2xl mb-6 text-gray-600">Revolutionizing trust in the workplace with blockchain technology</p>
                            <Link href="#how-it-works" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300">
                                Learn More
                            </Link>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" fill="#f5f5f5" />

                                <circle cx="100" cy="100" r="40" fill="#007bff" stroke="#004c99" strokeWidth="3" />
                                <circle cx="400" cy="100" r="40" fill="#007bff" stroke="#004c99" strokeWidth="3" />
                                <circle cx="100" cy="400" r="40" fill="#007bff" stroke="#004c99" strokeWidth="3" />
                                <circle cx="400" cy="400" r="40" fill="#007bff" stroke="#004c99" strokeWidth="3" />

                                <line x1="100" y1="100" x2="400" y2="100" stroke="#004c99" strokeWidth="3" strokeDasharray="5,5" />
                                <line x1="100" y1="100" x2="100" y2="400" stroke="#004c99" strokeWidth="3" strokeDasharray="5,5" />
                                <line x1="400" y1="100" x2="400" y2="400" stroke="#004c99" strokeWidth="3" strokeDasharray="5,5" />
                                <line x1="100" y1="400" x2="400" y2="400" stroke="#004c99" strokeWidth="3" strokeDasharray="5,5" />

                                <rect x="200" y="180" width="100" height="140" rx="10" fill="#ffcc00" stroke="#b38b00" strokeWidth="3" />
                                <circle cx="250" cy="210" r="20" fill="#333" />
                                <rect x="220" y="240" width="60" height="10" fill="#333" />
                                <rect x="220" y="260" width="60" height="10" fill="#333" />

                                <polygon points="250,320 270,340 250,360 230,340" fill="#ff6600" stroke="#cc5200" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="min-h-screen flex items-center justify-center bg-gray-100 snap-start">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Employee data is securely stored on the blockchain",
                            "Employers request verification with employee consent",
                            "Smart contracts validate the information",
                            "Verified results are instantly available",
                        ].map((step, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                                <p className="text-lg">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="min-h-screen flex items-center justify-center bg-white snap-start">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Tamper-Proof", description: "Blockchain ensures data integrity" },
                            { icon: Clock, title: "Instant Verification", description: "Get results in seconds, not days" },
                            { icon: Lock, title: "Privacy-Focused", description: "Employee controls data access" },
                        ].map((benefit, index) => (
                            <div key={index} className="text-center">
                                <benefit.icon className="mx-auto text-blue-500 w-16 h-16 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="min-h-screen bg-gray-900 text-white snap-start flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">BlockVerify</h2>
                            <p className="mb-4">Secure employee verification powered by blockchain technology.</p>
                            <div className="flex space-x-4">
                                <Link href="#" className="hover:text-blue-400">
                                    <Facebook />
                                </Link>
                                <Link href="#" className="hover:text-blue-400">
                                    <Twitter />
                                </Link>
                                <Link href="#" className="hover:text-blue-400">
                                    <Linkedin />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="hover:text-blue-400">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-400">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-400">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-400">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p>United States</p>
                            <p>5910 Shiloh rd E Ste 123, Alpharetta, GA 30005</p>
                            <p>India</p>
                            <p>JSP IMPERIA, 3rd Floor, Street No-3, Pathrikanagar, Hi-Tech city, Madhapur, Hyderabad, Telangana 500081 INDIA</p>
                            <p>Tel.040-40068214</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">E-mails</h3>
                            <p>Careers: jobs@accentiqa.com</p>
                            <p>Services: services@accentiqa.com</p>
                            <p>Products: products@accentiqa.com</p>
                            <p>Solutions: solutions@accentiqa.com</p>
                            <p>General: info@accentiqa.com</p>
                            <p>Tel: 040-40068214</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p>&copy; {new Date().getFullYear()} BlockVerify. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
