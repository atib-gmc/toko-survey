// app/products/page.tsx
import ProductCard from "@/components/ui/ProductCard";
export const products = [
  {
    id: 1,
    name: "Produk Satu",
    description: "Deskripsi singkat produk satu.",
    price: "Rp 120.000",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Produk Dua",
    description: "Deskripsi singkat produk dua.",
    price: "Rp 95.000",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Produk Tiga",
    description: "Deskripsi singkat produk tiga.",
    price: "Rp 150.000",
    image: "https://placehold.co/600x400",
  },
];

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
