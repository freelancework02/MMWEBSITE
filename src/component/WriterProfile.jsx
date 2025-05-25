import React from "react";

export default function WriterProfile() {
  const books = [
    {
      title: "Sayedul Astagfar",
      writer: "Hazrat Makhdoom Ali Mahaimi",
      translator: "Mufti Farooq Mahaimi",
    },
    {
      title: "Ghayatul Wajud",
      writer: "Hazrat Makhdoom Ali Mahaimi",
      translator: "Mufti Farooq Mahaimi",
    },
    {
      title: "The Eloquenc",
      writer: "Hazrat Makhdoom Ali Mahaimi",
      translator: "Mufti Farooq Mahaimi",
    },
    {
      title: "Zameerul Insan",
      writer: "Hazrat Makhdoom Ali Mahaimi",
      translator: "Mufti Farooq Mahaimi",
    },
  ];

  const questions = [
    {
      id: 1,
      arabicText: "اردو",
      romanText: "Roman",
      questionNumber: "101",
      content:
        "کیا آپ نے ہمیں بتایا ہے کہ آپ کون سے مسائل کا سامنا کر رہے ہیں؟ اگر ہاں تو ہمیں بتائیں کہ آپ کو کیا مدد چاہیے۔",
    },
    {
      id: 2,
      arabicText: "اردو",
      romanText: "Roman",
      questionNumber: "102",
      content:
        "کیا آپ نے اپنی مشکلات کے بارے میں تفصیل سے بتایا؟ اگر ہاں تو براہ کرم مزید وضاحت کریں۔",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Language Toggle */}
        <div className="flex items-center justify-start gap-4 mb-8">
          <div className="bg-[#d4af37] rounded-full px-4 py-2 text-sm font-medium">
            <span className="text-gray-600 mr-2">عربي</span>
            <span className="text-black">English</span>
          </div>
        </div>

        {/* About Writer Section */}
        <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Mufti Farooq Mahaimi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[#d4af37] text-lg font-medium mb-2">
                About Writer
              </h2>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Mufti Farooq Mahaimi
              </h1>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mufti Farooq Mahaimi, a renowned Islamic scholar and writer, has
                made significant contributions to Islamic literature. His
                extensive research and insightful analysis have enriched the
                understanding of Islamic teachings.
              </p>

              {/* Button now inside the About Writer box */}
              <button className="bg-green-200 hover:bg-green-300 text-green-800 border-none rounded-full px-4 py-2">
                ترجمہ آن کریں
              </button>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Books</h2>
          <p className="text-gray-600 text-lg">
            Discover, Research, and Connect with Books
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg"
            >
              <div className="p-6">
                <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#d4af37] w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#7a9b57] mb-3">
                  {book.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Writer</span>
                    <p className="text-sm font-medium text-gray-800">
                      {book.writer}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Translator</span>
                    <p className="text-sm font-medium text-gray-800">
                      {book.translator}
                    </p>
                  </div>
                </div>
                <button className="text-[#d4af37] text-sm font-medium border px-3 py-[4px] rounded cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <button className="border border-gray-400 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-2">
            View All Books
          </button>
        </div>

        {/* Questions Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-white shadow-sm border-0 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {question.arabicText}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {question.romanText}
                    </span>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    سوال {question.questionNumber}
                  </div>
                </div>
                <p
                  className="text-gray-800 text-right leading-relaxed"
                  dir="rtl"
                >
                  {question.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-full px-8 py-2">
            View All Questions
          </button>
        </div>
      </div>
    </div>
  );
}
