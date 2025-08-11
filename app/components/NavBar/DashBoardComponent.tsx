"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function UserMenu() {
    const { data: session, status } = useSession();

    if (status === "loading") return null;

    if (!session) {
        return
    }
    // console.log(session);

    return (
        <div className="flex items-center gap-4">
            {/* <span className="text-gray-700">{session.user.name}</span> */}
            <Link href="/dashboard" className="btn btn-primary">Dashboard</Link>
            <button
                onClick={() => signOut()}
                className="text-red-600 underline"
            >
                Logout
            </button>
        </div>
    );
}
