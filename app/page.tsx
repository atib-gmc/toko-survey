import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="hero bg-primary h-screen w-full rounded-3xl p-8">
        <div className="rows flex justify-between  [&>*]:flex-1 ">
          <div className="cols  flex flex-col lg:gap-10 gap-6 ">
            <Button className="bg-[#a2bbac] self-start text-white rounded-3xl h-8" >#Flexiblesolution</Button>
            <h1 className="text-3xl font-bold">Penuhi Kebutuhan dan <br /> Keperluan Survey Anda Bersama Kami</h1>
            <p className="text-sm text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est cum ex unde voluptas error, accusamus tempore iusto recusandae quia provident.</p>
            <Button variant={"secondary"} className="rounded-3xl lg:mt-11 self-start  h-12 p-[4px] pl-6 font-normal">Check Out Our Product    <ArrowRight className="text-white ml-2 bg-primary font-thin w-10 h-10 p-2   rounded-full text-3xl" /></Button>
          </div>
          <div className="col grid place-items-center">
            <Image src="/hero.png" alt="hero" width={350} height={350} />
          </div>
        </div>
      </section>
    </main>
  );
}
