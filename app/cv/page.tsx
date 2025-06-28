"use client";

import { useState } from 'react';
import { cvData } from '../../data/cv';

const CVPage = () => {
  const [lang, setLang] = useState('en'); // 'en' for English, 'jp' for Japanese

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-8 space-x-4">
        <button
          onClick={() => setLang('en')}
          className={`px-4 py-2 border rounded-md ${lang === 'en' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border-gray-300'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('jp')}
          className={`px-4 py-2 border rounded-md ${lang === 'jp' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border-gray-300'}`}
        >
          JP
        </button>
      </div>

      {lang === 'en' && (
        <section>
          <h1 className="text-4xl font-bold mb-8">Curriculum Vitae (CV)</h1>
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.education.map((item, index) => (
                  <li key={index}>{item.year}: {item.description}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Solo Exhibitions</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.soloExhibitions.map((item, index) => (
                  <li key={index}>{item.year}: {item.title}, {item.venue}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Group Exhibitions</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.groupExhibitions.map((item, index) => (
                  <li key={index}>{item.year}: {item.title}, {item.venue}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Awards & Grants</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.awardsGrants.map((item, index) => (
                  <li key={index}>{item.year}: {item.name}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Publications</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.publications.map((item, index) => (
                  <li key={index}>&quot;{item.title}&quot; ({item.type})</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Collections</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.collections.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      )}

      {lang === 'jp' && (
        <section>
          <h1 className="text-4xl font-bold mb-8">履歴書 (CV)</h1>
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">学歴</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.education.map((item, index) => (
                  <li key={index}>{item.year}: {item.descriptionJp}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">個展</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.soloExhibitions.map((item, index) => (
                  <li key={index}>{item.year}: 「{item.titleJp}」（{item.venueJp}）</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">主なグループ展</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.groupExhibitions.map((item, index) => (
                  <li key={index}>{item.year}: 「{item.titleJp}」（{item.venueJp}）</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">受賞歴・助成金</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.awardsGrants.map((item, index) => (
                  <li key={index}>{item.year}: {item.nameJp}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">出版物</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.publications.map((item, index) => (
                  <li key={index}>{item.year}: &quot;{item.title}&quot; ({item.type})</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">コレクション</h2>
              <ul className="list-disc list-inside space-y-2">
                {cvData.collections.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      )}
    </div>
  );
};

export default CVPage;