import { Search, ChevronDown, User, ChevronRight } from "lucide-react";
import bg from "../../public/images/bg.png";
import Logo from "../../public/images/marclogo.png";
import Book1 from "../../public/OurBooks/book1.png";
import Book2 from "../../public/OurBooks/book2.png";
import Book3 from "../../public/OurBooks/book3.png";
import Book4 from "../../public/OurBooks/book4.png";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header */}
      <header className="bg-[#783F1D] text-white relative z-10 ">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between pt-4 px-4 py-2 relative">
          <nav className="flex items-center space-x-5 text-[15px] font-medium">
            <a href="/" className="hover:text-amber-300">Home</a>
            <a href="/about" className="hover:text-amber-300">About Center</a>
            <div className="relative group cursor-pointer">
              <div className="flex items-center hover:text-amber-300">
                Books <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
          </nav>

          <div className="absolute left-1/2 top-2 transform -translate-x-1/2">
            <img src={Logo} alt="Logo" className="w-16 md:w-20 object-contain" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border bg-white text-black pl-3 pr-8 py-1 rounded-full text-sm focus:outline-none"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <a href="/articlefullpage" className="hover:text-amber-300">Articles</a>
            <a href="#" className="hover:text-amber-300">Gallery</a>
            <a href="#" className="hover:text-amber-300">Contact</a>
            <a href="#" className="bg-amber-300 rounded-full p-2">
              <User className="h-5 w-5 text-[#783F1D]" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="flex-grow bg-[#f5f3e6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">

          {/* Our Books Section */}
          <div className="bg-[#E9D9A8] w-full rounded-2xl mx-auto px-6 md:px-10 py-10 shadow mb-10">
            <h1 className="text-[#783F1D] text-3xl font-bold text-center mb-2">Our Books</h1>
            <p className="text-center max-w-2xl mx-auto text-[16px] mb-8">
              Maula Ali Research Centre aims to research, publish, and distribute unpublished or inaccessible old Islamic manuscripts in multiple languages.
            </p>
          </div>

          {/* Urdu Search */}
          <div className="relative max-w-lg mx-auto mb-8">
            <input
              type="text"
              className="gulzartext w-full bg-white py-3 px-4 rounded-full text-center shadow text-[18px] font-medium"
              placeholder=" تلاش کریں"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 text-[16px]">
            {[
              { label: "نماسوں رسالت", count: 56 },
              { label: "عقائد", count: 236 },
              { label: "نماز", count: 22, active: true },
              { label: "اولیاء الله", count: 614 },
              { label: "رمضان المبارک", count: 56 },
            ].map((item, i) => (
              <div
                key={i}
                className={`gulzartext flex items-center px-4 py-1.5 rounded-full ${
                  item.active
                    ? "bg-[#4A7C3A] text-white"
                    : "bg-[#E9D9A8] text-[#783F1D] hover:bg-amber-100 border-white shadow-md"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`ml-2 bg-white px-2 py-0.5 text-sm rounded-full ${
                    item.active ? "text-[#4A7C3A]" : ""
                  }`}
                >
                  {item.count}
                </span>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {["Writer", "Translator", "Language", "Sorting"].map((label, i) => (
              <div key={i}>
                <p className="text-sm text-[#783F1D] font-bold mb-2">{label}</p>
                <select className="w-full border-b border-gray-300 rounded px-3 py-2 text-sm bg-[#f5f3e6]">
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

          {/* Books */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-10">
            {[
              { title: "Sayedul Astagfar", img: Book1, tag: "New" },
              { title: "Ghayatul Wajud", img: Book2 },
              { title: "The Eloquenc", img: Book3 },
              { title: "Zameerul Insan", img: Book4 },
            ].map((book, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-white border border-white p-4 rounded-lg hover:shadow-lg transition relative"
              >
                {book.tag && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-2 py-0.5 rounded">
                    {book.tag}
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  <img src={book.img} alt={book.title} className="h-64 object-contain" />
                </div>
                <h3 className="text-[#4A7C3A] text-lg font-bold text-center mb-2">{book.title}</h3>
                <div className="text-left text-xs text-gray-600">Writer</div>
                <div className="text-left text-[15px] mb-2">Hazrat Makhdoom Ali Mahaimi</div>
                <div className="text-left text-xs text-gray-600">Translator</div>
                <div className="text-left text-[15px] mb-2">Mufti Farooq Mahaimi</div>
                <div className="text-left mb-3">
                  <span className="text-xs bg-[#4A7C3A] text-white px-2 py-0.5 rounded">#Urdu</span>
                </div>
                <div className="flex justify-center gap-2 flex-wrap">
                  <button className="text-[#783F1D] border border-black hover:bg-[#783F1D] hover:text-white px-3 py-1 rounded flex items-center text-sm">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                  <button className="text-[#4A7C3A] border border-[#4A7C3A] hover:bg-[#4A7C3A] hover:text-white px-3 py-1 rounded flex items-center text-sm">
                    Download <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer Spacer */}
     
    </main>
  );
}
