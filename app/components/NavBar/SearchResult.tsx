"use client"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { product } from '@/lib/products'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Terminal } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SearchResult() {
  const [nameProd, setnameProd] = useState<null | string>(null)

  const data = product.filter(data => data.nama.includes(nameProd || "%"))

  return (
    <div className="search">
      <label className="relative">
        <input
          onChange={e => setnameProd(e?.target?.value)}
          type="text"
          className="bg-foreground rounded-full lg:w-[12rem] px-4 focus:outline-none text-background text-sm p-[4px]"
        />
        <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
        {nameProd && (
          <Alert className="absolute mt-6">
            <AlertTitle>Result:</AlertTitle>
            <AlertDescription className='flex flex-col'>
              {data.map(prod => (
                <Button onClick={() => setnameProd("")} variant="outline" asChild  >
                  <Link href={`/produk/${prod.id}`} >{prod.nama}</Link>
                </Button>
              ))}
            </AlertDescription>
          </Alert>
        )}
      </label>
    </div>

  )
}

