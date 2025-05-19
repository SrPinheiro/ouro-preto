'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBookOpen, FiLayers, FiStar } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="w-full py-5 px-10 shadow-sm bg-white border-b border-gray-200 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-800">Ouro Preto</h1>
        <nav className="space-x-6 text-gray-600 text-base font-medium flex items-center">
          <a href="#historia" className="hover:text-gray-900 transition flex items-center gap-1">
            <FiBookOpen /> História
          </a>
          <a href="#arquitetura" className="hover:text-gray-900 transition flex items-center gap-1">
            <FiLayers /> Arquitetura
          </a>
          <a href="#curiosidades" className="hover:text-gray-900 transition flex items-center gap-1">
            <FiStar /> Curiosidades
          </a>
        </nav>
      </header>

      <section className="text-center py-24 px-6 bg-gray-50">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ouro Preto, História Viva do Brasil
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore a cidade onde o passado colonial se encontra com a arte, a cultura e a arquitetura barroca.
        </motion.p>
      </section>

      <section className="flex justify-center bg-white py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/ouro-preto.jpg"
            alt="Vista de Ouro Preto"
            width={1000}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      <section id="historia" className="bg-gray-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex justify-center items-center gap-2">
            <FiBookOpen className="text-gray-700" /> História
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ouro Preto foi o epicentro do ciclo do ouro no Brasil, no século XVIII. Seu legado está ligado à Inconfidência Mineira e à riqueza arquitetônica preservada até hoje, sendo um símbolo nacional de resistência e cultura.
          </p>
        </div>
      </section>

      <section id="arquitetura" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex justify-center items-center gap-2">
            <FiLayers className="text-gray-700" /> Arquitetura Barroca
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Com igrejas, museus e ruas de pedra, Ouro Preto preserva uma das maiores coleções de arte barroca da América Latina, com destaque para obras de Aleijadinho e Mestre Ataíde.
          </p>
        </div>
      </section>

      <section id="curiosidades" className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex justify-center items-center gap-2">
            <FiStar className="text-gray-700" /> Curiosidades
          </h3>
          <ul className="text-left text-gray-700 text-lg space-y-4 mt-4">
            <li>• Primeira cidade brasileira reconhecida pela UNESCO como Patrimônio Mundial.</li>
            <li>• Sede da UFOP, com rica produção cultural e acadêmica.</li>
            <li>• Localizada entre as montanhas da Serra do Espinhaço.</li>
            <li>• Palco do tradicional Festival de Inverno de Ouro Preto.</li>
          </ul>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 text-center py-6 mt-10 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ouro Preto.</p>
      </footer>
    </main>
  );
}
