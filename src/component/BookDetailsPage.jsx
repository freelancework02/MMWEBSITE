import React from "react"
import Logo from '../../public/images/image 3.png'

export default function BookDetailsPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-[#8B4513] text-white p-4 flex justify-center items-center relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <href href="/" className="hover:text-yellow-200">
              Home
            </href>
            <href href="/about" className="hover:text-yellow-200">
              About Center
            </href>
            <div className="relative group">
              <href href="/books" className="font-bold hover:text-yellow-200 flex items-center">
                Books
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </href>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-white rounded-full p-2 -mt-8 border-4 border-[#8B4513]">
              <img src={Logo} alt="Research Center Logo" width={80} height={80} className="rounded-full" />
            </div>
          </div>

          <div className="flex space-x-8">
            <href href="/articles" className="hover:text-yellow-200">
              Articles
            </href>
            <href href="/gallery" className="hover:text-yellow-200">
              Gallery
            </href>
            <href href="/contact" className="hover:text-yellow-200">
              Contact
            </href>
          </div>
        </div>
      </nav>

      {/* Main Content with Background Pattern */}
      <div className="bg-[#E8D4A4] bg-opacity-80 relative">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-20"></div>

        {/* Book Details Section */}
        <div className="container mx-auto py-12 px-4 relative z-10">
          <div className="bg-[#E8D4A4] bg-opacity-60 p-8 rounded-lg mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Book Image */}
              <div className="md:w-1/3">
                <img
                  src="/book-cover.png"
                  alt="The Eloquence Book Cover"
                  width={400}
                  height={550}
                  className="w-full"
                />
              </div>

              {/* Book Details */}
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold text-[#4A7C59] mb-4">The Eloquenc</h1>

                <div className="inline-block bg-[#F0AD4E] text-white px-3 py-1 rounded-md mb-4">English</div>

                <div className="mb-2">
                  <div className="text-[#8B4513] font-medium">Writer</div>
                  <div className="text-xl font-bold">Hazrat Makhdoom Ali Mahaimi</div>
                </div>

                <div className="mb-4">
                  <div className="text-[#8B4513] font-medium">Translator</div>
                  <div className="text-xl font-bold">Mufti Farooque Ali Mahaimi</div>
                </div>

                <p className="text-gray-800 mb-6">
                  Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries,
                  Exegesis, etc.) of our ancestors from libraries across the world which have not been published, if
                  published, they are no longer accessible, etc. and work upon its publication according to modern
                  standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation
                  into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it
                  amongst the scholars, research experts, intellectuals and the entire Muslim Ummah.
                </p>

                <button className="flex items-center border border-[#4A7C59] text-[#4A7C59] px-6 py-2 rounded-full hover:bg-[#4A7C59] hover:text-white transition-colors">
                  Download
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* About Writer Section */}
          <div className="bg-white rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/6 flex justify-center">
                <img src={Logo} alt="Writer Logo" width={120} height={120} className="rounded-full" />
              </div>
              <div className="md:w-5/6">
                <h2 className="text-[#F0AD4E] text-xl font-medium mb-1">About Writer</h2>
                <h3 className="text-2xl font-bold mb-3">Mufti Farooq Mahaimi</h3>
                <p className="text-gray-700">
                  Mufti Farooq Mahaimi, a renowned Islamic scholar and writer, has made significant contributions to
                  Islamic literature. His extensive research and insightful analysis have enriched the understanding of
                  Islamic teachings. As a prolific author and translator, he has penned numerous books and translated
                  various Islamic texts into various languages. His work has been widely acclaimed for its clarity,
                  depth, and relevance to contemporary issues.
                </p>
              </div>
            </div>
          </div>

          {/* Writer Books Highlights */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Writer Books Highlights</h2>
              <href href="/books" className="text-[#4A7C59] hover:underline">
                View All Books
              </href>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((book) => (
                <div key={book} className="flex flex-col">
                  <img
                    src={`/book-${book}.png`}
                    alt={`Book ${book}`}
                    width={300}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-medium text-[#4A7C59] mb-1">Book Name</h3>
                  <href href={`/books/${book}`} className="text-sm text-[#F0AD4E] flex items-center hover:underline">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-3 w-3"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </href>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
