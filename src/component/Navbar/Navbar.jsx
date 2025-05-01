import React from 'react'
import image from '../../../public/images/image 2.png'

const Navbar = () => {
  return (
    <div>
         <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto flex items-center justify-between p-4">
                  <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-800 hover:text-green-700 font-medium">
                      Home
                    </a>
                    <a href="/about" className="text-gray-800 hover:text-green-700 font-medium">
                      About Center
                    </a>
                    <a href="/books" className="text-gray-800 hover:text-green-700 font-medium">
                      Books
                    </a>
                    <a href="/gallery" className="text-gray-800 hover:text-green-700 font-medium">
                      Gallery
                    </a>
                  </nav>
        
                  <div className="mx-auto md:mx-0">
                    <img
                      src={image}
                      alt="Maula Ali Research Centre Logo"
                      width={60}
                      height={60}
                      className="h-12 w-auto"
                    />
                  </div>
        
                  <nav className="hidden md:flex space-x-6">
                    <a href="/news" className="text-gray-800 hover:text-green-700 font-medium">
                      News
                    </a>
                    <a href="/article" className="text-gray-800 hover:text-green-700 font-medium">
                      Articles
                    </a>
                    <a href="/operations" className="text-gray-800 hover:text-green-700 font-medium">
                      Operations
                    </a>
                    <a href="/contact" className="text-gray-800 hover:text-green-700 font-medium">
                      Contact
                    </a>
                  </nav>
        
                  {/* Mobile menu button */}
                  <button className="md:hidden text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </header>
        
    </div>
  )
}

export default Navbar