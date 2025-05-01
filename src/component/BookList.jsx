import React, { useState } from "react"
import Logo from '../../public/images/image 3.png'
import bookimg from '../../public/images/book.png'

export default function Home() {
  const [writer, setWriter] = useState("")
  const [translator, setTranslator] = useState("")
  const [language, setLanguage] = useState("")
  const [sorting, setSorting] = useState("")

  const Button = ({ children, className = "", ...props }) => (
    <button
      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  )

  const Select = ({ value, onChange, options = [], placeholder = "" }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#783517] text-sm"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )

  const SearchIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" strokeWidth="2"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"></line>
    </svg>
  )

  const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polyline points="9 18 15 12 9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-[#783517] text-white py-4 mt-8">
        <div className="container mx-auto flex items-center justify-between px-4 relative">
          <nav className="flex items-center space-x-6 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Center</a>
            <div className="relative group">
              <a href="#" className="flex items-center hover:underline font-semibold">
                Books <ChevronDownIcon className="ml-1 w-4 h-4" />
              </a>
            </div>
          </nav>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full bg-white p-1 shadow" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-white  pl-9 pr-4 py-1.5 rounded-full text-sm text-white focus:outline-none w-36"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <a href="#" className="hover:underline text-sm">Articles</a>
            <a href="#" className="hover:underline text-sm">Gallery</a>
            <a href="#" className="hover:underline text-sm">Contact</a>
            <div className="w-8 h-8 bg-[#e8d4a4] rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-[#e8d4a4] relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-10"></div>

        <div className="relative z-10">
          <div className="text-center py-10 px-4">
            <h1 className="text-4xl font-bold text-[#783517] mb-3">Our Books</h1>
            <p className="max-w-2xl mx-auto text-[#783517] text-sm leading-relaxed">
              Maula Ali Research Centre researches, publishes, and distributes old Islamic manuscripts in multiple languages.
            </p>
          </div>

          <div className="max-w-lg mx-auto px-4 mb-8">
            <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
              <input
                type="text"
                placeholder="تلاش کریں"
                className="gulazrtext flex-grow bg-transparent px-4 py-2 text-right focus:outline-none text-sm"
              />
              <button className="p-3">
                <SearchIcon className="text-[#783517]" />
              </button>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-3 px-4 mb-8">
            {["نماز", "اولیاء الله", "رمضان المبارک", "عقائد", "ناموس رسالت"].map((text, idx) => (
              <Button
                key={idx}
                className="bg-[#783517] gulazrtext text-white hover:bg-[#5f2d12]"
              >
                {text}
              </Button>
            ))}
          </div>

          <div className="container mx-auto px-4 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div><p className="mb-1 text-sm">Writer</p>
                <Select value={writer} onChange={setWriter} placeholder="Select Writer" options={[{ value: "hazrat", label: "Hazrat Makhdoom Ali Mahaimi" }]} />
              </div>
              <div><p className="mb-1 text-sm">Translator</p>
                <Select value={translator} onChange={setTranslator} placeholder="Select Translator" options={[{ value: "hazrat", label: "Hazrat Makhdoom Ali Mahaimi" }]} />
              </div>
              <div><p className="mb-1 text-sm">Language</p>
                <Select value={language} onChange={setLanguage} placeholder="Select Language" options={[{ value: "urdu", label: "Urdu" }]} />
              </div>
              <div><p className="mb-1 text-sm">Sorting</p>
                <Select value={sorting} onChange={setSorting} placeholder="Latest" options={[{ value: "latest", label: "Latest" }]} />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-300 hover:scale-[1.01]">
                  <div className="bg-[#f0f0e0] p-4 flex items-center justify-center md:w-48">
                    <div className="relative w-36 h-48">
                      <img src={bookimg} alt="Book" className="object-contain w-full h-full" />
                      <div className="absolute top-2 left-2 bg-[#f0a500] text-white text-xs px-2 py-0.5 rounded">New</div>
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="text-xl font-bold text-[#5a8d4d] mb-3">Sayedul Astagfar Book</h3>
                    <div className="text-sm text-gray-600 mb-4">
                      <p><span className="font-medium text-[#783517]">Writer:</span> Hazrat Makhdoom Ali Mahaimi</p>
                      <p><span className="font-medium text-[#783517]">Translator:</span> Mufti Farooq Mahaimi</p>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-[#e8d4a4] text-[#5a8d4d] text-xs px-2 py-0.5 rounded">#Urdu</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-[#5a8d4d] text-white hover:bg-[#4b7c3c] flex items-center">
                        Read More <ChevronRightIcon className="ml-2" />
                      </Button>
                      <Button className="bg-white text-[#5a8d4d] border border-[#5a8d4d] hover:bg-[#f0f0e0] flex items-center">
                        Download <ChevronDownIcon className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
