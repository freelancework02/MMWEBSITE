import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import User from "../../public/images/user.png";
import Navbar from "./Navbar/Navbar";

export default function WriterProfile() {
  const [book, setBook] = useState([]);
  const [article, setArticle] = useState([]);
  const [activeSection, setActiveSection] = useState("books");
  const scrollRef = useRef(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("https://newmmdata-backend.onrender.com/api/books");
        const data = await response.json();
        if (Array.isArray(data)) setBook(data);

        const articlesRes = await fetch("https://newmmdata-backend.onrender.com/api/articles");
        const articlesData = await articlesRes.json();
        setArticle(articlesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    FetchData();
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (scrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const QuestionCard = ({ number, question }) => (
    <div className="bg-gradient-to-br from-[#e8f0d8] to-[#d9e7c2] rounded-xl p-4 flex flex-col h-full text-right">
  <div className="flex items-center justify-end mb-2">
    <div className="text-[#6a7d4a] text-sm">سوال نمبر</div>
    <div className="ml-2 bg-[#6a7d4a] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
      {number}
    </div>
  </div>
  <div className="text-[#4a5a32] mt-auto line-clamp-2">{question}</div>
</div>

  );

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-[#d8dba3] p-4 md:p-8">
      {/* Header */}
      <div className="mx-auto max-w-6xl text-right rounded-3xl bg-white p-8 shadow-sm flex justify-end items-center">
        <div className="text-right">
          <h2 className="text-lg font-medium text-[#7a9269]">About</h2>
          <h1 className="text-2xl font-semibold text-[#333333]  md:text-3xl">Farooque Mahaimi</h1>
        </div>
        <img src={User} alt="User" className="h-24 w-24 rounded-full border-4 border-white shadow-md object-cover" />
      </div>

      {/* Section Navigation */}
      <div className="mx-auto mt-4 grid max-w-6xl grid-cols-3 rounded-lg bg-white shadow-sm text-center">
        <button onClick={() => setActiveSection("books")} className="py-4 font-medium text-[#7a9269] hover:bg-[#f5f5f5]">BOOKS</button>
        <button onClick={() => setActiveSection("articles")} className="py-4 font-medium text-[#7a9269] hover:bg-[#f5f5f5]">ARTICLES</button>
        <button onClick={() => setActiveSection("questions")} className="py-4 font-medium text-[#7a9269] hover:bg-[#f5f5f5]">QUESTION ANSWERS</button>
      </div>

      {/* Book Section */}
      {activeSection === "books" && (
        <section className="py-10 relative">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white opacity-30 blur-3xl rounded-full -z-10"></div>
          <div className="max-w-7xl mx-auto bg-gradient-to-b from-white rounded-[2rem] shadow-md px-6 py-12">
            <h2 className="text-3xl font-bold text-[#3c4b28] text-center mb-6">Writer's Books</h2>

            {/* Arrows */}
            <div className="absolute left-4 top-[50%] -translate-y-1/2 z-10">
              <button onClick={() => scroll("left")} className="bg-[#e2f0d0] rounded-full p-2 hover:bg-[#d2e3bc]">
                <ChevronRight className="rotate-180 text-green-700" />
              </button>
            </div>
            <div className="absolute right-4 top-[50%] -translate-y-1/2 z-10">
              <button onClick={() => scroll("right")} className="bg-[#e2f0d0] rounded-full p-2 hover:bg-[#d2e3bc]">
                <ChevronRight className="text-green-700" />
              </button>
            </div>

            <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
              {book.map((b, i) => (
                <div key={i} className="min-w-[260px] bg-[#f1f7ea] rounded-xl p-4 shadow-sm flex-shrink-0">
                  <img src={`https://newmmdata-backend.onrender.com/api/books/cover/${b.id}`} alt={b.title} className="h-[220px] w-[200px] object-fit mb-4" />
                  <h3 className="text-lg font-semibold text-[#5b7a1c]">{b.title}</h3>
                  <p className="text-sm">Writer: {b.author}</p>
                  <p className="text-sm mb-2">Translator: {b.translator}</p>
                  <a href="/books" className="inline-block mt-auto bg-white border px-4 py-1.5 rounded-full text-yellow-700 hover:bg-yellow-200">Read More</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Section */}
      {activeSection === "articles" && (
        <section className="bg-white py-12 px-4 rounded-2xl mt-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Latest Articles</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {article.map((a, i) => (
                <div key={i} className={`cursor-pointer flex gap-2 px-4 py-1.5 rounded-full text-sm ${a.active ? "bg-green-600 text-white" : "bg-yellow-100 text-yellow-900"}`}>
                  <span>{a.topic}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${a.active ? "bg-white text-green-700" : "bg-white text-yellow-800"}`}>{a.views}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {article.map((a, i) => (
                <div key={i} className="bg-[#e8f0d9] rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-[200px] w-full">
                    <img src={`https://newmmdata-backend.onrender.com/api/articles/image/${a.id}`} alt={a.title} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                    <div className="absolute bottom-0 p-4 text-white font-bold text-lg line-clamp-2">{a.title}</div>
                  </div>
                  <div className="p-4 text-sm">
                    <p className="mb-2 line-clamp-2">{a.urduDescription || a.englishDescription}</p>
                    <p>Writer: {a.writers || "Unknown"}</p>
                    <p>Translator: {a.translator || "Unknown"}</p>
                    <div className="flex items-center justify-end gap-1 mt-2">
                      <Eye className="h-4 w-4 text-gray-600" />
                      <span>{a.views ?? 0}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Question Section */}
      {activeSection === "questions" && (
        <section className="bg-[#c9dba8] py-12 px-4">
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-3xl font-bold text-center text-[#6a7d4a] mb-6">Writer&apos;s Question Answer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <QuestionCard number="26" question="Agar 'aurat khula' ka mutaalba kare?" />
              <QuestionCard number="25" question="raj'at ke alfaaz" />
              <QuestionCard number="24" question="Baap ke diye hue paise se ghar khareeda to kya is ghar mein deegar waariseen ka haq hoga?" />
              <QuestionCard number="23" question="Kya khaala zaad bhai ki ladki se nikaah hosakta hai?" />
            </div>
          </div>
        </section>
      )}
    </div>
    </div>
  );
}
