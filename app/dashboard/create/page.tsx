"use client";
import { useState } from "react";

export default function AddProductPage() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        description: "",
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Produk dikirim:", formData);
        // TODO: kirim ke API
    };

    return (
        <div className="bg-yellow-400 min-h-screen py-6 px-4 ">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                    Tambah Produk
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
                    {/* Nama Produk */}
                    <div>
                        <label className="block font-semibold text-gray-700">Nama Produk</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    {/* Harga */}
                    <div>
                        <label className="block font-semibold text-gray-700">Harga</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    {/* Stok */}
                    <div>
                        <label className="block font-semibold text-gray-700">Stok</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <label className="block font-semibold text-gray-700">Deskripsi</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        ></textarea>
                    </div>

                    {/* Gambar */}
                    <div>
                        <label className="block font-semibold text-gray-700">Gambar Produk</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded font-semibold"
                    >
                        Simpan Produk
                    </button>
                </form>
            </div>
        </div>
    );
}
