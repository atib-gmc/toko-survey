import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="w-full flex justify-between ">
      <Link href="/" className="logo text-xl font-bold"> &lt;/&gt; Maxima Survey.</Link>
      <ul className="flex gap-6">
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/tentang" >Tentang</Link></li>
        <li>Produk</li>
      </ul>
      <div className="search">
        <label className="relative">
          <input
            type="text"
            className="bg-foreground rounded-full lg:w-[13rem] px-4 focus:outline-none text-background text-sm p-[4px]"
          />
          <MagnifyingGlassIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-black" />
        </label>
      </div>
    </div>
  );
}
