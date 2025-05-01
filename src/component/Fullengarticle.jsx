import React from 'react'

const Fullengarticle = () => {
  return (
    <main className="min-h-screen bg-[#f0f2e6] relative">
<div>
          <div className="text-center py-8 relative z-10">
        <h1 className="text-3xl text-[#5a7a3d] font-medium">Qalam ke baare mein</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Article */}
          <div className="bg-white rounded-lg p-6 shadow-sm md:w-2/3">
            {/* Author Info */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border">
                <img src="/images/author-avatar.png" alt="Author" width={40} height={40} />
              </div>
              <div className="ml-4">
                <div className="text-xs text-gray-600">Writer</div>
                <h2 className="text-xl font-bold">Mufti Faroque Mahaimi</h2>
              </div>
              <div className="ml-auto flex items-center text-xs text-gray-500">
                <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-1"></span> 180
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex justify-end mb-4 space-x-1">
              <button className="px-3 py-1 text-xs rounded bg-gray-100 text-gray-700">اردو</button>
              <button className="px-3 py-1 text-xs rounded bg-[#d0e0c0] text-gray-700">Roman</button>
              <button className="px-3 py-1 text-xs rounded bg-gray-100 text-gray-700">English</button>
            </div>

            {/* Article Content */}
            <div className="space-y-4">
              <p>
                Qalam ki nok par rakhun.a ga is jahan.a ko main
                <br />
                Zamee.n lapei ke rakh duu.n ki aasmaan ko main
                <br />
                (Mumtaaz)
              </p>

              <p>
                Jis qalam ki qasam, saari kaainaat banaane waale Rab ne khaai ho, us mein koi baat zaruur hogi. Taareekh
                ka sarsari jaiza lene par aap ko pata chal jaaga ki duniya mein jo bhi inqilaab aaya hai, woh ya.n hi
                nahin.n aaya, qalam ne laaya hai. Yeh qalam qyaamat tak apna kaam karta rahe, qalamkaar paida hote
                rahenge.
              </p>

              <p>(2)</p>

              <p>
                Hazrat Qataada farmaate hain:
                <br />
                Qalam Allaah ki bohot badi ni'mat hai, agar qalam na ho to deen qaaim na rahe.
                <br />
                (Tafseer-e-Tabri, zikr-e-aayat Al-Laziī Allama Bil-Qalam)
              </p>

              <p>
                Yeh qalam hi tha, jis ne Quraan mahfuuz kiya.
                <br />
                Yeh qalam hi tha, jis ne Ahaadees-o-Suir jama' kiye.
                <br />
                Yeh qalam hi tha, jis ne Fiqhi masaail likhe.
                <br />
                Yeh qalam hi tha, jis ne Tasawwuf ki baate.n ham tak pohochaee.n.
                <br />
                Hazrat Qataada ne sach hi kaha hai ki qalam na ho to deen qaaim na reh sake.
              </p>

              <p>(3)</p>

              <p>
                Hame.n ma'luum hai ki log kitaabo.n se duur hote ja rahe hain. Teen teen ghante, paanch paanch ghante,
                saat saat ghante woh mobile par films, drama aur reels dekhte hain, magar koi kitaab agar, bees pachees
                minute bhi padhni pad jae, to aise be-zaar hote hain ki use phenk kar hi dam lete hain.
              </p>

              <p>
                Aisi situation mein ham qalam kaaro.n ki zimmedaariyaa.n aur bhi badh jaati hain. Ab hame.n usluub
                aasaan se aasaan aur tehreér mukhtasar se mukhtasar rakhni hogi, aur itni jaazib-o- purkashish ki qaari,
                na chaahte hue bhi padhne par majbuur ho jaae.
              </p>

              <p>Mahaimi.</p>

              {/* Tags */}
              <div className="flex space-x-2 mt-6">
                <span className="inline-block bg-[#d0e0c0] text-xs px-3 py-1 rounded">مفتی فاروق مہائمی</span>
                <span className="inline-block bg-[#d0e0c0] text-xs px-3 py-1 rounded">قرآن کی تفسیر</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 space-y-4">
            {/* Featured Article 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="/images/article1.jpg"
                alt="Article"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="bg-[#5a7a3d] text-white px-3 py-1 text-sm inline-block rounded mb-2">
                  Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  Quraan-e-Hakeem ki aayaat mein Khudaa-e-Qaadiro-o-Alīm ki hikmato.n aur qudrat kaa bayan
                </p>
                <div className="text-xs text-gray-600">Writer: Mufti Faroque Mahaimi</div>
                <div className="text-xs text-gray-600">Mutarjim: Faiz Ashrafi</div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-1"></span> 180
                </div>
              </div>
            </div>

            {/* Featured Article 2 - Repeat with slight variations */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="/images/article2.jpg"
                alt="Article"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="bg-[#5a7a3d] text-white px-3 py-1 text-sm inline-block rounded mb-2">
                  Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  Quraan-e-Hakeem ki aayaat mein Khudaa-e-Qaadiro-o-Alīm ki hikmato.n aur qudrat kaa bayan
                </p>
                <div className="text-xs text-gray-600">Writer: Mufti Faroque Mahaimi</div>
                <div className="text-xs text-gray-600">Mutarjim: Faiz Ashrafi</div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-1"></span> 180
                </div>
              </div>
            </div>

            {/* Featured Article 3 - Repeat with slight variations */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="/images/article3.jpg"
                alt="Article"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="bg-[#5a7a3d] text-white px-3 py-1 text-sm inline-block rounded mb-2">
                  Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  Quraan-e-Hakeem ki aayaat mein Khudaa-e-Qaadiro-o-Alīm ki hikmato.n aur qudrat kaa bayan
                </p>
                <div className="text-xs text-gray-600">Writer: Mufti Faroque Mahaimi</div>
                <div className="text-xs text-gray-600">Mutarjim: Faiz Ashrafi</div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-1"></span> 180
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-lg p-6 shadow-sm mt-8">
          <div className="flex items-center justify-between">
            <div className="text-right rtl text-sm w-3/4">
              <h3 className="text-lg font-bold mb-2 text-[#5a7a3d]">اسلامک اسکالر</h3>
              <h2 className="text-xl font-bold mb-2">مفتی فاروق مہائمی مصباحی</h2>
              <p className="text-gray-700 text-xs leading-relaxed">
                "قلم کی نوک پر رکھوں گا اس جہاں کو میں، زمیں لپیٹ کے رکھ دوں گا آسماں کو میں" (ممتاز) جس قلم کی قسم،
                ساری کائنات بنانے والے رب نے کھائی ہو، اس میں کوئی بات ضرور ہوگی۔ تاریخ کا سرسری جائزہ لینے پر آپ کو پتہ
                چل جائے گا کہ دنیا میں جو بھی انقلاب آیا ہے، وہ یوں ہی نہیں آیا، قلم نے لایا ہے۔ یہ قلم قیامت تک اپنا
                کام کرتا رہے، قلمکار پیدا ہوتے رہیں گے۔
              </p>
            </div>
            <div className="w-1/4 flex justify-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-[#5a7a3d] flex items-center justify-center">
                <img src="/images/author-large.png" alt="Author" width={80} height={80} />
              </div>
            </div>
          </div>
        </div>

        {/* Writer Articles Highlights */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Writer Articals Highlights</h2>
            <href href="/articles" className="text-sm text-gray-600 hover:underline">
              View All Articles
            </href>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Article Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/highlight1.jpg"
                  alt="Article"
                  width={300}
                  height={150}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">Urdu</div>
                <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded">180</div>
              </div>
              <div className="p-3">
                <div className="text-xs bg-[#5a7a3d] text-white px-2 py-1 rounded mb-2">
                  Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  Quraan-e-Hakeem ki aayaat mein Khudaa-e-Qaadiro-o-Alīm ki hikmato.n aur qudrat kaa bayan
                </p>
                <div className="text-xs text-gray-600">Writer: Mufti Faroque Mahaimi</div>
                <div className="text-xs text-gray-600">Mutarjim: Faiz Ashrafi</div>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/highlight2.jpg"
                  alt="Article"
                  width={300}
                  height={150}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">Urdu</div>
                <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded">180</div>
              </div>
              <div className="p-3">
                <div className="text-right rtl">
                  <p className="text-xs text-gray-600 mb-1">کیا آپ جانتے ہیں کہ رازی کیا ہے؟</p>
                  <div className="text-xs text-gray-600">مفتی فاروق مہائمی</div>
                  <div className="text-xs text-gray-600">مترجم: فیض اشرفی</div>
                </div>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/highlight3.jpg"
                  alt="Article"
                  width={300}
                  height={150}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">Urdu</div>
                <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded">180</div>
              </div>
              <div className="p-3">
                <div className="text-xs bg-[#5a7a3d] text-white px-2 py-1 rounded mb-2">
                  Aayaat-e-Quraani Ki Hairat Angez Taaseer Ka Ek Namuuna
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  Quraan-e-Hakeem ki aayaat mein Khudaa-e-Qaadiro-o-Alīm ki hikmato.n aur qudrat kaa bayan
                </p>
                <div className="text-xs text-gray-600">Writer: Mufti Faroque Mahaimi</div>
                <div className="text-xs text-gray-600">Mutarjim: Faiz Ashrafi</div>
              </div>
            </div>

            {/* Article Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="/images/highlight4.jpg"
                  alt="Article"
                  width={300}
                  height={150}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded">Urdu</div>
                <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded">180</div>
              </div>
              <div className="p-3">
                <div className="text-right rtl">
                  <p className="text-xs text-gray-600 mb-1">آیات قرآنی کی حیرت انگیز تاثیر کا ایک نمونہ</p>
                  <div className="text-xs text-gray-600">مفتی فاروق مہائمی</div>
                  <div className="text-xs text-gray-600">مترجم: فیض اشرفی</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>

  )
}

export default Fullengarticle