import { Search, ChevronDown, Eye } from "lucide-react";
import React, { useState, useEffect } from "react";
import bg from "../../public/images/bg.png";
import logo from "../../public/images/marclogo.png";

import Articleimg1 from "../../public/Articlepage/article1.png";
import Articleimg2 from "../../public/Articlepage/article2.png";
import Articleimg3 from "../../public/Articlepage/article3.png";

export default function ArticlesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [writers, setWriters] = useState([]);
  const [translators, setTranslators] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [topics, setTopics] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({
    writer: "",
    translator: "",
    language: "",
    sorting: "latest",
    topic: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const writerRes = await fetch("https://newmmdata-backend.onrender.com/api/writers");
        const writerData = await writerRes.json();
        setWriters(writerData);

        const translatorRes = await fetch("https://newmmdata-backend.onrender.com/api/translators");
        const translatorData = await translatorRes.json();
        setTranslators(translatorData);

        const languageRes = await fetch("https://newmmdata-backend.onrender.com/api/languages/language");
        const languageData = await languageRes.json();
        setLanguages(languageData);

        const topicRes = await fetch("https://newmmdata-backend.onrender.com/api/topics");
        const topicData = await topicRes.json();
        setTopics(topicData);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };


  return (
    <div className="min-h-screen bg-[#e4f0d0] relative">
      <header className="bg-[#718e56]  sticky top-0 mb-4 z-50  shadow-sm border-b border-green-100">
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
              <a href="/questions" className="hover:text-gray-700">
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
              <a href="/questions" className="block hover:text-green-700">
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
      <div
        className="absolute inset-0 opacity-36 pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-10 ">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Articles</h1>
          <p className="max-w-3xl mx-auto text-gray-700">
            Discover a wealth of Islamic knowledge, from insightful articles to
            in-depth research. Explore the rich heritage of Islam and gain a
            deeper understanding of its teachings and practices.
          </p>
        </header>

        {/* Category Pills */}
        <div className="gulzartext flex flex-wrap justify-center gap-2 mb-10">
          <CategoryPill label="رمضان المبارک" count={56} />
          <CategoryPill label="اولیاء اللہ" count={614} />
          <CategoryPill label="نماز" count={22} />
          <CategoryPill label="عقائد" count={236} />
          <CategoryPill label="ناموس رسالت" count={56} />
          <CategoryPill label="سوال و جوابات" count={803} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 text-black">
          {/* Sidebar */}
          <div className="w-full lg:w-80 bg-white rounded-lg p-5 h-fit">
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="تلاش کریں"
                className="gulzartext w-full py-2 px-4 pr-10 border rounded-full text-right"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Filters */}
            <FilterDropdown
              label="Writer"
              value={selectedFilters.writer}
              options={writers.map((w) => w.name)} // Use .name here
              onChange={handleFilterChange}
            />
            <FilterDropdown
              label="Translator"
              value={selectedFilters.translator}
              options={translators.map((t) => t.name)}
              onChange={handleFilterChange}
            />
            <FilterDropdown
              label="Sorting"
              value={selectedFilters.sorting}
              options={["Latest", "Oldest"]}
              onChange={handleFilterChange}
            />
            <FilterDropdown
              label="Language"
              value={selectedFilters.language}
              options={languages.map((l) => l.language)}
              onChange={handleFilterChange}
             
            />
            <FilterDropdown
              label="Topic"
              value={selectedFilters.topic}
              options={topics.map((t) => t.topic)}
              onChange={handleFilterChange}
            />
          </div>

          {/* Articles Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {cards.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample data to loop through instead of repeating ArticleCard manually

const cards = [
  {
    id: 1,
    backgroundImage: Articleimg1,
    titleEn: "Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna",
    titleAr: "آیات قرآنی کی حیرت انگیز تاثیر کا ایک نمونہ",
    description: "Quraan-e-Hakeem ki aayaat mein Khudaa-e-Quddus ne bijli ki taaseer se bhi zyaada hairat",
    writer: "Mufti Farooque Mahaimi",
    translator: "Faiz Ashrafi",
    views: 150,
    type: "horseman",
  },
  {
    id: 2,
    backgroundImage: Articleimg2,
    titleEn: "رازکی باتیں",
    titleAr: "رازکی باتیں",
    description:
      "اگر کچھ پوچھنا ہو کہ قیامت کے دن کس چیز میں پوچھا جاؤ گا؟ تو یہ بات سمجھ لو کہ سب سے پہلے نمازوں کی پرسش ہوگی۔",
    writer: "Mufti Farooque Mahaimi",
    translator: "Faiz Ashrafi",
    views: 150,
    type: "pattern",
  },
  {
    id: 3,
    backgroundImage: Articleimg3,
    titleEn: "Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna",
    titleAr: "آیات قرآنی کی حیرت انگیز تاثیر کا ایک نمونہ",
    description: "Quraan-e-Hakeem ki aayaat mein Khudaa-e-Quddus ne bijli ki taaseer se bhi zyaada hairat",
    writer: "Mufti Farooque Mahaimi",
    translator: "Faiz Ashrafi",
    views: 150,
    type: "mosque",
  },

];

function CategoryPill({ label, count }) {
  return (
    <div className="bg-[#d3e7b1] gulzartext px-4 py-2 rounded-full flex items-center gap-2 text-gray-800">
      <span className="gulzartext">{label}</span>
      <span className="bg-[#6b8e23] gulzartext text-white rounded-full px-2 py-0.5 text-sm">
        {count}
      </span>
    </div>
  );
}


const FilterDropdown = ({ label, value, options, onChange }) => {
  const filterKey = label.toLowerCase();

  return (
    <div className="mb-4 text-black">
      <label className="block mb-1 font-medium text-black gulzartext">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(filterKey, e.target.value)}
        className="w-full border rounded p-2 text-black gulzartext"
      >
        <option value="" className="text-black gulzartext">Select {label}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option} className="text-black gulzartext">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};



function ArticleCard({
  backgroundImage,
  titleEn,
  titleAr,
  description,
  writer,
  translator,
  views,
  type,
}) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      <div className="relative h-[200px] w-full">
        <img
          src={backgroundImage}
          alt={titleEn || titleAr}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <button className="gulzartext bg-[#e8f0d9] text-black px-3 py-1 rounded-full text-sm">
            مطالعہ
          </button>
          <div className="flex gap-1">
            <button className="bg-white text-black px-3 py-1 rounded-full text-sm">Roman</button>
            <button className="bg-white gulzartext text-black px-3 py-1 rounded-full text-sm">اردو</button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          {titleEn && <h2 className="gulzartext font-bold text-lg">{titleEn}</h2>}
          {/* {titleAr && (
            <h2
              className={`gulzartext font-bold text-lg ${
                type === "pattern" ? "text-center text-2xl" : ""
              }`}
            >
              {titleAr}
            </h2>
          )} */}
        </div>
      </div>

      <div className="p-4 ">
        <p className={`gulzartext text-sm mb-3 ${type === "pattern" ? "text-right" : ""}`}>{description}</p>

        <div className="flex flex-col gap-1">
          <p className={`gulzartext text-sm font-medium  ${type === "pattern" ? "text-right" : ""}`}>
            {type === "pattern" ? "مصنف: مفتی فاروق مہایمی" : `Writer: ${writer}`}
          </p>
          <p className={`gulzartext text-sm font-medium ${type === "pattern" ? "text-right" : ""}`}>
            {type === "pattern" ? "مترجم: فیض اشرفی" : `Mutarjim: ${translator}`}
          </p>
        </div>

        <div className="flex justify-end items-center mt-2 gap-1">
          <Eye className="h-4 w-4 text-gray-600" />
          <span className=" text-sm">{views}</span>
        </div>
      </div>
    </div>
  );
}