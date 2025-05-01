import React from "react";

import { ChevronRight } from "lucide-react";
import bg from '../../public/images/bg.png'
import image from '../../public/images/image 2.png'
import Banner from '../../public/images/banner.png'
import about from '../../public/images/about.jpg'
import Book from '../../public/images/book.png'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3e6] bg-opacity-80  bg-repeat" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navigation */}
      {/* <header className="sticky top-0 z-50 bg-white shadow-sm">
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
            <a href="/articles" className="text-gray-800 hover:text-green-700 font-medium">
              Articles
            </a>
            <a href="/operations" className="text-gray-800 hover:text-green-700 font-medium">
              Operations
            </a>
            <a href="/contact" className="text-gray-800 hover:text-green-700 font-medium">
              Contact
            </a>
          </nav>

          
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
      </header> */}

      {/* Banner */}
      <div className="w-full">
        <img
          src={Banner}
          alt="Maula Ali Research Centre Banner"
          width={1200}
          height={300}
          className="w-full h-auto"
        />
      </div>

      {/* About Sections */}
      <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={about}
            alt="Minara Masjid"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-green-700 font-semibold mb-1">About</h3>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Minara Masjid Trust</h2>
            <p className="text-gray-600 mb-4">
              Minara Ali Research Centre aims to acquire old Islamic manuscripts (in Arabic, Persian, Urdu, Hindustani,
              Punjabi, etc.) of which there are no longer published. If published, they are no longer accessible, etc.
              and make open to publication according to modern criteria, referencing, and translation into multiple
              languages, mainly English, Hindi and Urdu, and finally, printing and distributing it amongst the scholars,
              research experts, and students.
            </p>
            <a href="/about-trust" className="text-green-700 hover:underline inline-flex items-center">
              Read More <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-green-700 font-semibold mb-1">About</h3>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Maula Ali Research Centre</h2>
            <p className="text-gray-600 mb-4">
              Maula Ali Research Centre aims to acquire old Islamic manuscripts (in Arabic, Persian, Urdu, Hindustani,
              Punjabi, etc.) of which there are no longer published. If published, they are no longer accessible, etc.
              and make open to publication according to modern criteria, referencing, and translation into multiple
              languages, mainly English, Hindi and Urdu, and finally, printing and distributing it amongst the scholars,
              research experts, and students.
            </p>
            <a href="/about-centre" className="text-green-700 hover:underline inline-flex items-center">
              Read More <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <img
            src={about}
            alt="Research Centre Library"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
        </div>
      </section>

      {/* News & Events */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <span className="text-green-700 font-bold">N</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">News & Events</h2>
            </div>
            <div className="flex">
              <button className="bg-green-100 rounded-full p-1 mr-2">
                <ChevronRight className="h-5 w-5 text-green-700 rotate-180" />
              </button>
              <button className="bg-green-100 rounded-full p-1">
                <ChevronRight className="h-5 w-5 text-green-700" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Book Event",
                image: Book,
                description:
                  "Maula Ali Research Centre aims to acquire old Islamic manuscripts and make them accessible.",
              },
              {
                title: "New Book Launch",
                image: Book,
                description:
                  "Maula Ali Research Centre aims to acquire old Islamic manuscripts and make them accessible.",
              },
              {
                title: "Islamic Program",
                image: Book,
                description:
                  "Maula Ali Research Centre aims to acquire old Islamic manuscripts and make them accessible.",
              },
              {
                title: "Jashn e Maula Ali",
                image: Book,
                description:
                  "Maula Ali Research Centre aims to acquire old Islamic manuscripts and make them accessible.",
              },
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-green-700 text-sm hover:underline">
                      Read more
                    </a>
                    <a href="#" className="text-green-700 text-sm hover:underline flex items-center">
                      View <ChevronRight className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="/news"
              className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
            >
              View All
            </a>
          </div>
        </div>
      </section>

      {/* Our Books */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <span className="text-green-700 font-bold">B</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Our Books</h2>
                <p className="text-sm text-gray-600">Discover, Research, and Connect with Books</p>
              </div>
            </div>
            <div className="flex">
              <button className="bg-green-100 rounded-full p-1 mr-2">
                <ChevronRight className="h-5 w-5 text-green-700 rotate-180" />
              </button>
              <button className="bg-green-100 rounded-full p-1">
                <ChevronRight className="h-5 w-5 text-green-700" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Sayedul Astagfar",
                image: Book,
                author: "Hazrat Makhtoob Ali Mahami",
              },
              {
                title: "Ghayatul Wajod",
                image: Book,
                author: "Hazrat Makhtoob Ali Mahami",
              },
              {
                title: "The Eloquence",
                image: Book,
                author: "Hazrat Makhtoob Ali Mahami",
              },
              {
                title: "Zameerul Insan",
                image: Book,
                author: "Hazrat Makhtoob Ali Mahami",
              },
            ].map((book, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col">
                <div className="flex justify-center p-4 bg-gray-50">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="h-48 w-auto object-contain"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-gray-800 mb-2">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                  <p className="text-xs text-gray-500 mb-2">Mufti Farooque Mahami</p>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-green-700 text-sm hover:underline flex items-center">
                      Read more <ChevronRight className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="/books"
              className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
            >
              View All Books
            </a>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
            <p className="text-sm text-gray-600">Discover Insights and Knowledge from Our Authors</p>
          </div>

          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {[
              { text: "سکون کی دولت", count: 44 },
              { text: "آرام", count: 41 },
              { text: "صبر", count: 22 },
              { text: "دعا", count: 235 },
              { text: "صلح", count: 54 },
            ].map((tag, index) => (
              <div key={index} className="bg-amber-100 rounded-full px-3 py-1 text-amber-800 text-sm flex items-center">
                <span className="gulazrtext">{tag.text}</span>
                <span className="ml-2 bg-white rounded-full px-2 py-0.5 text-xs">{tag.count}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={`/images/article${(index % 5) + 1}.jpg`}
                    alt="Article Image"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">Sukoon Ki Dolat</h3>
                    <p className="text-xs text-gray-500 mb-2">Mufti Farooque Mahami</p>
                    <div className="flex justify-between items-center">
                      <a href="#" className="text-green-700 text-xs hover:underline flex items-center">
                        Read more <ChevronRight className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="/articles"
              className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
            >
              Read All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Our Islamic Scholars */}
      <section className="container mx-auto px-4 py-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Our Islamic Scholars</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Allama Sayyad Alim Sahab",
              "Mufti Farooque Mahami",
              "Allama Tauheed Alimi",
              "Allama Mazhar Alimi Sahab",
              "Mufti Farooque Mahami",
              "Allama Tauheed Alimi",
            ].map((scholar, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-white rounded-full p-4 border-4 border-green-100 mb-3">
                  <div className="bg-green-100 rounded-full p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-green-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{scholar}</h3>
                <p className="text-amber-600 mb-3">Islamic Scholars</p>
                <a
                  href="#"
                  className="inline-block px-4 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2023 Maula Ali Research Centre. All Rights Reserved.</p>
        </div>
      </footer> */}
    </main>
  );
}