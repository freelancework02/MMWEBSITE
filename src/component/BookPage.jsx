import { Search, ChevronDown, User, ChevronRight } from "lucide-react";
import Image from '../../public/images/image 3.png'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#783F1D] text-white relative">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-amber-200 transition">
              Home
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              About Center
            </a>
            <div className="relative group">
              <a href="#" className="flex items-center font-bold hover:text-amber-200 transition">
                Books <ChevronDown className="h-4 w-4 ml-1" />
              </a>
            </div>
          </nav>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 md:top-2">
            <img
              src={Image}
              alt="Maula Ali Research Centre"
              width={120}
              height={120}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-white text-white pl-3 pr-8 py-1 rounded-full text-sm text-black focus:outline-none"
              />
              <Search className=" absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <a href="#" className="hover:text-amber-200 transition">
              Articles
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              Gallery
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              Contact
            </a>
            <a href="#" className="bg-amber-200 rounded-full p-2">
              <User className="h-5 w-5 text-[#783F1D]" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="bg-[#E9D9A8] flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-[#783F1D] text-3xl font-bold mb-4">Our Books</h1>
            <p className="max-w-3xl mx-auto text-center">
              Maula Ali Research Centre aims to research, publish, and distribute unpublished or inaccessible old
              Islamic manuscripts in multiple languages.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <input
              type="text"
              className="gulazrtext w-full py-3 px-4 rounded-full shadow-md text-right"
              placeholder=" تلاش کریں"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Category Pills */}
          <div className="gulazrtext flex flex-wrap justify-center gap-2 mb-8">
            {[
              { label: "نماسوں رسالت", count: 56 },
              { label: "عقائد", count: 236 },
              { label: "نماز", count: 22, active: true },
              { label: "اولیاء الله", count: 614 },
              { label: "رمضان المبارک", count: 56 }
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-full px-4 py-2 flex items-center ${
                  item.active
                    ? "bg-[#4A7C3A] text-white"
                    : "bg-amber-200 text-[#783F1D]"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-sm ${
                    item.active ? "bg-white text-[#4A7C3A]" : "bg-white"
                  }`}
                >
                  {item.count}
                </span>
              </div>
            ))}
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {["Writer", "Translator", "Language", "Sorting"].map((label, i) => (
              <div key={i}>
                <p className="text-sm text-gray-600 mb-1">{label}</p>
                <select className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>
                    {label === "Language"
                      ? "Urdu"
                      : label === "Sorting"
                      ? "Latest"
                      : "Hazrat Makhdoom Ali Mahaimi"}
                  </option>
                </select>
              </div>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sayedul Astagfar",
                img: "/book1.jpg",
                tag: "New"
              },
              {
                title: "Ghayatul Wajud",
                img: "/book2.jpg"
              },
              {
                title: "The Eloquenc",
                img: "/book3.jpg"
              },
              {
                title: "Zameerul Insan",
                img: "/book4.jpg"
              }
            ].map((book, i) => (
              <div key={i} className="bg-[#E8E5C7] rounded-lg p-4 relative">
                {book.tag && (
                  <div className="absolute top-6 left-6 bg-amber-500 text-white text-xs px-2 py-0.5 rounded">
                    {book.tag}
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="h-64 object-contain"
                  />
                </div>
                <h3 className="text-[#4A7C3A] text-xl font-bold mb-2">
                  {book.title}
                </h3>
                <div className="mb-1">
                  <p className="text-xs text-gray-600">Writer</p>
                  <p className="text-sm">Hazrat Makhdoom Ali Mahaimi</p>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-600">Translator</p>
                  <p className="text-sm">Mufti Farooq Mahaimi</p>
                </div>
                <div className="mb-3">
                  <span className="text-xs bg-[#4A7C3A] text-white px-2 py-0.5 rounded">
                    #Urdu
                  </span>
                </div>
                <div className="flex justify-between gap-2 flex-wrap">
                  <button className="text-[#4A7C3A] border border-[#4A7C3A] hover:bg-[#4A7C3A] hover:text-white px-3 py-1 rounded flex items-center">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                  <button className="text-[#4A7C3A] border border-[#4A7C3A] hover:bg-[#4A7C3A] hover:text-white px-3 py-1 rounded flex items-center">
                    Download <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
