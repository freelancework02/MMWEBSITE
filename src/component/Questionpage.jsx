"use client"

import React, { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import bg from "../../public/images/bg.png";
import user from "../../public/images/user.png";
import logo from "../../public/images/marclogo.png";


export default function HomePage() {
    const [language, setLanguage] = useState("Urdu")
    const [sorting, setSorting] = useState("Latest")
    const [search, setSearch] = useState("")
    const [menuOpen, setMenuOpen] = useState(false);

    const questions = [
        {
            id: 1,
            text: "اگر آپ کو اس سوال کا جواب معلوم ہے تو براہ کرم جواب دیں۔ آپ کے جواب سے دوسروں کو مدد ملے گی۔ اگر آپ کو جواب نہیں معلوم تو آپ دوسروں کے جوابات دیکھ سکتے ہیں۔",
        },
        {
            id: 2,
            text: "یہ ایک اور سوال ہے جس کا جواب دینا فائدہ مند ہوگا۔",
        },
        {
            id: 3,
            text: "اس سوال پر آپ کی رائے کا انتظار ہے۔",
        },
        {
            id: 4,
            text: "اس سوال کا جواب دے کر آپ دوسروں کی مدد کر سکتے ہیں۔",
        },
        {
            id: 5,
            text: "یہ سوال عمومی فہم کے لیے اہم ہے۔",
        },
        {
            id: 6,
            text: "براہ کرم اس سوال پر تبصرہ کریں۔",
        },
    ]

    const filteredQuestions = questions.filter((q) =>
        q.text.toLowerCase().includes(search.toLowerCase())
    )

    const Dropdown = ({ label, selected, setSelected, options }) => {
        const [isOpen, setIsOpen] = useState(false)
        

        return (
            <div className="relative">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-600 mb-1">{label}</span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-md px-3 py-1.5 w-40"
                    >
                        <span>{selected}</span>
                        <ChevronDown className="h-4 w-4" />
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                        {options.map((option) => (
                            <div
                                key={option}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setSelected(option)
                                    setIsOpen(false)
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    const SectionHeader = ({ text }) => (
        <div className="flex justify-start mb-4">
            <div className="gulzartext bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm font-medium">{text}</div>
        </div>
    )

    const QuestionCard = ({ id, text }) => (
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1 rtl:flex-row-reverse">
                    <span className="gulzartext">سوال</span>
                    <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{id}</span>
                </div>
            </div>
            <p className="gulzartext text-right text-gray-800 mb-2">{text}</p>
            <div className="flex justify-end gap-2 mt-auto">
                <button className="bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm transition-colors">
                  Roman
                </button>
                <button className="gulzartext bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm transition-colors">
                    اردو
                </button>
            </div>
        </div>
    )

    return (
        <main dir="rtl" className="min-h-screen bg-[#f0f7e6] relative font-sans">

            {/* Navigation */}
                  <header className="bg-[#718e56] sticky top-0 z-50 shadow-md border-b border-green-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-between items-center py-4 relative">
                        {/* Left Menu */}
                        <nav className="hidden md:flex gap-6 text-md font-semibold text-white tracking-wide">
                          <a
                            href="/"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            Home
                          </a>
                          <a
                            href="/about"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            About Center
                          </a>
                          <a
                            href="/books"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            Books
                          </a>
                          <a
                            href="/gallery"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            Gallery
                          </a>
                        </nav>
            
                        {/* Logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-7 bg-white rounded-full p-1 shadow-lg border border-green-100 z-10">
                          <img
                            src={logo}
                            alt="Logo"
                            className="w-16 h-16 rounded-full object-contain"
                          />
                        </div>
            
                        {/* Right Menu */}
                        <nav className="hidden md:flex gap-6 text-md font-semibold text-white tracking-wide">
                          <a
                            href="/news"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            News
                          </a>
                          <a
                            href="/article"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            Articles
                          </a>
                          <a
                            href="/questions"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            Questions
                          </a>
                          <a
                            href="/contact"
                            className="hover:text-yellow-200 transition-all duration-200"
                          >
                            Contact
                          </a>
                        </nav>
            
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                          <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7"
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
            
                      {/* Mobile Dropdown */}
                      <div
                        className={`md:hidden transform transition-all duration-300 ease-in-out overflow-hidden ${
                          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col gap-3 py-4 px-2 text-white font-medium tracking-wide text-base bg-[#5a7544] rounded-b-xl">
                          <a href="/" className="hover:bg-[#4f6639] px-4 py-2 rounded">
                            Home
                          </a>
                          <a href="/about" className="hover:bg-[#4f6639] px-4 py-2 rounded">
                            About Center
                          </a>
                          <a href="/books" className="hover:bg-[#4f6639] px-4 py-2 rounded">
                            Books
                          </a>
                          <a
                            href="/gallery"
                            className="hover:bg-[#4f6639] px-4 py-2 rounded"
                          >
                            Gallery
                          </a>
                          <a href="/news" className="hover:bg-[#4f6639] px-4 py-2 rounded">
                            News
                          </a>
                          <a
                            href="/article"
                            className="hover:bg-[#4f6639] px-4 py-2 rounded"
                          >
                            Articles
                          </a>
                          <a
                            href="/question"
                            className="hover:bg-[#4f6639] px-4 py-2 rounded"
                          >
                            Questions
                          </a>
                          <a
                            href="/contact"
                            className="hover:bg-[#4f6639] px-4 py-2 rounded"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </header>

             {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-36 pointer-events-none"
                    style={{ backgroundImage: `url(${bg})` }}
                  ></div>

            <div className="relative z-10 container mx-auto px-4 py-6">
                {/* Header with sorting, language, and search */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="gulzartext block w-[40%] rounded-full bg-white border-0 py-2 px-4 text-right pr-10 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            placeholder="تلاش کریں"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                       <div className="flex gap-6">
                        <Dropdown
                            label="Sorting"
                            selected={sorting}
                            setSelected={setSorting}
                            options={["Latest", "Oldest", "Most Answered", "Least Answered"]}
                        />
                        <Dropdown
                            label="Language"
                            selected={language}
                            setSelected={setLanguage}
                            options={["Urdu", "English", "Arabic"]}
                        />
                    </div>
                    </div>
                </div>

                {/* First Section */}
                <SectionHeader text="قرآن کی تعلیمات" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {filteredQuestions.slice(0, 6).map((q) => (
                        <QuestionCard key={q.id} id={q.id} text={q.text} />
                    ))}
                </div>

                {/* Second Section */}
                <SectionHeader text="حدیث کے سوال" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {filteredQuestions.slice(0, 4).map((q) => (
                        <QuestionCard key={`section2-${q.id}`} id={q.id} text={q.text} />
                    ))}
                </div>

                {/* Third Section */}
                <SectionHeader text="قرآن کی آیات" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredQuestions.map((q) => (
                        <QuestionCard key={`section3-${q.id}`} id={q.id} text={q.text} />
                    ))}
                </div>
            </div>
        </main>
    )
}
