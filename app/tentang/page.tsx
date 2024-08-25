import React from 'react'
export default function page() {

  return (
    <div className="space-y-8 mt-20 scale-[1.1]   max-w-screen   overflow-hidden ">
      <div className="row w-full  flex [&>*]:self-stretch w-full">
        <div className="col flex-1 w-full min-w-[20%]">
        </div>
        <div className="col relative flex mt-8 justify-start items-center gap-8 rounded-3xl p-8 flex-2 min-h-48 self-stretch translate-x-32  w-full bg-primary">
          <h1 className="text-xl absolute -top-4">Tentang <span className="text-[#beae97] font-bold -ml-[10px]">Kami</span> </h1>
          <div className="col space-y-6">
            <h1 className="text-3xl font-bold ">MAXIMA</h1>
            <h1 className="text-3xl font-bold ">SURVEY.</h1>
          </div>
          <div className="col px-32">
            <p className="text-center text-sm ">kami adalah jasa penyedia kebutuhan surveyor anda, dengan lebih dari 100 perusahaan</p></div>
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

