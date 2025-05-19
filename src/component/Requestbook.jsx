import bg from "../../public/images/bg.png";
import Logo from "../../public/images/marclogo.png";
import React, { useState } from "react";
import {
  Check,
  Menu,
  X,
  Search,
  ChevronDown,
  User,
  ChevronRight,
} from "lucide-react";
import QrCode from '../../public/images/fake-qr.jpg' 

const Requestbook = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };
  return (
    <div className="w-full min-h-screen bg-[#f8efd0] relative overflow-hidden">
      <header className="bg-[#783F1D] text-white relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between relative">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-[15px] font-medium">
            <a href="/" className="hover:text-amber-300">
              Home
            </a>
            <a href="/about" className="hover:text-amber-300">
              About Center
            </a>
            <div className="relative group cursor-pointer">
              <div className="flex items-center hover:text-amber-300">
                Books <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 md:w-20 object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-5 font-medium text-[15px]">
            <a href="/articlefullpage" className="hover:text-amber-300">
              Articles
            </a>
            <a href="#" className="hover:text-amber-300">
              Gallery
            </a>
            <a href="#" className="hover:text-amber-300">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#783F1D] px-4 pb-5 space-y-4 text-[15px] font-medium z-10">
            <a href="/" className="block hover:text-amber-300">
              Home
            </a>
            <a href="/about" className="block hover:text-amber-300">
              About Center
            </a>
            <div className="block hover:text-amber-300 cursor-pointer">
              Books
            </div>
            <a href="/article" className="block hover:text-amber-300">
              Articles
            </a>
            <a href="/gallery" className="block hover:text-amber-300">
              Gallery
            </a>
            <a href="/contact" className="block hover:text-amber-300">
              Contact
            </a>

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full px-3 py-1 mt-2 w-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-black text-sm w-full"
              />
              <Search className="w-4 h-4 text-black ml-2" />
            </div>
          </div>
        )}
      </header>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-36 pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="absolute inset-0 bg-pattern opacity-20"></div>

      <div className="relative z-10 w-full py-8 px-4" >
        <div className="bg-[#E9D9A8] w-[60%] rounded-2xl mx-auto px-6 md:px-10 py-10 shadow mb-10 "  >
            <h1 className="text-[#783F1D] text-3xl font-bold text-center mb-2">Request a Books</h1>
            
          </div>

        <div className="max-w-md mx-auto bg-white rounded-md shadow-sm p-6 sm:p-8">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[#6b3c1a]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your name"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#6b3c1a]"
              >
                Email
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                />
                {isValidEmail && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                    <Check size={16} />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-[#6b3c1a]"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Your phone number"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-[#6b3c1a]"
              >
                Full Address{" "}
                <span className="text-xs text-gray-500">
                  (each street provided)
                </span>
              </label>
              <textarea
                id="address"
                placeholder="Write Full Address"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 min-h-[80px]"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="books"
                className="block text-sm font-medium text-[#6b3c1a]"
              >
                Select Book's
              </label>
              <select
                id="books"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Books
                </option>
                <option value="book1">The Great Gatsby</option>
                <option value="book2">To Kill a Mockingbird</option>
                <option value="book3">1984</option>
                <option value="book4">Pride and Prejudice</option>
                <option value="book5">The Catcher in the Rye</option>
              </select>
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-medium text-[#6b3c1a]">Donate</h3>
              <p className="text-xs text-gray-600 mt-1">
                Request a book by filling out the form below, and we&apos;ll do
                our best to assist you. If you wish to support our efforts in
                providing books to those in need, you can scan the QR code to
                donate. Your contribution is optional but greatly appreciated!
              </p>
              <div className="flex justify-center mt-4">
                <img
                  src={QrCode}
                  alt="Donation QR Code"
                  width="100"
                  height="100"
                  className="mx-auto"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6b3c1a] hover:bg-[#5a3315] text-white rounded px-4 py-2 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Requestbook;
