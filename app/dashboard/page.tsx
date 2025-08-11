import { BarChart, BarChart3, Eye, Package, Plus, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
const stats = [
    { title: 'Total Produk', value: '1,234', icon: Package },
    { title: 'Proyek Aktif', value: '89', icon: BarChart3 },
    { title: 'Pengguna', value: '567', icon: Users },
    { title: 'Penjualan', value: 'Rp 2.4M', icon: TrendingUp },
];

const recentProducts = [
    { name: 'Besi Beton 12mm', category: 'Besi', stock: 150 },
    { name: 'Semen Portland', category: 'Semen', stock: 200 },
    { name: 'Cat Tembok Premium', category: 'Cat', stock: 75 },
    { name: 'Paku Beton 8cm', category: 'Peralatan', stock: 300 },
];

const recentProjects = [
    { name: 'Renovasi Rumah Pak Budi', status: 'Progress' },
    { name: 'Pembangunan Ruko', status: 'Planning' },
    { name: 'Gudang Pabrik', status: 'Selesai' },
];

export default function page() {
    return (
        <div className=" bg-gray-100 flex flex-col items-center justify-center w-full">
            {/* Stats Grid */}


            {/* Content Grid */}
            <div className="w-full gap-6">
                {/* Recent Products */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-4 border-b  flex justify-between items-center">
                        <h2 className="font-semibold text-gray-900 block">Produk Terbaru</h2>
                        <Link href="/dashboard/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                            <Plus className="w-4 h-4 inline mr-1" />
                            Tambah
                        </Link>
                    </div>
                    <div className="p-4 space-y-3">
                        {recentProducts.map((product, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{product.name}</p>
                                    <p className="text-sm text-gray-600">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-900">Stok: {product.stock}</p>
                                    <button className="text-blue-600 text-sm">
                                        <Eye className="w-3 h-3 inline mr-1" />
                                        Lihat
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Quick Actions */}

        </div>
    )
}
