import React from "react";
import { Search } from "lucide-react";
import Aboutimg from '../../public/images/about.jpg'
import Aboutimg2 from '../../public/images/aboutimg.png'

const Aboutcenter = () => {
  return (
    <div>
      <main className="container mx-auto py-8">
        {/* Center Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-green-800">
            Maula Ali Research Center
          </h1>
          <p className="text-center max-w-3xl mx-auto mt-2 text-gray-700">
            Discover a wealth of Islamic knowledge, from insightful articles to
            in-depth research. Explore the rich heritage of Islam and gain a
            deeper understanding of its teachings and practices.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Minara Masjid Trust Section */}
          <div className="p-6">
            <img
              src={Aboutimg}
              alt="Minara Masjid"
              width={1200}
              height={400}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <div className="mt-4">
              <p className="text-orange-500 font-medium">About</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Minara Masjid Trust
              </h2>
              <p className="text-gray-700 text-sm">
                Maula Ali Research Centre aims to acquire old Islamic
                manuscripts (Interpretations, Commentaries, Exegesis, etc.) of
                our ancestors from libraries across the world which have not
                been published. If published, they are no longer accessible,
                etc. and work upon its publication according to modern standards
                by carrying out research on the Arabic and Persian scripts,
                referencing, easy translation into multiple languages, mainly
                English, Hindi and Urdu, and lastly, printing and distributing
                it amongst the scholars, research experts, intellectuals and the
                entire Muslim Ummah.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                Maula Ali Research Centre aims to acquire old Islamic
                manuscripts (Interpretations, Commentaries, Exegesis, etc.) of
                our ancestors from libraries across the world which have not
                been published. If published, they are no longer accessible,
                etc. and work upon its publication according to modern standards
                by carrying out research on the Arabic and Persian scripts,
                referencing, easy translation into multiple languages, mainly
                English, Hindi and Urdu, and lastly, printing and distributing
                it amongst the scholars, research experts, intellectuals and the
                entire Muslim Ummah.
              </p>
            </div>
          </div>

          {/* Library Section */}
          <div className="p-6 border-t border-gray-200">
            <img
              src={Aboutimg}
              alt="Research Library"
              width={1200}
              height={400}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <div className="mt-4">
              <p className="text-orange-500 font-medium">About</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Maula Ali Research Centre
              </h2>
              <p className="text-gray-700 text-sm">
                Maula Ali Research Centre aims to acquire old Islamic
                manuscripts (Interpretations, Commentaries, Exegesis, etc.) of
                our ancestors from libraries across the world which have not
                been published. If published, they are no longer accessible,
                etc. and work upon its publication according to modern standards
                by carrying out research on the Arabic and Persian scripts,
                referencing, easy translation into multiple languages, mainly
                English, Hindi and Urdu, and lastly, printing and distributing
                it amongst the scholars, research experts, intellectuals and the
                entire Muslim Ummah.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                Maula Ali Research Centre aims to acquire old Islamic
                manuscripts (Interpretations, Commentaries, Exegesis, etc.) of
                our ancestors from libraries across the world which have not
                been published. If published, they are no longer accessible,
                etc. and work upon its publication according to modern standards
                by carrying out research on the Arabic and Persian scripts,
                referencing, easy translation into multiple languages, mainly
                English, Hindi and Urdu, and lastly, printing and distributing
                it amongst the scholars, research experts, intellectuals and the
                entire Muslim Ummah.
              </p>
            </div>
          </div>

          {/* Interior Section */}
          <div className="p-6 border-t border-gray-200">
            <img
              src={Aboutimg2}
              alt="Center Interior"
              width={1200}
              height={400}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <div className="mt-4">
              <p className="text-orange-500 font-medium">About</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Biographies
              </h2>
              <p className="text-gray-700 text-sm">
                Maula Ali Research Centre aims to acquire old Islamic
                manuscripts (Interpretations, Commentaries, Exegesis, etc.) of
                our ancestors from libraries across the world which have not
                been published. If published, they are no longer accessible,
                etc. and work upon its publication according to modern standards
                by carrying out research on the Arabic and Persian scripts,
                referencing, easy translation into multiple languages, mainly
                English, Hindi and Urdu, and lastly, printing and distributing
                it amongst the scholars, research experts, intellectuals and the
                entire Muslim Ummah.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="p-6 border-t border-gray-200">
            <img
              src={Aboutimg}
              alt="Mosque"
              width={1200}
              height={400}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <div className="mt-4">
              <p className="text-orange-500 font-medium">About</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Team
              </h2>
              <p className="text-gray-700 text-sm">
                Maula Ali Research Centre aims to acquire old Islamic
                manuscripts (Interpretations, Commentaries, Exegesis, etc.) of
                our ancestors from libraries across the world which have not
                been published. If published, they are no longer accessible,
                etc. and work upon its publication according to modern standards
                by carrying out research on the Arabic and Persian scripts,
                referencing, easy translation into multiple languages, mainly
                English, Hindi and Urdu, and lastly, printing and distributing
                it amongst the scholars, research experts, intellectuals and the
                entire Muslim Ummah.
              </p>
            </div>
          </div>

          {/* Scholars Section */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
              Islamic Scholars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-2 border-green-200 flex items-center justify-center mb-2">
                    <img
                      src="#"
                      alt="Scholar Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="font-medium text-gray-800">
                    Allama Mazhar Alimi Sahab
                  </h3>
                  <p className="text-orange-500 text-sm">Islamic Scholars</p>
                </div>
              ))}
            </div>
          </div>

          {/* Administrators Section */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
              Administrators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-2 border-green-200 flex items-center justify-center mb-2">
                    <img
                       src="#"
                      alt="Administrator Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="font-medium text-gray-800">
                    Allama Mazhar Alimi Sahab
                  </h3>
                  <p className="text-orange-500 text-sm">Islamic Scholars</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutcenter;
