import React from 'react'

export default function NavBar() {
    return (
        <div className='w-full flex justify-between'>
            <div className="logo">
                Logo
            </div>
            <ul className='flex gap-2'>
                <li>Home</li>
                <li>Produk</li>
                <li>Tentang</li>
            </ul>
            <div className="search">
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
        </div>
    )
}
