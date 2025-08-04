

// app/components/HomePage.jsx
export default function HomePage() {
  return (
    <main className="bg-white text-left text-blue-900">
      {/* Hero Section */}
      <section className="section-hero  bg-hero-bg bg-cover  text-white   text-center">
        <div className="bg-overlay md:px-[20%] w-full h-[100%] py-32">
        <h1 className="text-4xl text-left
         md:text-6xl font-bold mb-4">
          Solusi Terpercaya untuk Kebutuhan Bahan Bangunan Anda
        </h1>
        <div className="w-full flex justify start gap-2">
          <button className="bg-red-500  px-6 py-3 font-semibold rounded-lg shadow hover:bg-red-700 transition">
            Lihat Produk
          </button>
          <button className=" bg-blue-700 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Hubungi Kami
          </button>
        </div>
        </div>


      </section>

      {/* Tentang Kami Section */}
      <section className="section-about  md:px-[20%]  [&>*]:w-full  w-full flex py-16 px-4  mx-auto text-left">
<div className="row ">logo</div>
<div className="row">
        <h2 className="text-3xl font-bold mb-4 uppercase">Tentang Kami</h2>
        <p className="text-lg text-gray-700">
          Kami adalah penyedia bahan bangunan terpercaya yang telah melayani berbagai proyek dari rumah hingga industri besar. Mengutamakan kualitas dan kepercayaan sejak awal berdiri.
        </p>
</div>
      </section>

      {/* Produk Section */}
      <section className="section-produk bg-yellow-300 md:px-[20%] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-10 uppercase">Produk Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Besi', 'Semen', 'Cat', 'Pipa', 'Alat Tukang', 'Batu Bata'].map((produk) => (
              <div key={produk} className="bg-white rounded-lg shadow p-6 text-center">
                <div className="h-32 bg-gray-200 rounded mb-4" /> {/* Placeholder Gambar */}
                <h3 className="text-xl font-semibold">{produk}</h3>
                <p className="text-sm text-gray-600 mt-2">Deskripsi singkat produk {produk.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Proyek Section */}
      <section className="section-galeri py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-left mb-10">Galeri Proyek</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-40 bg-gray-300 rounded-lg" />
          ))}
        </div>
      </section>

      {/* Kontak Section */}
      <section className="section-kontak bg-blue-700 text-white py-16 px-4 text-center">
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
