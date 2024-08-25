import { Button } from '@/components/ui/button'
import { Product, product } from '@/lib/products'
import Image from 'next/image'
import React from 'react'

export default function page({ params }: { params: { id: number } }) {

  const data = product.filter(data => data.id == params.id)

  return (
    <div className='w-full flex flex-col items-center px-32'>
      <Image src="/hero.png" width={300} height={300} alt="img" />
      <div className="bg-primary md:px-32  text-center w-full min-h-60 rounded-3xl flex- justify-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">{data[0].nama}</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam obcaecati dolorem assumenda fugit possimus quisquam qui in nemo quod.</p>
        <p className="mt-6 text-center">Rp. {data[0].harga}</p>
        <Button className='bg-orange-300 text-white rounded-3xl mt-6 hover:bg-orange-400'>Beli di sini </Button>
      </div>
    </div>
  )
}

