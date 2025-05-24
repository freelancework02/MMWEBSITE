import { Search, ChevronDown,ChevronRight, Eye } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import bg from "../../public/images/bg.png";
import logo from "../../public/images/marclogo.png";
import { useNavigate } from "react-router-dom";

const NewandEvent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [event, setEvent] = useState([]);
    const scrollRef = useRef(null);

      useEffect(() => {
        const fetchData = async () => {
          try {
        
            const Eventres = await fetch(
              "https://newmmdata-backend.onrender.com/api/events"
            );
            const EventData = await Eventres.json();
            setEvent(EventData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };


    // ✅ Auto-scroll effect
    useEffect(() => {
      const interval = setInterval(() => {
        if (!scrollRef.current) return;
  
        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
        if (scrollLeft >= maxScrollLeft) {
          // Scroll back to start when end is reached
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll right
          container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
        }
      }, 2000); // change every 4 seconds
  
      return () => clearInterval(interval); // cleanup on unmount
    }, []);
  return (
    <div className="min-h-screen bg-[#e4f0d0] relative">
        
      <div
        className="absolute inset-0 opacity-36 pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <header className="bg-[#718e56]  sticky top-0  z-50  shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 relative pb-2">
          <div className="flex justify-between items-center py-5">
            {/* Desktop Left Nav */}
            <nav className="hidden md:flex gap-6 text-md font-medium text-white">
              <a href="/" className="hover:text-gray-700">
                Home
              </a>
              <a href="/about" className="hover:text-gray-700">
                About Center
              </a>
              <a href="/books" className="hover:text-gray-700">
                Books
              </a>
              <a href="/gallery" className="hover:text-gray-700">
                Gallery
              </a>
            </nav>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 bg-white rounded-full p-1 shadow-md">
              <img
                src={logo}
                alt="Maula Ali Research Centre Logo"
                width={64}
                height={64}
                className="rounded-full object-contain"
              />
            </div>

            {/* Desktop Right Nav */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
              <a href="/news" className="hover:text-gray-700">
                News
              </a>
              <a href="/article" className="hover:text-gray-700">
                Articles
              </a>
              <a href="/question" className="hover:text-gray-700">
                Questions
              </a>
              <a href="/contact" className="hover:text-gray-700">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 space-y-2 text-sm font-medium text-black">
              <a href="/" className="block hover:text-green-700">
                Home
              </a>
              <a href="/about" className="block hover:text-green-700">
                About Center
              </a>
              <a href="/books" className="block hover:text-green-700">
                Books
              </a>
              <a href="/gallery" className="block hover:text-green-700">
                Gallery
              </a>
              <a href="/news" className="block hover:text-green-700">
                News
              </a>
              <a href="/article" className="block hover:text-green-700">
                Articles
              </a>
              <a href="/question" className="block hover:text-green-700">
                Questions
              </a>
              <a href="/contact" className="block hover:text-green-700">
                Contact
              </a>
            </div>
          )}
        </div>
      </header>

      <div className="flex items-center justify-center  h-[200px] w-full bg-[#C0D7AA]/80 rounded-b-4xl">
        <h1 className="gulzartext text-3xl md:text-4xl font-bold text-[#4a7031] text-center rtl px-4">
          News and Events
        </h1>
      </div>

      <section className="w-full py-10 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-b from-white rounded-3xl shadow-md px-6 py-8 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              News & Events
            </h2>
          </div>

          {/* Manual Arrows */}
          <div className="absolute left-4 top-[50%] -translate-y-1/2 z-10 ">
            <button
              onClick={() => scroll("left")}
              className="bg-[#e2f0d0] rounded-full p-2 hover:bg-[#d2e3bc] transition"
            >
              <ChevronRight className="h-5 w-5 text-green-700 rotate-180 cursor-pointer" />
            </button>
          </div>
          <div className="absolute right-4 top-[50%] -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className="bg-[#e2f0d0] rounded-full p-2 hover:bg-[#d2e3bc] transition"
            >
              <ChevronRight className="h-5 w-5 text-green-700 cursor-pointer" />
            </button>
          </div>

          {/* Scrollable Cards Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar cursor-pointer"
          >
            {event.map((event, idx) => (
              <div
                key={idx}
                className="w-[90%] sm:w-[47%] md:w-[47%] lg:w-[23%] mb-2 flex-shrink-0 bg-gradient-to-b from-[#f6fbf1] rounded-2xl p-4 shadow-md"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={`https://newmmdata-backend.onrender.com/api/events/image/${event.id}`}
                    alt={event.title}
                    className="w-full h-[160px] object-cover rounded-xl"
                  />
                </div>
                <h3 className="gulzartext text-green-800 text-lg font-bold mb-1 ">
                  {event.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 gulzartext line-clamp-1">
                  {event.content}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="/article"
                    className="flex items-center text-sm text-yellow-700 bg-yellow-50 px-3 py-1.5 rounded-full hover:bg-yellow-100 transition"
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                  <span className="text-sm text-gray-500">
                    View {event.views}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/article"
              className="px-8 py-2 bg-white shadow-md border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
            >
              View All
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewandEvent;
