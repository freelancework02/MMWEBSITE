import React from "react";
import image1 from "../../public/Aboutcenter/about1.png";
import image2 from "../../public/Aboutcenter/about2.png";
import image3 from "../../public/Aboutcenter/about3.png";
import image4 from "../../public/Aboutcenter/about4.png";
import bg from "../../public/images/bg.png";
import Userimg from "../../public/Scholar/user.png";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  const sections = [
    {
      id: 1,
      title: "Minara Masjid Trust",
      imgPosition: "left",
      text: `Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries, Exegesis, etc.) of our ancestors from libraries across the world which have not been published; if published, they are no longer accessible, etc. and work upon its publication according to modern standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it amongst the scholars, research experts, intellectuals and the entire Muslim Ummah.
Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries, Exegesis, etc.) of our ancestors from libraries across the world which have not been published; if published, they are no longer accessible, etc. and work upon its publication according to modern standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it amongst the scholars, research experts, intellectuals and the entire Muslim Ummah..`,
    },
    {
      id: 2,
      title: "Maula Ali Research Center",
      imgPosition: "right",
      text: `Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries, Exegesis, etc.) of our ancestors from libraries across the world which have not been published; if published, they are no longer accessible, etc. and work upon its publication according to modern standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it amongst the scholars, research experts, intellectuals and the entire Muslim Ummah.
Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries, Exegesis, etc.) of our ancestors from libraries across the world which have not been published; if published, they are no longer accessible, etc. and work upon its publication according to modern standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it amongst the scholars, research experts, intellectuals and the entire Muslim Ummah..`,
    },
    {
      id: 3,
      title: "Biographies ",
      imgPosition: "left",
      text: `Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries, Exegesis, etc.) of our ancestors from libraries across the world which have not been published; if published, they are no longer accessible, etc. and work upon its publication according to modern standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it amongst the scholars, research experts, intellectuals and the entire Muslim Ummah.`,
    }, 
    {
      id: 4,
      title: "Team ",
      imgPosition: "right",
      text: `Maula Ali Research Centre aims to acquire old Islamic manuscripts (Interpretations, Commentaries, Exegesis, etc.) of our ancestors from libraries across the world which have not been published; if published, they are no longer accessible, etc. and work upon its publication according to modern standards by carrying out research on the Arabic and Persian scripts, referencing, easy translation into multiple languages, mainly English, Hindi and Urdu, and lastly, printing and distributing it amongst the scholars, research experts, intellectuals and the entire Muslim Ummah.`,
    },
  ];

  return (
    <main
      className="min-h-screen bg-repeat bg-opacity-80 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "#f5f3e6",
        backgroundBlendMode: "overlay",
      }}
    >
      <Navbar/>
      <div className="absolute inset-0 z-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-[#d4a762] mb-2 mx-auto"></div>
            <h1 className="text-2xl md:text-5xl font-serif text-[#2a4a24] mb-4 font-bold">
              Maula Ali Research Center
            </h1>
            <div className="w-20 h-1 bg-[#d4a762] mt-2 mx-auto"></div>
          </div>
          <p className="text-[#3c5c36] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Discover a wealth of Islamic knowledge, from insightful articles to
            in-depth research. Explore the rich heritage of Islam and gain a
            deeper understanding of its teachings and practices.
          </p>
        </header>

        <div className="space-y-28">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`relative flex flex-col ${
                section.imgPosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/3 relative">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={image1}
                    alt={section.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {section.imgPosition === "left" && (
                  <div className="hidden md:block absolute -bottom-8 -right-8 w-24 h-24 bg-[#d4a762] rounded-full opacity-30 z-0"></div>
                )}
                {section.imgPosition === "right" && (
                  <div className="hidden md:block absolute -bottom-8 -left-8 w-24 h-24 bg-[#d4a762] rounded-full opacity-30 z-0"></div>
                )}
              </div>

              <div className="w-full md:w-2/3 relative">
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-1 bg-[#d4a762] mr-3"></div>
                    <span className="text-[#d4a762] font-medium tracking-wider">
                      ABOUT
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2a4a24] mb-5 font-bold">
                    {section.title}
                  </h2>
                  <p className="text-[#555] leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                    {section.text}
                  </p>
                </div>
                {section.imgPosition === "left" && (
                  <div className="hidden md:block absolute -top-8 -left-8 w-16 h-16 bg-[#2a4a24] rounded-full opacity-10 z-0"></div>
                )}
                {section.imgPosition === "right" && (
                  <div className="hidden md:block absolute -top-8 -right-8 w-16 h-16 bg-[#2a4a24] rounded-full opacity-10 z-0"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3e2f] mb-10">
            Our Islamic Scholars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Allama Mazhar Alimi Sahab",
                img: Userimg,
              },
              {
                name: "Mufti Farooque Mahaimi",
                img: Userimg,
              },
              {
                name: "Allama Tauheed Alimi",
                img: Userimg,
              },
              {
                name: "Allama Mazhar Alimi Sahab",
                img: Userimg,
              },
              {
                name: "Mufti Farooque Mahaimi",
                img: Userimg,
              },
              {
                name: "Allama Tauheed Alimi",
                img: Userimg,
              },
            ].map((scholar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm px-6 py-8 flex flex-col items-center"
              >
                <div className="bg-white rounded-full border-4 border-green-200 p-1 mb-4">
                  <img
                    src={scholar.img}
                    alt={scholar.name}
                    className="rounded-full w-24 h-24 object-cover bg-green-100"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {scholar.name}
                </h3>
                <p className="text-[15px] text-orange-600 font-semibold mb-2">
                  Islamic Scholars
                </p>
                <a
                  href="#"
                  className="text-[14px] font-semibold text-black hover:underline"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
