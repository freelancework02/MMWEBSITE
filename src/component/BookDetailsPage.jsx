import React from "react";
import { Search, ChevronDown, User } from "lucide-react";
import bgPattern from "../../public/images/bg.png";
import Logo from "../../public/images/marclogo.png";
import Book1 from "../../public/OurBooks/book1.png";
import Book2 from "../../public/OurBooks/book2.png";
import Book3 from "../../public/OurBooks/book3.png";
import Book4 from "../../public/OurBooks/book4.png";

export default function BookDetailsPage() {
  return (
    <main className="min-h-screen font-sans bg-[#F8F3E9] bg-[url('/images/bg.png')] bg-repeat">
      {/* Header */}
      <header className="bg-[#5D2D10] text-white">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
          <nav className="flex items-center space-x-5 text-sm font-medium">
            <a href="#" className="hover:text-yellow-300">
              Home
            </a>
            <a href="#" className="hover:text-yellow-300">
              About Center
            </a>
            <div className="flex items-center hover:text-yellow-300 cursor-pointer">
              Books <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </nav>

          <div className="absolute top-6  left-1/2 transform -translate-x-1/2">
            <img src={Logo} alt="Logo" className="w-16 object-contain" />
          </div>

          <div className="flex items-center space-x-4">
            
            <a href="#" className="hover:text-yellow-300">
              Articles
            </a>
            <a href="#" className="hover:text-yellow-300">
              Gallery
            </a>
            <a href="#" className="hover:text-yellow-300">
              Contact
            </a>
            <a href="#" className="bg-yellow-300 rounded-full p-2">
              <User className="h-5 w-5 text-[#5D2D10]" />
            </a>
          </div>
        </div>
      </header>

      {/* Book Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#EFE2BB] p-6 md:p-12 rounded-xl mb-12 shadow">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/3 shadow-md">
              <img
                src={Book3}
                alt="The Eloquence"
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-[#558B2F] mb-2">
                The Eloquence
              </h1>
              <span className="inline-block bg-yellow-500 text-white px-3 py-1 text-sm rounded-full mb-4">
                English
              </span>
              <p className="text-[#5D4037] font-semibold text-sm">Writer</p>
              <p className="text-lg font-bold mb-2">
                Hazrat Makhdoom Ali Mahaimi
              </p>
              <p className="text-[#5D4037] font-semibold text-sm">Translator</p>
              <p className="text-lg font-bold mb-4">
                Mufti Farooque Ali Mahaimi
              </p>
              <p className="text-gray-800 text-sm mb-6">
              Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries, Exegesis, etc.) of our ancestors from libraries across the world which have not been published; if published, they are no longer accessible, etc. and work upon its publication according to modern standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it amongst the scholars, research experts, intellectuals and the entire Muslim Ummah.
              </p>
              <button className="flex items-center border border-[#558B2F] text-[#558B2F] px-5 py-2 rounded-full hover:bg-[#558B2F] hover:text-white">
                Download
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* About Writer */}
        <div className="bg-white p-6 md:p-10 rounded-xl shadow mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img src={Logo} alt="Writer" className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-[#DAA520] text-lg font-semibold">
                About Writer
              </h2>
              <h3 className="text-xl font-bold mb-2">Mufti Farooq Mahaimi</h3>
              <p className="text-sm text-gray-700">
              Mufti Farooq Mahaimi, a renowned Islamic scholar and writer, has made significant contributions to Islamic literature. His extensive research and insightful analysis have enriched the understanding of Islamic teachings. As a prolific author and translator, he has penned numerous books and translated various Islamic texts into various languages. His work has been widely acclaimed for its clarity, depth, and relevance to contemporary issues.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Writer Books Highlights</h2>
            <a
              href="/books"
              className="text-[#558B2F] bg-white px-5 py-2 rounded-full shadow text-sm font-medium hover:bg-[#558B2F] hover:text-white transition-colors duration-300"
            >
              View All Books
            </a>{" "}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[Book1, Book2, Book3, Book4].map((book, i) => (
              <div key={i} className="bg-white p-3 rounded-lg shadow">
                <img
                  src={book}
                  alt={`Book ${i + 1}`}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h3 className="text-[#558B2F] text-lg font-semibold mb-1">
                  Book Name
                </h3>
                <a
                  href="#"
                  className="text-[#DAA520] text-sm flex items-center hover:underline"
                >
                  Read More
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
