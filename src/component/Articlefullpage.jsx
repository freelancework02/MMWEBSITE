import React from "react"
import { Search, User } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Navigation */}
      <nav className="bg-[#6a9a5f] text-white p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <href href="/" className="hover:text-green-200">
              Home
            </href>
            <href href="/about" className="hover:text-green-200">
              About Center
            </href>
            <div className="relative group">
              <href href="/books" className="hover:text-green-200 flex items-center">
                Books <span className="ml-1">▼</span>
              </href>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="/logo.png"
              alt="Dar-ul-Ifta Logo"
              width={70}
              height={70}
              className="bg-white rounded-full p-1"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search" className="pl-3 pr-8 py-1 rounded-full text-black text-sm w-28" />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <href href="/articles" className="hover:text-green-200">
              Articles
            </href>
            <href href="/gallery" className="hover:text-green-200">
              Gallery
            </href>
            <href href="/contact" className="hover:text-green-200">
              Contact
            </href>
            <div className="bg-[#d3e3c7] rounded-full p-1">
              <User className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-[#c5e0b4] pt-8 pb-16 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#2e5c1e] mb-4">دار الافتاء: ریسرچ سینٹر سوال وجوابات تحقیقات</h1>
          <p className="text-sm text-[#2e5c1e] max-w-4xl mx-auto leading-relaxed">
            یہ ایک جامع اسلامی مرکز ہے جہاں پر دینی سوالات کے جوابات دیئے جاتے ہیں۔ اس کی بنیادی خدمت لوگوں کو اسلامی
            احکامات کے بارے میں آگاہی فراہم کرنا ہے۔ یہاں پر مختلف موضوعات پر تحقیقی مقالات بھی شائع کیے جاتے ہیں۔
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Question and Answer */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-[#2e5c1e] flex items-center">
                  سوال نمبر
                  <span className="bg-[#c5e0b4] text-[#2e5c1e] rounded-full w-8 h-8 flex items-center justify-center ml-2">
                    101
                  </span>
                </h2>
                <div className="flex space-x-2">
                  <button className="bg-[#e8f3e0] text-[#2e5c1e] px-3 py-1 rounded-md text-sm">
                    قرآن و سنت سے ثابت
                  </button>
                  <button className="bg-[#e8f3e0] text-[#2e5c1e] px-3 py-1 rounded-md text-sm">نماز</button>
                </div>
              </div>

              <p className="text-right mb-8 text-[#2e5c1e]">
                کیا فرماتے ہیں علماء دین ومفتیان شرع متین اس مسئلہ میں کہ اگر کوئی شخص جو نماز پڑھتا ہے تو آدھے سے کس
                طرح نماز پوری کرنے کا طالب بتایا جاتا ہے کہ کھڑے ہو کر نماز شروع کرے یا اسی حالت میں نماز ہے تو آدھے سے
                کس طرح نماز پوری کی جائے۔
              </p>

              <div className="flex justify-end mb-6">
                <div className="flex items-center">
                  <div className="mr-4 text-right">
                    <h3 className="font-bold text-[#2e5c1e]">الجواب</h3>
                    <p className="text-[#2e5c1e]">مفتی فاروق مصباحی</p>
                  </div>
                  <div className="bg-[#e8f3e0] p-2 rounded-full">
                    <img src="/scholar.png" alt="Scholar" width={50} height={50} className="rounded-full" />
                  </div>
                </div>
              </div>

              <div className="text-right text-[#2e5c1e] leading-relaxed">
                <p className="mb-4">
                  بسم اللہ الرحمن الرحیم۔ الحمد للہ رب العالمین والصلوۃ والسلام علی سید المرسلین وعلی آلہ واصحابہ
                  اجمعین۔ جو شخص نماز پڑھتے ہوئے آدھے سے آگے بڑھ چکا ہو اس کے لیے نماز کو پورا کرنا واجب ہے۔ اگر کوئی
                  شخص نماز کی ایک رکعت پوری کر چکا ہو تو اسے نماز کو مکمل کرنا چاہیے۔
                </p>
                <p className="mb-4">
                  اگر کوئی شخص نماز میں کھڑا ہو کر قرات کر رہا ہو اور اسے یاد آئے کہ وہ پہلے رکوع میں نہیں گیا تھا تو
                  اسے چاہیے کہ رکوع کرے اور پھر باقی نماز مکمل کرے۔ اگر کوئی شخص نماز میں سجدہ کر رہا ہو اور اسے یاد آئے
                  کہ وہ رکوع میں نہیں گیا تھا تو اسے چاہیے کہ کھڑا ہو کر رکوع کرے اور پھر باقی نماز مکمل کرے۔
                </p>
                <p>
                  اگر کوئی شخص نماز میں تشہد میں بیٹھا ہو اور اسے یاد آئے کہ وہ سجدہ نہیں کیا تھا تو اسے چاہیے کہ سجدہ
                  کرے اور پھر تشہد پڑھے اور باقی نماز مکمل کرے۔ اگر کوئی شخص نماز میں آخری قعدہ میں بیٹھا ہو اور اسے یاد
                  آئے کہ وہ کوئی رکن چھوڑ آیا ہے تو اسے چاہیے کہ اس رکن کو پورا کرے اور پھر باقی نماز مکمل کرے۔
                </p>
              </div>
            </div>

            {/* Scholar Profile */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#2e5c1e]">اسلامک اسکالر</h3>
                <div className="flex items-center">
                  <div className="mr-4 text-right">
                    <p className="font-bold text-[#2e5c1e]">مفتی فاروق مصباحی مصباحی</p>
                  </div>
                  <div className="bg-[#e8f3e0] p-2 rounded-full">
                    <img src="/scholar-large.png" alt="Scholar" width={70} height={70} className="rounded-full" />
                  </div>
                </div>
              </div>

              <p className="text-right mt-4 text-[#2e5c1e]">
                مفتی فاروق مصباحی صاحب ایک معروف عالم دین ہیں۔ انہوں نے دارالعلوم دیوبند سے فارغ التحصیل ہونے کے بعد
                مختلف مدارس میں تدریس کے فرائض انجام دیے۔ آپ کئی کتب کے مصنف بھی ہیں اور آپ کے فتاوی کو علماء کی طرف سے
                بہت قدر کی نگاہ سے دیکھا جاتا ہے۔
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-center text-[#2e5c1e] mb-6">دیگر سوالات</h3>

              {[...Array(10)].map((_, index) => (
                <div key={index} className="mb-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-[#c5e0b4] text-[#2e5c1e] rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      101
                    </span>
                    <h4 className="text-[#2e5c1e] text-right text-sm font-medium">سوال</h4>
                  </div>
                  <p className="text-right text-xs text-[#2e5c1e]">
                    کیا فرماتے ہیں علماء دین ومفتیان شرع متین اس مسئلہ میں کہ اگر کوئی شخص جو نماز پڑھتا ہے تو آدھے سے
                    کس طرح نماز پوری کرنے کا طالب بتایا جاتا ہے۔
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Questions */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#2e5c1e] mb-6 text-right">متعلقہ سوالات</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-[#c5e0b4] text-[#2e5c1e] rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    101
                  </span>
                  <h4 className="text-[#2e5c1e] text-right text-sm font-medium">سوال</h4>
                </div>
                <p className="text-right text-xs text-[#2e5c1e]">
                  کیا فرماتے ہیں علماء دین ومفتیان شرع متین اس مسئلہ میں کہ اگر کوئی شخص جو نماز پڑھتا ہے تو آدھے سے کس
                  طرح نماز پوری کرنے کا طالب بتایا جاتا ہے۔
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
