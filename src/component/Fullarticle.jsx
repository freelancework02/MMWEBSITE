import React from "react";
import { Search } from "lucide-react";
import bg from "../../public/images/bg.png";
import Book from "../../public/images/book.png";
import user from "../../public/images/user.png";
import Articleimg1 from '../../public/Articlepage/article1.png'
import Articleimg2 from '../../public/Articlepage/article2.png'
import Articleimg3 from '../../public/Articlepage/article3.png'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f5e9]">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-36"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Main Title */}
      <div className="relative z-10 text-center py-8">
        <h1 className="gulzartext text-3xl font-bold text-[#4a7031] rtl">
          قرآن کی تعلیمات پر عمل کرنے کا انعام
        </h1>
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
            <div
              key={item}
              className="bg-white rounded-lg overflow-hidden shadow-md mb-6"
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-right rtl mb-2 gulzartext">
                      آیات قرآنی کی تفسیر انگیز
                    </h3>
                    <h4 className="font-bold text-right rtl mb-2 gulzartext">
                      تفسیر کا ایک نمونہ
                    </h4>
                    <div className="text-xs text-right rtl text-gray-600 mb-1">
                      Quran-e-Hakeem ki tafseer main Khubsoorat Andaz
                    </div>
                    <div className="text-xs text-right rtl text-gray-600 mb-1">
                      Quran-e-Hakeem ki tafseer-e-Mufti Farooq Ashrafi
                    </div>
                    <div className="text-xs text-right rtl text-gray-600 mb-1">
                      Writer : Mufti Farooq-e Mehmani
                    </div>
                    <div className="text-xs text-right rtl text-gray-600">
                      Mutarjim : Faiz Ashrafi
                    </div>
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
            <div className="gulzartext flex-1 bg-[#e8f0e0] text-center py-1 px-4 rtl">
              اردو
            </div>
            <div className="flex-1 bg-[#c1d9a3] text-center py-1 px-4">
              Roman
            </div>
            <div className="flex-1 bg-[#e8f0e0] text-center py-1 px-4">
              English
            </div>
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
              <h2 className="font-bold text-xl text-[#4a7031] gulzartext">
                مفتی فاروق مہمانی
              </h2>
              <div className="text-sm text-gray-600 flex items-center justify-end">
                <span>👁️ 100</span>
                <span className="mr-2 gulzartext">استاد اسکالر</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="rtl text-right mb-6 leading-relaxed">
            <p className="mb-4 gulzartext">
              قرآن کریم ربّ تعالی کی وہ آخری کتاب ہے، جس کو اس نے اپنے آخری
              نبی صلی اللہ علیہ وسلم پر نازل فرمایا اور سب سے بڑھ کر اس کی حفاظت
              کا ذمّہ اپنے سر پر لیا، جیسا کہ ربّ تعالی کا فرمان ہے: ترجمہ کنز
              الایمان:"ہم نے اس ذکر کو نازل کیا، ہم ہی اس کے محافظ ہیں۔" اس کی
              حفاظت پر دلیل یہ ہے کہ آج قرآن کریم لاکھوں، کڑوڑوں حفّاظ کے دلوں
              میں محفوظ ہے، جس طرح قرآن کریم پڑھنے کے، یاد کرنے کے بہت فضائل
              ہیں، اِسی طرح اس کو پڑھانے کے بھی بے شمار فضائل ہیں، جن میں چند
              ایک آج ہم ذکر کریں گے۔۔ ربّ کے پیارے حبیب، حبیبِ لبیب، حضرت
              محمد صلی اللہ علیہ وسلم کا فرمان ہے:"خَیْرُکُمْ مَنْ تَعَلَّمَ
              الْقُرْآنَ وَ عَلَّمَہٗ" تم میں سے بہتر وہ ہے، جو قرآن سیکھے اور
              سکھائے۔" (بخاری، کتاب فضائل القرآن، باب خَیْرُکُمْ مَنْ ۔۔ 3/410،
              حدیث5028) اس حدیث پاک کے تحت حضرت علامہ مُلّا علی قاری رحمۃ اللہ
              علیہفرماتے ہیں:"وہ مؤمنین میں سب سے فضیلت والا ہے۔"مزید آگے چل کر
              فرماتے ہیں"طیبی نے کہا: لوگوں میں سے تعلیم و تعلم کے اعتبار سے
              بہتر قرآن کی تعلیم دینا اور اس کو سیکھنا ہے۔" (مرقاۃ المناجیح، شرح
              مشکاۃ المصابیح، فضائل القرآن، ج4، ص 612، مکتبہ رشیدیہ کوئٹہ) اسی
              حدیث کے تحت مفتی احمد یار خان نعیمی رحمۃ اللہ علیہ فرماتے
              ہیں:"قرآن سیکھنے سکھانے میں بہت وُسعت ہے، بچوں کو قرآن کے ہجے
              روزانہ سکھانا، قاریوں کا تجوید سیکھنا سکھانا، علماء کا قرآنی احکام
              بذریعہ حدیث وفقہ سیکھنا سکھانا، صوفیائے کرام کا اَسرار و رموز
              بسلسلہ طریقت سیکھنا سکھانا سب قرآن ہی کی تعلیم ہے، صرف الفاظِ قرآن
              کی تعلیم مُراد نہیں۔(مراۃ المناجیح، شرح مشکاۃ المصابیح، ج3، ص 323)
              نبی پاک صلی اللہ علیہ وسلم کا فرمانِ نصیحت بنیاد ہے:" جس شخص نے
              قرآن مجید کی ایک آیت یا دین کی کوئی ایک سنّت سکھائی، قیامت کے
              دن اللہ پاک اس کے لیے ایسا ثواب تیار فرمائے گا کہ اس سے بہتر ثواب
              کسی کے لئے بھی نہیں ہوگا۔ (جمع الجو امع ، قسم الاقوال، ج 7، ص209،
              حدیث 22454)
            </p>
            <p className="mb-4 gulzartext">
              "یہ کتاب (قرآن) ایسی ہے جس میں کوئی شک نہیں، ہدایت ہے پرہیزگاروں
              کے لئے۔"
            </p>
            <p className="mb-4 gulzartext">
              اس کی خاصیت یہ ہے کہ جو قرآن کریم کو پڑھے، اس کو سمجھے، اور اس پر
              عمل کرے۔ اس کو دنیا میں بھی خوشحال زندگی ملتی ہے۔ اور آخرت کے لئے
              بھی سعادت ملتی ہے۔ اسی طرح جو قرآن کو پڑھنے کے لئے کوشش کرتا ہے،
              جب کہ پڑھنا آتا نہیں، اس کو بھی اجر ملتا ہے۔
            </p>
            <p className="mb-4 gulzartext">
              حضرت عثمان رضی اللہ عنہ فرماتے ہیں: "خیرکم من تعلم القرآن وعلمہ"
              یعنی تم میں سب سے بہتر وہ ہے، جو قرآن کو سیکھے اور سکھائے۔
            </p>
            <p className="mb-4 gulzartext text-gray-600 text-sm">
              (بخاری کتاب فضائل القرآن، باب خیرکم من تعلم القرآن۔ 3/410، حدیث
              نمبر5028)
            </p>

            {/* More paragraphs would go here */}

            <div className="flex  justify-between mt-8">
              <button className="gulzartext bg-[#e8f0e0] text-[#4a7031] px-4 py-1 rounded-full text-sm">
                آگے پڑھیں
              </button>
              <button className="gulzartext bg-[#e8f0e0] text-[#4a7031] px-4 py-1 rounded-full text-sm">
                قرآنی آیات
              </button>
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
              <h2 className="gulzartext font-bold text-xl text-[#4a7031]">
                استاد اسکالر
              </h2>
              <h3 className="gulzartext font-bold text-lg text-[#4a7031]">
                مفتی فاروق مہمانی مصباحی
              </h3>
            </div>
          </div>

          <div className="rtl text-right mt-4 leading-relaxed">
            <p className="gulzartext text-sm">
              "قرآن کریم" اللہ تعالیٰ کا کلام ہے، جو حضرت جبرائیل علیہ السلام کے
              ذریعے حضرت محمد صلی اللہ علیہ وسلم پر نازل ہوا۔ یہ اسلام کا بنیادی
              ماخذ ہے۔ قرآن کریم میں انسانی زندگی کے تمام پہلوؤں کے بارے میں
              رہنمائی موجود ہے۔ قرآن کریم کی تلاوت، اس کا مطالعہ اور اس پر عمل
              کرنا ہر مسلمان کے لیے ضروری ہے۔
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
          {[Articleimg1, Articleimg2, Articleimg3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative">
                <img
                  src={Book}
                  alt="Article"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-0.5 text-xs">
                  Eng
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5 text-xs">
                  Urdu
                </div>
                <div className="absolute bottom-2 right-2 bg-[#6a8a4f] text-white rounded-full px-2 py-0.5 text-xs">
                  PDF
                </div>
              </div>

              <div className="p-4">
                <h3 className="gulzartext font-bold text-right rtl mb-2">
                  {item % 2 === 0
                    ? "آیات قرآنی کی تفسیر انگیز"
                    : "رازِ کامیابی"}
                </h3>
                <h4 className="gulzartext font-bold text-right rtl mb-2">
                  {item % 2 === 0 ? "تفسیر کا ایک نمونہ" : "کامیابی کا راز"}
                </h4>
                <div className="text-xs text-right rtl text-gray-600 mb-1">
                  Quran-e-Hakeem ki tafseer main Khubsoorat Andaz
                </div>
                <div className="text-xs text-right rtl text-gray-600 mb-1">
                  Writer : Mufti Farooq-e Mehmani
                </div>
                <div className="text-xs text-right rtl text-gray-600">
                  Mutarjim : Faiz Ashrafi
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
