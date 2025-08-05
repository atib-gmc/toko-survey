import Image from "next/image";
import Link from "next/link";

import { log } from "console";
import { products } from "./data/products";
import ProductCard from "@/components/ui/ProductCard";

// app/components/HomePage.jsx
export default function HomePage() {
  return (
    <main className="bg-white text-left  text-blue-900">
      {/* Hero Section */}
      <section className="section-hero  bg-hero-bg bg-cover  text-white   text-center">
        <div className="bg-overlay  px-4 md:px-[20%] w-full h-[100%] py-32">
          <h1 className="text-4xl text-left
         md:text-6xl font-bold mb-4">
            Solusi Terpercaya untuk Kebutuhan Instrumen pengukuran dan pemetaan konstruksi anda
          </h1>
          <div className="w-full flex  start gap-2">
            <Link href={"/produk"} className="bg-red-500  px-6 py-3 font-semibold rounded-lg shadow hover:bg-red-700 transition">
              Lihat Produk
            </Link>
            <Link href="#footer" className=" bg-blue-700 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
      {/* Tentang Kami Section */}
      <section id="tentang" className="section-about  md:px-[20%] md:gap-8  [&>*]:w-full  w-full flex gap-5 py-6 px-4 flex-col xl:flex-row  mx-auto text-left  md:flex">
        <div className="logo flex items-center ">
          <Image src="/logo.png" alt="Logo Maxima" width={150} height={150} className="inline-block mr-2" />
          <div className="name flex flex-col ">
            <span className="text-2xl font-bold italic text-red-500">Bintang Survey</span>
            <span className="text-lg text-gray-600 ">Survey Instrument's</span>
          </div>
        </div>


        <div className="row">
          <h2 className="text-3xl font-bold mb-4 uppercase">Tentang Kami</h2>
          <p className="text-lg text-gray-700">
            <strong>Bintang Survey</strong> adalah supplier alat konstruksi yang fokus pada penyediaan alat survey tanah, GPS tracker, dan peralatan pendukung proyek. Kami mendukung berbagai kebutuhan di bidang konstruksi dan pemetaan dengan produk berkualitas dan layanan terpercaya. Komitmen kami adalah menjadi mitra terbaik untuk akurasi dan efisiensi setiap proyek Anda.              </p>
        </div>
      </section>

      {/* Produk Section */}
      <section className="section-produk bg-yellow-300 md:px-[20%] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-10 uppercase">Produk Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product) => (

              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </div>
      </section>

      {/* Galeri Proyek Section */}
      <section className="section-galeri px-4  py-16 w-full md:px-[20%]  mx-auto">
        <h2 className="text-3xl font-bold text-left mb-10">Galeri Proyek</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-40 bg-gray-300 rounded-lg" />
          ))}
        </div>
      </section>

      {/* Kontak Section */}
      <section id="footer" className="section-kontak bg-blue-700  text-white md:px-[20%] py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
        <p className="mb-6">Silakan hubungi kami melalui informasi di bawah ini:</p>
        <div className="space-y-2">
          <p>Email: <a href="mailto:info@bsbahanbangunan.com" className="underline">info@bsbahanbangunan.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/628123456789" className="underline">+62 812 3456 789</a></p>
          <p>Alamat: Jl. Contoh No. 123, Kota Anda</p>
        </div>
      </section>
    </main>
  );
}
