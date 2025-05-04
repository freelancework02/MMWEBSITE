import { Search, ChevronDown, Eye } from "lucide-react";
import React, { useState } from "react";
import bg from "../../public/images/bg.png";
import logo from "../../public/images/marclogo.png";
import Articleimg1 from "../../public/Articlepage/article1.png";
import Articleimg2 from "../../public/Articlepage/article2.png";
import Articleimg3 from "../../public/Articlepage/article3.png";

export default function ArticlesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <header className="text-center mb-10">
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
        <div className="flex flex-col lg:flex-row gap-6">
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
              value="Hazrat Makhdoom Ali Mahaimi"
            />
            <FilterDropdown
              label="Translator"
              value="Hazrat Makhdoom Ali Mahaimi"
            />
            <FilterDropdown label="Sorting" value="Latest" />
            <FilterDropdown label="Language" value="Urdu" />
            <FilterDropdown label="Topic" value="All" />
          </div>

          {/* Articles Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {articlesData.map((article, index) => (
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
const articlesData = [
  {
    title: "Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna",
    description:
      "Quraan-e-Hakeem ki aayaat mein Khuda-e-Quddus ne bijli ki taaseer e bhi zyaada hairat",
    writer: "Mufti Farooque Mahaimi",
    translator: "Faiz Ashrafi",
    viewCount: 150,
    imageUrl: Articleimg1,
    languages: ["Roman", "اردو", "English"],
  },
  {
    title: "رازکی باتیں",
    description:
      "قرآن کریم کی آیات میں خدا قدوس نے بجلی کی تاثیر سے بھی زیادہ حیرت انگیز تاثیر رکھی ہے۔",
    writer: "مصنف مفتی فاروق مہیمی",
    translator: "مترجم فیض اشرفی",
    viewCount: 150,
    imageUrl: Articleimg2,
    languages: ["Roman", "اردو", "English"],
    rtl: true,
  },

  {
    title: "رازکی باتیں",
    description:
      "قرآن کریم کی آیات میں خدا قدوس نے بجلی کی تاثیر سے بھی زیادہ حیرت انگیز تاثیر رکھی ہے۔",
    writer: "مصنف مفتی فاروق مہیمی",
    translator: "مترجم فیض اشرفی",
    viewCount: 150,
    imageUrl: Articleimg3,
    languages: ["Roman", "اردو", "English"],
    rtl: true,
  },
  // Repeat entries or map real data here...
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

function FilterDropdown({ label, value }) {
  return (
    <div className="mb-4">
      <div className="gulzartext text-sm font-medium text-gray-700 mb-1">
        {label}
      </div>
      <div className="flex items-center justify-between border rounded-md p-2 cursor-pointer hover:bg-gray-50">
        <span>{value}</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
}

function ArticleCard({
  title,
  description,
  writer,
  translator,
  viewCount,
  imageUrl,
  languages,
  rtl = false,
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-1">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="gulzartext bg-white text-gray-700 text-xs px-2 py-0.5 rounded gulazrtext"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`p-4 ${rtl ? "text-right" : ""}`}
        dir={rtl ? "rtl" : "ltr"}
      >
        <h3 className="font-bold text-lg mb-2 gulzartext">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 gulzartext">{description}</p>

        <div className="text-xs text-gray-500">
          <div className="mb-1 gulzartext">{writer}</div>
          <div className="mb-2 gulzartext">{translator}</div>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{viewCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
