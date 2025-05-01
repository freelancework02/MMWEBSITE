
import React from "react"
import { Search } from "lucide-react"
import bg from '../../public/images/bg.png'
import Book from '../../public/images/book.png'
import user from '../../public/images/user.png'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f5e9]">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{ backgroundImage: `url(${bg})` }}
      />

    
      {/* Main Title */}
      <div className="relative z-10 text-center py-8">
        <h1 className="gulazrtext text-3xl font-bold text-[#4a7031] rtl">قرآن کی تعلیمات پر عمل کرنے کا انعام</h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Left Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
            <img
              src={Book}
              alt="Book Cover"
              width={300}
              height={200}
              className="w-full object-cover"
            />
          </div>

          {/* Book Listings */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-right rtl mb-2 gulazrtext">آیات قرآنی کی تفسیر انگیز</h3>
                    <h4 className="font-bold text-right rtl mb-2 gulazrtext">تفسیر کا ایک نمونہ</h4>
                    <div className="text-xs text-right rtl text-gray-600 mb-1">
                      Quran-e-Hakeem ki tafseer main Khubsoorat Andaz
                    </div>
                    <div className="text-xs text-right rtl text-gray-600 mb-1">
                      Quran-e-Hakeem ki tafseer-e-Mufti Farooq Ashrafi
                    </div>
                    <div className="text-xs text-right rtl text-gray-600 mb-1">Writer : Mufti Farooq-e Mehmani</div>
                    <div className="text-xs text-right rtl text-gray-600">Mutarjim : Faiz Ashrafi</div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="bg-[#f0f0f0] rounded-full p-1 text-xs flex items-center">
                      <span className="text-[#6a8a4f]">100</span>
                      <span className="ml-1">👁️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          {/* Language Tabs */}
          <div className="flex mb-6 rounded-full overflow-hidden">
            <div className="gulazrtext flex-1 bg-[#e8f0e0] text-center py-1 px-4 rtl">اردو</div>
            <div className="flex-1 bg-[#c1d9a3] text-center py-1 px-4">Roman</div>
            <div className="flex-1 bg-[#e8f0e0] text-center py-1 px-4">English</div>
          </div>

          {/* Author Info */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img
                src={user}
                alt="Author"
                width={60}
                height={60}
                className="rounded-full border-2 border-[#6a8a4f]"
              />
            </div>
            <div className="text-right rtl">
              <h2 className="font-bold text-xl text-[#4a7031] gulazrtext">مفتی فاروق مہمانی</h2>
              <div className="text-sm text-gray-600 flex items-center justify-end">
                <span>👁️ 100</span>
                <span className="mr-2 gulazrtext">استاد اسکالر</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="rtl text-right mb-6 leading-relaxed">
            <p className="mb-4 gulazrtext">
              قرآن کریم رب کائنات کی آخری کتاب ہے جس کو اس نے اپنے آخری نبی کی اللہ علیہ وسلم کے ذریعے نازل فرمایا ہے۔
              یہ پوری انسانی جماعت کے لئے ہدایت کا ذریعہ ہے۔ جیسا کہ رب تعالیٰ فرماتا ہے:
            </p>
            <p className="mb-4 gulazrtext">"یہ کتاب (قرآن) ایسی ہے جس میں کوئی شک نہیں، ہدایت ہے پرہیزگاروں کے لئے۔"</p>
            <p className="mb-4 gulazrtext">
              اس کی خاصیت یہ ہے کہ جو قرآن کریم کو پڑھے، اس کو سمجھے، اور اس پر عمل کرے۔ اس کو دنیا میں بھی خوشحال زندگی
              ملتی ہے۔ اور آخرت کے لئے بھی سعادت ملتی ہے۔ اسی طرح جو قرآن کو پڑھنے کے لئے کوشش کرتا ہے، جب کہ پڑھنا آتا
              نہیں، اس کو بھی اجر ملتا ہے۔
            </p>
            <p className="mb-4 gulazrtext">
              حضرت عثمان رضی اللہ عنہ فرماتے ہیں: "خیرکم من تعلم القرآن وعلمہ" یعنی تم میں سب سے بہتر وہ ہے، جو قرآن کو
              سیکھے اور سکھائے۔
            </p>
            <p className="mb-4 gulazrtext text-gray-600 text-sm">
              (بخاری کتاب فضائل القرآن، باب خیرکم من تعلم القرآن۔ 3/410، حدیث نمبر5028)
            </p>

            {/* More paragraphs would go here */}

            <div className="flex  justify-between mt-8">
              <button className="bg-[#e8f0e0] text-[#4a7031] px-4 py-1 rounded-full text-sm">آگے پڑھیں</button>
              <button className="bg-[#e8f0e0] text-[#4a7031] px-4 py-1 rounded-full text-sm">قرآنی آیات</button>
            </div>
          </div>
        </div>
      </div>

      {/* Author Profile */}
      <div className="relative z-10 container mx-auto px-4 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={user}
                alt="Author"
                width={100}
                height={100}
                className="rounded-full border-2 border-[#6a8a4f]"
              />
            </div>
            <div className="text-right rtl">
              <h2 className="gulazrtext font-bold text-xl text-[#4a7031]">استاد اسکالر</h2>
              <h3 className="gulazrtext font-bold text-lg text-[#4a7031]">مفتی فاروق مہمانی مصباحی</h3>
            </div>
          </div>

          <div className="rtl text-right mt-4 leading-relaxed">
            <p className="gulazrtext text-sm">
              "قرآن کریم" اللہ تعالیٰ کا کلام ہے، جو حضرت جبرائیل علیہ السلام کے ذریعے حضرت محمد صلی اللہ علیہ وسلم پر
              نازل ہوا۔ یہ اسلام کا بنیادی ماخذ ہے۔ قرآن کریم میں انسانی زندگی کے تمام پہلوؤں کے بارے میں رہنمائی موجود
              ہے۔ قرآن کریم کی تلاوت، اس کا مطالعہ اور اس پر عمل کرنا ہر مسلمان کے لیے ضروری ہے۔
            </p>
          </div>
        </div>
      </div>

      {/* Writer Articles Highlights */}
      <div className="relative z-10 container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center mb-6">
          <href href="/articles" className="text-[#4a7031] hover:underline">
            View All Articles
          </href>
          <h2 className="font-bold text-xl">Writer Articals Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src={Book}
                  alt="Article"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-0.5 text-xs">Eng</div>
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5 text-xs">Urdu</div>
                <div className="absolute bottom-2 right-2 bg-[#6a8a4f] text-white rounded-full px-2 py-0.5 text-xs">
                  PDF
                </div>
              </div>

              <div className="p-4">
                <h3 className="gulazrtext font-bold text-right rtl mb-2">
                  {item % 2 === 0 ? "آیات قرآنی کی تفسیر انگیز" : "رازِ کامیابی"}
                </h3>
                <h4 className="gulazrtext font-bold text-right rtl mb-2">
                  {item % 2 === 0 ? "تفسیر کا ایک نمونہ" : "کامیابی کا راز"}
                </h4>
                <div className="text-xs text-right rtl text-gray-600 mb-1">
                  Quran-e-Hakeem ki tafseer main Khubsoorat Andaz
                </div>
                <div className="text-xs text-right rtl text-gray-600 mb-1">Writer : Mufti Farooq-e Mehmani</div>
                <div className="text-xs text-right rtl text-gray-600">Mutarjim : Faiz Ashrafi</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
