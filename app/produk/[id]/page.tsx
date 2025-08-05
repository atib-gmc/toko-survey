'use client'

import BackButton from '@/components/ui/BackButton'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285155117796' // Ganti dengan nomor WA kamu
    const product = {
      name: 'Nama Produk',
      price: 'Rp299.000',
      description:
        'Deskripsi singkat tentang produk ini. Menjelaskan fitur dan manfaat utama dalam gaya bahasa yang simple dan ramah.',
    }

    const message = `Halo, saya tertarik dengan produk berikut:\n` +
      `Nama Produk: ${product.name}\n` +
      `Harga: ${product.price}\n` +
      `Deskripsi: ${product.description}\n` +
      `Apakah masih tersedia?`

    const encodedMessage = encodeURIComponent(message)
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(waLink, '_blank')
  }

  return (
    <section className="bg-[#f7f2ec] pt-20  text-gray-800 px-6 py-10 rounded-2xl shadow-md max-w-3xl mx-auto mt-10">
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

          {/* Tombol WA */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Beli Sekarang via WhatsApp
          </button>
        </div>
      </div>

      <BackButton >
        <span className="mt-6 inline-block text-blue-600 hover:underline">
          Kembali ke Daftar Produk
        </span>
      </BackButton>
    </section>
  )
}
