"use client"
import React from 'react';
import { Package, Users, BarChart3, TrendingUp, Eye, Plus } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function AdminDashboard({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession()

    if (!session) {
        return redirect('/login')
    }

    return (
        <div className="min-h-screen bg-gray-50 lg:px-[20%] pt-8 ">
            {/* Header */}
            <header className="bg-white shadow-sm p-4">
                <div className=" py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold text-gray-900">Dashboard Admin</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className=" space-y-6">
                {children}
            </main>
        </div>
    );
}