import { Button } from "@/components/ui/button"; import { product } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between ">
      <section className="hero  bg-primary  w-full rounded-3xl p-8 flex gap-8 justify-between flex-wrap">
        {product.map(data => (
          <Link href={`produk/${data.id}`}>
            <div className="card cursor-pointer max-w-60 flex-wrap w-full flex-col items-center min-h-80 bg-background p-2 flex  align-auto rounded-3xl">
              <Image src="/hero.png" alt="img" width={120} height={120} className="max-h-[160px]" />
              <h3 className="text-md font-semibold">{data.nama}</h3>
              <h4 className="text-normal">Rp. 90.000.000</h4>
              <p className="text-xs text-gray-400 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, quae!</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
