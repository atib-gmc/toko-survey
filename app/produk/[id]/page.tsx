'use client'

import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className="bg-[#f7f2ec] text-gray-800 px-6 py-10 rounded-2xl shadow-md max-w-3xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://placehold.co/600x400"
            alt="Product"
            className="rounded-xl shadow-md w-full"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Nama Produk</h1>
          <p className="text-lg text-gray-600">
            Deskripsi singkat tentang produk ini. Menjelaskan fitur dan manfaat utama dalam gaya bahasa yang simple dan ramah.
          </p>
          <p className="text-2xl font-semibold text-green-700">Rp299.000</p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Beli Sekarang
          </button>
        </div>
      </div>
            <Link href="/produk">
        <span className="inline-block px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition font-medium">
          ← Kembali ke daftar produk
        </span>
      </Link>
    </section>
  )
}
