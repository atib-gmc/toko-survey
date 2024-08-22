import React from 'react'
export default function page() {
  let arr = [
    {
      name: "iphone",
      harga: 999
    },
    {
      name: "iphone",
      harga: 999
    },
  ]


  return (
    <div className="space-y-8 mt-20      overflow-hidden scale-[1.1]">
      <div className="row w-full flex [&>*]:self-stretch w-full">
        <div className="col flex-1 w-full min-w-[20%]">
        </div>
        <div className="col flex justify-start items-center gap-8 rounded-3xl p-8 flex-2 min-h-48 self-stretch translate-x-32  w-full bg-primary">
          <div className="col space-y-6">
            <h1 className="text-3xl font-bold ">MAXIMA</h1>
            <h1 className="text-3xl font-bold ">SURVEY.</h1>
          </div>
          <div className="col">
            <p className="text-center text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est dicta earum nulla molestias quidem debitis. Optio enim consequuntur veritatis?</p></div>
        </div>
      </div>
      <div className='bg-primary rounded-3xl pl-32 -translate-x-32 pb-4'>
        <div className="col  flex justify-start items-center gap-8 rounded-3xl p-2 flex-2 self-stretch -translate-x-32  w-full ">
          <div className="ml-36">
            <h1 className="text-xl" >Lokasi</h1>
            <p className="text-xs" >jl ahmad yani</p>
            <p className="text-xs" >20, km 39</p>
            <p className="text-xs" >Jakarta Utara</p>
          </div>
        </div>
        <div className="ml-36">
          <h1 className="text-xl" >Lokasi</h1>
          <p className="text-xs" >jl ahmad yani</p>
          <p className="text-xs" >20, km 39</p>
          <p className="text-xs" >Jakarta Utara</p>
        </div>
      </div>
    </div>
  )
}

