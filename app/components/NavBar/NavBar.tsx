import Link from "next/link";
import React from "react";
import SearchResult from "./SearchResult";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full flex justify-between text-blue-700 px-[20%]">
      {/* <Link href="/" className="logo text-xl text-gray-900 font-bold"></Link> */}
      <ul className="flex gap-6 items-center  font-semibold ">
        <li><Link href="/" >
        <Image src="/logo.png" alt="Logo Maxima" width={100} height={100} className="inline-block mr-2" />
        </Link></li>
        <li><Link href="/#tentang" >Tentang</Link></li>
        <li><Link href="/produk" >Produk</Link></li>
      </ul>
      {/* <SearchResult /> */}
    </div>);
}
