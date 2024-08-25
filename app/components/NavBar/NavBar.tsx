import Link from "next/link";
import React from "react";
import SearchResult from "./SearchResult";

export default function NavBar() {
  return (
    <div className="w-full flex justify-between ">
      <Link href="/" className="logo text-xl font-bold"> &lt;/&gt; Maxima Survey.</Link>
      <ul className="flex gap-6">
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/tentang" >Tentang</Link></li>
        <li><Link href="/produk" >Produk</Link></li>
      </ul>
      <SearchResult />
    </div>);
}
