// app/products/page.tsx
import ProductCard from "@/components/ui/ProductCard";
import { products } from "../data/products";

export default function ProductListPage() {
  return (
    <section className="bg-yellow-300  min-h-screen py-16 px-[20%] text-left">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-10 md:text-left ">PRODUK</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
