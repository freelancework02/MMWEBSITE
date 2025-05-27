import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../public/images/marclogo.png";

import bg from "../../public/images/bg.png";
import Book from "../../public/images/book.png";
import user from "../../public/images/user.png";
import Articleimg1 from "../../public/Articlepage/article1.png";
import Articleimg2 from "../../public/Articlepage/article2.png";
import Articleimg3 from "../../public/Articlepage/article3.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [article, setArticle] = useState([]);
  const [activeLanguage, setActiveLanguage] = useState("urdu"); // Default to Urdu
  const [allarticle, setAllarticle] = useState([]);
  const articleImages = [Articleimg1, Articleimg2, Articleimg3];
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleArticle = async () => {
      try {
        const res = await fetch(
          `https://newmmdata-backend.onrender.com/api/articles/${id}`
        );
        const data = await res.json();
        setArticle(data);

        const articleres = await fetch(
          "https://newmmdata-backend.onrender.com/api/articles"
        );
        const resdata = await articleres.json();
        setAllarticle(resdata);
        console.log("All article Data : ", resdata);
      } catch (err) {
        console.error("Error fetching Article:", err);
      }
    };

    if (id) fetchSingleArticle();
  }, [id]);

  if (!article) {
    return <div className="text-center p-4">لوڈ ہو رہا ہے...</div>;
  }

  const getActiveDescription = () => {
    switch (activeLanguage) {
      case "english":
        return (
          article.englishDescription || "No English description available."
        );
      case "urdu":
        return article.urduDescription || "اردو تفصیل دستیاب نہیں ہے۔";
      case "roman":
        return article.englishDescription || "No Roman description available.";
      default:
        return article.urduDescription || "اردو تفصیل دستیاب نہیں ہے۔";
    }
  };

  const activeDescription = getActiveDescription();

  const formatDescription = (htmlString) => {
    if (!htmlString) return [];

    const cleanText = htmlString
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();

    return cleanText.split("\n").filter((line) => line.trim() !== "");
  };

  return (
    <main className="min-h-screen bg-[#f0f5e9] bg-cover z-10">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
      ></div>
      <header className="bg-[#718e56] sticky top-0 mb-4 z-50 shadow-sm border-b border-green-100">
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

      {/* Background Pattern */}
      {/* Main Title */}
      <div
        className="relative z-40 w-full rounded-b-4xl -mt-8 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex items-center justify-center mt-4 h-[200px] w-full bg-[#C0D7AA]/80 rounded-b-4xl">
          <h1 className="gulzartext text-3xl md:text-4xl font-bold text-[#4a7031] text-center rtl px-4">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Author Profile */}
      <div className="flex items-center justify-end gap-4 mt-6 px-6 mr-6 sm:px-8 md:px-16 flex-wrap">
        <div className="text-right">
          <p className="text-sm text-gray-600 gulzartext mt-1">استاد اسکالر</p>
          <h2 className="font-extrabold text-xl text-[#4a7031] gulzartext">
            مفتی فاروق مہمانی
          </h2>
        </div>
        <img
          src={user}
          alt="Author"
          className="w-16 h-16 rounded-full border-2 border-[#6a8a4f]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Main Content - moved first in DOM for mobile */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6 space-y-6 order-1 md:order-2">
          {/* Language Tabs */}
          <div className="flex rounded-full overflow-hidden border border-[#d6e5c4]">
            <button
              onClick={() => setActiveLanguage("urdu")}
              className={`gulzartext flex-1 text-center py-2 text-[#4a7031] cursor-pointer rtl ${
                activeLanguage === "urdu" ? "bg-[#c1d9a3]" : "bg-[#e8f0e0]"
              }`}
            >
              اردو
            </button>
            <button
              onClick={() => setActiveLanguage("roman")}
              className={`flex-1 text-center py-2 cursor-pointer ${
                activeLanguage === "roman" ? "bg-[#c1d9a3]" : "bg-[#e8f0e0]"
              }`}
            >
              Roman
            </button>
            <button
              onClick={() => setActiveLanguage("english")}
              className={`flex-1 text-center py-2 cursor-pointer ${
                activeLanguage === "english" ? "bg-[#c1d9a3]" : "bg-[#e8f0e0]"
              }`}
            >
              English
            </button>
          </div>

          {/* Article Content */}
          <div
            className={`leading-relaxed space-y-8 ${
              activeLanguage === "urdu" ? "rtl text-right" : "ltr text-left"
            }`}
          >
            <div
              className="prose max-w-none gulzartext"
              dangerouslySetInnerHTML={{ __html: activeDescription }}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="gulzartext bg-[#e8f0e0] text-[#4a7031] px-4 py-2 rounded-full text-sm">
              آگے پڑھیں
            </button>
            <button className="gulzartext bg-[#e8f0e0] text-[#4a7031] px-4 py-2 rounded-full text-sm">
              قرآنی آیات
            </button>
          </div>
        </div>

        {/* Left Sidebar - moved second in DOM for mobile */}
        <div className="md:col-span-1 space-y-6 order-2 md:order-1">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={Book}
              alt="Book Cover"
              className="w-full h-60 object-cover"
            />
          </div>

          {allarticle.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-[#ecf1e1]"
            >
              {/* Top Image with Overlay Text */}

              <div className="relative h-28 overflow-hidden rounded-t-xl">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://newmmdata-backend.onrender.com/api/articles/image/${item.id})`,
                  }}
                ></div>

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Text Content */}
                <div className="relative z-10 flex items-center justify-center h-full text-white text-center font-bold text-lg gulzartext rtl">
                  {item.title}
                </div>
              </div>

              {/* Article Info */}
              <div className="p-4 space-y-1 rtl text-left font-sans">
                <p className="text-[13px] text-gray-700 leading-snug line-clamp-2">
                  {item.englishDescription}
                </p>
                <p className="text-[13px] text-gray-700 font-semibold">
                  Writer : {item.writers}
                </p>
                <p className="text-[13px] text-gray-700 font-semibold">
                  Mutarjim : {item.translator}
                </p>

                {/* View Count */}
                <div className="bg-[#d6e5c4] rounded-full px-2 py-1 text-xs flex items-center w-fit mt-2">
                  <svg
                    className="w-4 h-4 text-[#6a8a4f] mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3.5C5.305 3.5 1.403 6.833 0 10c1.403 3.167 5.305 6.5 10 6.5s8.597-3.333 10-6.5c-1.403-3.167-5.305-6.5-10-6.5zM10 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
                    <circle cx="10" cy="10" r="2" />
                  </svg>
                  <span className="text-[#6a8a4f] ml-1">150</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Author Profile */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-6 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex-1 text-right order-2 md:order-1 rtl">
              <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 gulzartext">
                اسلامک اسکالر
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 gulzartext">
                مفتی فاروق مہائمی مصباحی
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed gulzartext">
                مفتی فاروق مہائمی ایک معروف اسلامی عالم، مدرس اور مصنف ہیں۔ آپ
                دینی خدمات میں نمایاں شہرت رکھتے ہیں۔ آپ کئی اسلامی تحقیقی کتب
                کے مصنف ہیں اور مختلف دینی اداروں سے وابستہ رہے ہیں۔ آپ نے
                اسلامی تعلیمات کو عام فہم انداز میں پیش کرنے کا کام کیا ہے۔ آپ
                کی تحریریں مختلف دینی رسائل میں شائع ہوتی رہتی ہیں۔ آپ نے مختلف
                مذہبی اور اخلاقی موضوعات پر تقاریر بھی کی ہیں اور آپ کی خدمات کو
                سراہا گیا ہے۔ آپ کو عوام میں خاصی مقبولیت حاصل ہے۔
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-green-100 border-4 border-green-200 flex items-center justify-center">
                <img
                  src={user}
                  alt="Scholar Icon"
                  width={80}
                  height={80}
                  className="text-green-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Writer Articles Highlights */}
      <div className="relative z-10 container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl text-[#1f1f1f]">
            Writer Articals Highlights
          </h2>
          <a
            href="/articles"
            className="bg-white border border-[#4a7031] text-[#4a7031] rounded-full px-4 py-1 text-sm font-medium hover:bg-[#eaf3df] transition"
          >
            View All Articles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allarticle.map((article, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-sm border border-gray-200"
            >
             
              <div className="relative h-48">
                <img
                  src={`https://newmmdata-backend.onrender.com/api/articles/image/${article.id}`}
                  alt="Article"
                  fill
                  className="object-cover h-full w-full"
                />

              
                <div className="absolute top-2 left-2 bg-[#e8f0e0] rounded-full px-2 py-0.5 text-xs font-['Gulzar']">
               {article.tags}
                </div>

             
                <div className="absolute top-2 right-2 flex space-x-2 rtl:space-x-reverse">
                  <div className="bg-white rounded-full px-2 py-0.5 text-xs">
                    Roman
                  </div>
                  <div className="bg-white rounded-full px-2 py-0.5 text-xs">
                    Urdu
                  </div>
                </div>

               
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-['Gulzar']  text-white  rtl mb-1 text-lg leading-snug line-clamp-1">
                    {article.title}
                  </h3>
                  <h4 className="font-['Gulzar']  text-white text-right rtl text-sm line-clamp-1">
                    {article.englishDescription}
                  </h4>
                </div>
              </div>

             
              <div className="p-4">
                <p className=" line-clamp-1 text-xs text-left rtl text-gray-600 mb-1 leading-relaxed">
                {article.englishDescription}
                </p>
                <p className="font-['Gulzar'] text-xs text-left rtl text-gray-600 mb-1 line-clamp-1">
                  <span className="font-semibold">Writer : </span> {article.writers}
                </p>
                <p className="font-['Gulzar'] text-xs text-left rtl text-gray-600 line-clamp-1">
                  <span className="font-semibold">Translator :</span> {article.translator}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
