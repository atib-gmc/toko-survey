import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

export default function NavBar() {
  return (
    <div className="w-full flex justify-between ">
      <div className="logo text-xl font-bold">Maxima Survey.</div>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Produk</li>
        <li>Tentang</li>
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
